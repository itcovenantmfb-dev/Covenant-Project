"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Images,
  Calendar,
  MapPin,
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface MediaItem {
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
  caption?: string;
}

interface Album {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  coverImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  media: MediaItem[];
  category: string;
  eventDate?: string;
  location?: string;
  tags?: string[];
}

const Lightbox: React.FC<{
  images: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const currentImage = images[currentIndex];

  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white z-50"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ArrowLeft size={28} />
        </button>
      )}

      {/* Next Button */}
      {currentIndex < images.length - 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white z-50"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ArrowRight size={28} />
        </button>
      )}

      {/* Image Display */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={urlFor(currentImage.asset).url()}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

// --- Album Card Component ---
const AlbumCard: React.FC<{
  album: Album;
  onViewAlbum: (album: Album) => void;
}> = ({ album, onViewAlbum }) => (
  <article className="relative h-65 w-full max-w-md overflow-hidden rounded-2xl shadow-lg group">
    <div className="relative w-full h-64 border-8 border-white rounded-2xl overflow-hidden">
      <Image
        src={urlFor(album.coverImage.asset).url()}
        alt={album.coverImage.alt || album.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="absolute bottom-1 right-1 z-10 bg-white p-1.5 rounded-tl-[13px] rounded-br-[12px]">
      <button
        onClick={() => onViewAlbum(album)}
        className="flex items-center gap-1.5 bg-[#A2DE49] px-3 py-2 text-xs font-semibold transition-transform hover:scale-105 rounded-tl-[13px] rounded-br-[12px] text-[#043B20]"
      >
        View Album
        <Images className="h-4 w-4" />
      </button>
    </div>
  </article>
);

// --- Album Detail View Component ---
const AlbumDetailView: React.FC<{ album: Album; onGoBack: () => void }> = ({
  album,
  onGoBack,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null && lightboxIndex < album.media.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  }, [lightboxIndex, album.media.length]);

  const goToPrev = useCallback(() => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  }, [lightboxIndex]);

  return (
    <div>
      <button
        onClick={onGoBack}
        className="mb-8 flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-green-700"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Albums
      </button>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{album.title}</h2>
      {album.description && (
        <p className="text-gray-600 mb-6">{album.description}</p>
      )}
      {(album.eventDate || album.location) && (
        <div className="flex gap-4 mb-8">
          {album.eventDate && (
            <span className="flex items-center gap-2 px-4 py-2 bg-[#F1F5EB] rounded-xl text-sm text-gray-700">
              <Calendar className="h-4 w-4 text-[#1D9B5E]" />
              {new Date(album.eventDate).toLocaleDateString()}
            </span>
          )}
          {album.location && (
            <span className="flex items-center gap-2 px-4 py-2 bg-[#F1F5EB] rounded-xl text-sm text-gray-700">
              <MapPin className="h-4 w-4 text-[#1D9B5E]" />
              {album.location}
            </span>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {album.media.map((item, index) => (
          <div
            key={item._key}
            className="relative aspect-video w-full overflow-hidden rounded-xl group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={urlFor(item.asset).url()}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={album.media}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </div>
  );
};

// --- Main Gallery Section Component ---
const GallerySection: React.FC<{ albums: Album[] }> = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  if (!albums || albums.length === 0) {
    return (
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 px-8 border border-gray-200 rounded-xl bg-gray-50/30">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-6">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Albums Available
              </h3>
              <p className="text-gray-600 mb-6">
                We don't have any photo albums to display at the moment. Check
                back soon for updates from our events and activities!
              </p>
              <p className="text-sm text-gray-500">
                Stay connected with us on social media to see our latest
                moments.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (selectedAlbum) {
    return (
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AlbumDetailView
            album={selectedAlbum}
            onGoBack={() => setSelectedAlbum(null)}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {albums.map((album) => (
            <AlbumCard
              key={album._id}
              album={album}
              onViewAlbum={setSelectedAlbum}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
