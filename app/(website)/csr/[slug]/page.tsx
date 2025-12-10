
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Carousel from "../../_components/carousel";
import { getCSRBySlug, getAllCSR } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getCSRBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested CSR initiative could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "covenant microfinance bank csr",
      "corporate social responsibility",
      "community development",
      post.title.toLowerCase(),
      "social initiatives",
      "community impact",
    ],
    openGraph: {
      title: `${post.title} - Covenant Microfinance Bank`,
      description: post.excerpt,
      url: `/csr/${post.slug.current}`,
      images: [
        {
          url: urlFor(post.image).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      title: `${post.title} - Covenant Microfinance Bank`,
      description: post.excerpt,
      images: [urlFor(post.image).width(1200).height(630).url()],
      card: "summary_large_image",
    },
  };
}

interface CSRArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  image: any;
  content: any;
  author: string;
  category: string;
  publishedAt: string;
}

const RelatedPostCard: React.FC<{ post: CSRArticle }> = ({ post }) => (
  <article className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm shadow-gray-900/5 ring-1 ring-gray-900/5 overflow-hidden">
    <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:h-full flex-shrink-0">
      <Image
        src={urlFor(post.image).width(400).height(300).url()}
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
          href={`/csr/${post.slug.current}`}
          className="inline-block rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
        >
          Read More
        </Link>
        <p className="text-xs text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  </article>
);

export default async function CSRPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getCSRBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get all CSR articles and filter out current one for related posts
  const allCSR = await getAllCSR();
  const relatedPosts = allCSR.filter((p: CSRArticle) => p._id !== post._id).slice(0, 4);

  return (
    <main>
      <div className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
          <article>
            {/* Featured Image */}
            <div className="relative  aspect-[16/6] mb-8 overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.image).width(1200).height(600).url()}
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
                <PortableText value={post.content} components={portableTextComponents} />
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts Section */}
        <section className="bg-[#F9FFF5] py-20 sm:py-24 w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost: CSRArticle) => (
                <RelatedPostCard key={relatedPost._id} post={relatedPost} />
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
  const posts = await getAllCSR();
  return posts.map((post: CSRArticle) => ({
    slug: post.slug.current,
  }));
}
