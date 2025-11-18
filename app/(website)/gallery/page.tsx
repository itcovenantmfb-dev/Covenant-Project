import React from "react";
import GalleryHeroSection from "./_components/gallery-hero";
import Carousel from "../_components/carousel";
import Navbar from "../_components/navbar";
import CTA from "../_components/cta-section";
import Footer from "../_components/footer-section";
import GallerySection from "./_components/gallery-content";
import { getAllGalleryAlbums } from "@/sanity/lib/queries";

export const dynamic = "force-static";
export const revalidate = 60;

async function page() {
  const albums = await getAllGalleryAlbums();

  return (
    <div>
      <GalleryHeroSection />
      <GallerySection albums={albums} />
      <Carousel />
    </div>
  );
}

export default page;
