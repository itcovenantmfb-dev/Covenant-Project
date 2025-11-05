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
  error?: string;
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

const BlogList = ({ newsArticles, error }: BlogListProps) => {
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

  // Error State
  if (error) {
    return (
      <section className="bg-[#F9FFF5] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 px-8 border border-red-200 rounded-xl bg-red-50/30">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center px-4 py-2 bg-[#1D9B5E] text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // No News Available State
  if (newsArticles.length === 0) {
    return (
      <section className="bg-[#F9FFF5] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 px-8 border border-gray-200 rounded-xl bg-gray-50/30">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-6">
                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No News Articles</h3>
              <p className="text-gray-600 mb-6">
                We don't have any news articles published at the moment. Check back soon for the latest updates and announcements!
              </p>
              <p className="text-sm text-gray-500">
                Stay connected with us on social media for real-time updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F9FFF5] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {currentPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>

        {/* Only show pagination if there are news articles and multiple pages */}
        {newsArticles.length > 0 && totalPages > 1 && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={postsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </section>
  );
};

export default BlogList;
