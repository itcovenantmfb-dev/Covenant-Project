import { client } from "./client";
import { groq } from "next-sanity";

// Testimonials
export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"] {
      _id,
      name,
      business,
      testimonial,
    }`
  );
}

export async function getFeaturedTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial" && featured == true && isActive == true] | order(displayOrder asc, dateGiven desc) {
      _id,
      name,
      business,
      avatar,
      testimonial,
      rating,
      serviceUsed,
      location,
      featured,
      dateGiven
    }`
  );
}

// Jobs/Careers
export async function getAllJobs() {
  return client.fetch(
    groq`*[_type == "career" && isActive == true] | order(postedDate desc) {
      _id,
      title,
      slug,
      description,
      image,
      category,
      location,
      employmentType,
      experience,
      salary,
      tags,
      experienceRequired,
      isActive,
      applicationDeadline,
      postedDate
    }`
  );
}

export async function getJobBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "career" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      image,
      category,
      location,
      employmentType,
      experience,
      salary,
      tags,
      primaryResponsibilities,
      jobSpecification,
      experienceRequired,
      isActive,
      applicationDeadline,
      postedDate
    }`,
    { slug }
  );
}

// FAQs
export async function getAllFAQs() {
  return client.fetch(
    groq`*[_type == "faq"] | order(_createdAt desc) {
      _id,
      question,
      answer,
      category,
      order,
      _createdAt
    }`
  );
}

export async function getFAQsByCategory() {
  return client.fetch(
    groq`*[_type == "faq"]  {
      _id,
      question,
      answer,
      category,
      order,
      isActive
    } | group(category)`
  );
}

// News
export async function getAllNews() {
  return client.fetch(
    groq`*[_type == "news" && isPublished == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      image,
      content,
      author,
      category,
      tags,
      featured,
      publishedAt
    }`
  );
}

export async function getFeaturedNews() {
  return client.fetch(
    groq`*[_type == "news" && featured == true && isPublished == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      image,
      content,
      author,
      category,
      tags,
      featured,
      publishedAt
    }`
  );
}

export async function getNewsBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "news" && slug.current == $slug && isPublished == true][0] {
      _id,
      title,
      slug,
      excerpt,
      image,
      content,
      author,
      category,
      tags,
      featured,
      publishedAt
    }`,
    { slug }
  );
}

// Limited queries for home page
export async function getRecentNews(limit: number = 4) {
  return client.fetch(
    groq`*[_type == "news" && isPublished == true] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      image,
      author,
      category,
      publishedAt
    }`
  );
}

export async function getRecentFAQs(limit: number = 4) {
  return client.fetch(
    groq`*[_type == "faq"] | order(_createdAt desc) [0...${limit}] {
      _id,
      question,
      answer,
      category,
      _createdAt
    }`
  );
}

// Gallery Albums
export async function getAllGalleryAlbums() {
  return client.fetch(
    groq`*[_type == "gallery" && isActive == true] | order(order asc, eventDate desc) {
      _id,
      title,
      slug,
      description,
      coverImage,
      media,
      category,
      eventDate,
      location,
      tags,
      order
    }`
  );
}

export async function getGalleryAlbumBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "gallery" && slug.current == $slug && isActive == true][0] {
      _id,
      title,
      slug,
      description,
      coverImage,
      media,
      category,
      eventDate,
      location,
      tags,
      order
    }`,
    { slug }
  );
}
