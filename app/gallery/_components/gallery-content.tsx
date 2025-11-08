"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, X, Images } from "lucide-react";
import {
  Album,
  galleryData,
  MediaItem,
} from "@/app/(website)/_data/gallery-data";

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
          src={currentImage.src}
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
        src={album.coverImageSrc}
        alt={album.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="absolute bottom-1 right-1 z-10 bg-white p-1.5 shadow-md rounded-tl-[13px] rounded-br-[12px]">
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{album.title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {album.media.map((item, index) => (
          <div
            key={item.id}
            className="relative aspect-video w-full overflow-hidden rounded-xl group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={item.src}
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
const GallerySection = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

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
          {galleryData.map((album) => (
            <AlbumCard
              key={album.id}
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
