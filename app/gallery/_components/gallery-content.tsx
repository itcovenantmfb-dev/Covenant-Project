"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import { Album, galleryData } from "@/app/(website)/_data/gallery-data";

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

    <div
      className="
    absolute bottom-1 right-1 z-10 bg-white p-1.5 shadow-md rounded-tl-[13px] rounded-br-[12px] rounded-tr-[0px] rounded-bl-[0px]
  "
    >
      <button
        onClick={() => onViewAlbum(album)}
        className="
        flex items-center gap-1 bg-[#A2DE49] px-2 py-2 text-xs font-semibold transition-transform hover:scale-105 rounded-tl-[13px] rounded-br-[12px] rounded-tr-[0px] rounded-bl-[0px] text-[#043B20]"
      >
        View Images
        <Play className="h-4 w-4 fill-current" />
      </button>
    </div>
  </article>
);

const AlbumDetailView: React.FC<{ album: Album; onGoBack: () => void }> = ({
  album,
  onGoBack,
}) => (
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
      {album.media.map((item) => (
        <div
          key={item.id}
          className="relative aspect-video w-full overflow-hidden rounded-xl group cursor-pointer"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

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
