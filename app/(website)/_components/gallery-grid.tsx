import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

interface GalleryItem {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  featuredImage: any;
  images: any[];
  category: string;
  eventDate?: string;
  location?: string;
  tags?: string[];
  order: number;
}

const GalleryGrid = ({ gallery }: { gallery: GalleryItem }) => {
  // Helper function to get image URL from Sanity or fallback
  const getImageUrl = (image: any, fallback: string) => {
    if (image?.asset?.url) return image.asset.url;
    if (image?.asset?._ref) return urlFor(image).width(600).height(400).url();
    return fallback;
  };

  // Helper function to get alt text
  const getAltText = (image: any, defaultAlt: string) => {
    return image?.alt || defaultAlt;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {/* Featured Image - Large */}
      <div className="col-span-1 row-span-2 h-full">
        <Image
          src={getImageUrl(gallery.featuredImage, "/Column.svg")}
          alt={getAltText(gallery.featuredImage, gallery.title)}
          className="object-cover w-full h-full rounded-lg"
          width={600}
          height={566}
        />
      </div>
      {/* Grid Images - Small */}
      <div className="col-span-1 grid grid-rows-2 grid-cols-2 gap-4 h-full">
        {gallery.images?.slice(0, 4).map((image, index) => (
          <Image
            key={index}
            src={getImageUrl(image, `/& AspectRatioBlock${index > 0 ? ` (${index})` : ""}.svg`)}
            alt={getAltText(image, `${gallery.title} - Image ${index + 1}`)}
            className="object-cover w-full h-full rounded-lg"
            width={273}
            height={273}
          />
        ))}
        {/* Fill remaining slots if less than 4 images */}
        {gallery.images && gallery.images.length < 4 && 
          Array.from({ length: 4 - gallery.images.length }).map((_, index) => (
            <Image
              key={`fallback-${index}`}
              src={`/& AspectRatioBlock${gallery.images.length + index > 0 ? ` (${gallery.images.length + index})` : ""}.svg`}
              alt={`${gallery.title} - Placeholder ${gallery.images.length + index + 1}`}
              className="object-cover w-full h-full rounded-lg opacity-50"
              width={273}
              height={273}
            />
          ))
        }
      </div>
    </div>
  );
};

export default GalleryGrid;
