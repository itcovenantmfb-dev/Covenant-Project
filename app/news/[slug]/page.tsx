import Carousel from "@/app/_components/carousel";
import { allBlogPosts, Post } from "@/app/_data/blog-posts";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "covenant microfinance bank news",
      "banking news",
      "financial updates",
      post.title.toLowerCase(),
      "microfinance industry",
      "financial services news"
    ],
    openGraph: {
      title: `${post.title} - Covenant Microfinance Bank`,
      description: post.excerpt,
      url: `/news/${post.slug}`,
      images: [
        {
          url: post.imageSrc,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      title: `${post.title} - Covenant Microfinance Bank`,
      description: post.excerpt,
      images: [post.imageSrc],
      card: "summary_large_image",
    },
  };
}

const RelatedPostCard: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm shadow-gray-900/5 ring-1 ring-gray-900/5 overflow-hidden">
    <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:h-full flex-shrink-0">
      <Image
        src={post.imageSrc}
        alt={post.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col p-6 w-full md:w-3/5">
      <h2 className="text-lg font-bold text-gray-900 leading-tight">
        {post.title}
      </h2>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
        {post.excerpt}
      </p>
      <div className="mt-6 flex justify-between items-center">
        <Link
          href={`/news/${post.slug}`}
          className="inline-block rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
        >
          Read More
        </Link>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
    </div>
  </article>
);

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = allBlogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <main>
      <div className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
          <article>
            {/* Featured Image */}
            <div className="relative  aspect-[16/6] mb-8 overflow-hidden rounded-2xl">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h1>

            {/* Article Body */}
            <div className="mt-10  p-6 ">
              <div
                className="prose prose-lg max-w-none font-normal leading-relaxed prose-headings:text-gray-900 prose-strong:text-gray-900 prose-a:text-green-600 hover:prose-a:text-green-700"
                style={{ color: "hsla(215, 28%, 55%, 1)" }}
              >
                {post.content}
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts Section */}
        <section className="bg-[#F9FFF5] py-20 sm:py-24 w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Carousel />
    </main>
  );
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}
