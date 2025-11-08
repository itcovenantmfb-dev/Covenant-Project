export interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface Album {
  id: number;
  title: string;
  coverImageSrc: string;
  media: MediaItem[];
}

export const galleryData: Album[] = [
  {
    id: 1,
    title: "15th Annual General Meeting",
    coverImageSrc: "/image1.svg",
    media: [
      {
        id: 101,
        type: "image",
        src: "/DSC1.jpg",
        alt: "AGM Photo 1",
      },
      {
        id: 102,
        type: "image",
        src: "/DSC2.jpg",
        alt: "AGM Video 2",
      },
      {
        id: 103,
        type: "image",
        src: "/DSC3.jpg",
        alt: "AGM Photo 3",
      },
      {
        id: 104,
        type: "image",
        src: "/DSC4.jpg",
        alt: "AGM Photo 4",
      },
      {
        id: 105,
        type: "image",
        src: "/DSC5.jpg",
        alt: "AGM Photo 5",
      },
      {
        id: 106,
        type: "image",
        src: "/DSC6.jpg",
        alt: "AGM Photo 6",
      },
      {
        id: 107,
        type: "image",
        src: "/DSC7.jpg",
        alt: "AGM Photo 7",
      },
    ],
  },
  {
    id: 2,
    title: "Customer Service Week 2025",
    coverImageSrc: "/image.svg",
    media: [
      {
        id: 201,
        type: "image",
        src: "/CSW1.jpg",
        alt: "CSW Photo 1",
      },
      {
        id: 202,
        type: "image",
        src: "/CSW2.jpg",
        alt: "CSW Photo 1",
      },
      {
        id: 203,
        type: "image",
        src: "/CSW3.jpg",
        alt: "CSW Photo 1",
      },
      {
        id: 204,
        type: "image",
        src: "/CSW4.jpg",
        alt: "CSW Photo 1",
      },
      {
        id: 205,
        type: "image",
        src: "/CSW5.jpg",
        alt: "CSW Photo 1",
      },
      {
        id: 206,
        type: "image",
        src: "/CSW6.jpg",
        alt: "CSW Photo 1",
      },
    ],
  },
  {
    id: 3,
    title: "Ifo Branch Opening",
    coverImageSrc: "/image2.svg",
    media: [
      {
        id: 301,
        type: "image",
        src: "/IFO1.jpg",
        alt: "Ifo Opening Video",
      },
      {
        id: 302,
        type: "image",
        src: "/IFO2.jpg",
        alt: "Ifo Opening Video",
      },
      {
        id: 303,
        type: "image",
        src: "/IFO3.jpg",
        alt: "Ifo Opening Video",
      },
      {
        id: 304,
        type: "image",
        src: "/IFO4.jpg",
        alt: "Ifo Opening Video",
      },
      {
        id: 305,
        type: "image",
        src: "/IFO5.jpg",
        alt: "Ifo Opening Video",
      },
      {
        id: 306,
        type: "image",
        src: "/IFO6.jpg",
        alt: "Ifo Opening Video",
      },
      {
        id: 307,
        type: "image",
        src: "/IFO7.jpg",
        alt: "Ifo Opening Video",
      },
    ],
  },
];
