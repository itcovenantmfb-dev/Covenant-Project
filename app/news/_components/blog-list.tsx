"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allBlogPosts, Post } from "@/app/_data/blog-posts";
import PaginationControls from "../../_components/pigination-controls";

const BlogPostCard: React.FC<{ post: Post }> = ({ post }) => (
  <article className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-sm shadow-gray-900/5 ring-1 ring-gray-900/5 overflow-hidden">
    <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto sm:h-[200px] md:h-full flex-shrink-0">
      <Image
        src={post.imageSrc}
        alt={post.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col p-4 sm:p-6 w-full sm:w-3/5">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
        {post.title}
      </h2>
      <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-3 flex-grow leading-relaxed">
        {post.excerpt}
      </p>
      <div className="mt-4 sm:mt-6 flex justify-between items-center">
        <Link
          href={`/news/${post.slug}`}
          className="inline-block rounded-lg bg-green-600 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
        >
          Read More
        </Link>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
    </div>
  </article>
);

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

  const handleItemsPerPageChange = (count: number) => {
    setPostsPerPage(count);
    setCurrentPage(1);
  };

  return (
    <section className="bg-[#F9FFF5] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {currentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
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
