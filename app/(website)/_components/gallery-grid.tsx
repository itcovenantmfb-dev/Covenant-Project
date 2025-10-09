import Image from "next/image";
import React from "react";

const GalleryGrid = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    <div className="col-span-1 row-span-2 h-full">
      <Image
        src={images[0]}
        alt=""
        className="object-cover w-full h-full rounded-lg"
        width={600}
        height={566}
      />
    </div>
    <div className="col-span-1 grid grid-rows-2 grid-cols-2 gap-4 h-full">
      <Image
        src={images[1]}
        alt=""
        className="object-cover w-full h-full rounded-lg"
        width={273}
        height={273}
      />
      <Image
        src={images[2]}
        alt=""
        className="object-cover w-full h-full rounded-lg"
        width={273}
        height={273}
      />
      <Image
        src={images[3]}
        alt=""
        className="object-cover w-full h-full rounded-lg"
        width={273}
        height={273}
      />
      <Image
        src={images[4]}
        alt=""
        className="object-cover w-full h-full rounded-lg"
        width={273}
        height={273}
      />
    </div>
  </div>
);

export default GalleryGrid;
