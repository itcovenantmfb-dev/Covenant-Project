"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PaginationControls from "../../_components/pigination-controls";
import { urlFor } from "@/sanity/lib/image";

interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  image: any;
  author: string;
  category: string;
  publishedAt: string;
}

interface BlogListProps {
  newsArticles: NewsArticle[];
}

const BlogPostCard: React.FC<{ post: NewsArticle }> = ({ post }) => (
  <article className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-sm shadow-gray-900/5 ring-1 ring-gray-900/5 overflow-hidden">
    <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto sm:h-[200px] md:h-full flex-shrink-0 p-2 rounded-xl">
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
          href={`/news/${post.slug.current}`}
          className="inline-block rounded-lg bg-green-600 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
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

const BlogList = ({ newsArticles }: BlogListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(newsArticles.length / postsPerPage);

  const handleItemsPerPageChange = (count: number) => {
    setPostsPerPage(count);
    setCurrentPage(1);
  };

  return (
    <section className="bg-[#F9FFF5] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {currentPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={postsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </section>
  );
};

export default BlogList;
