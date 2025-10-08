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
      "financial services news",
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
  <article className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-sm shadow-gray-900/5 ring-1 ring-gray-900/5 overflow-hidden">
    <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto sm:h-[200px] md:h-full flex-shrink-0 p-2 rounded-xl">
      <Image
        src={post.imageSrc}
        alt={post.title}
        width={200}
        height={300}
        className="m-auto object-cover py-2 rounded-xl "
      />
    </div>
    <div className="flex flex-col p-4 sm:p-6 w-full sm:w-3/5">
      <h3 className="font-semibold text-lg lg:text-1xl text-[#020617] mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-[#64748B] text-base mb-2 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-">
        <Link
          href={`/news/${post.slug}`}
          className="bg-[#1D9B5E] text-white py-3 px-6 rounded-[14px] h-fit text-sm font-semibold"
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
              {post.title}
            </h1>

            {/* Article Body */}
            <div className="mt-2  p-4 mb-4 ">
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
