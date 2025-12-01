import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

interface CardProps {
  i: number;
  feature: Feature;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const POSCard = ({
  i,
  feature,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], [1, 1, 0.3, 0]);

  // Special styling for index 1
  const isIndex1 = i === 0;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-1"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(-1vh + ${i * 0}px)`,
          backgroundColor: "#F1F5EB",
        }}
        className="relative w-full max-w-[1200px] mx-auto bg-white rounded-3xl p-8 lg:p-4 origin-top"
      >
        <div className="flex flex-col lg:flex-row max-w-[900px] mx-auto gap-12 items-center justify-center h-full">
          <div className={""}>
            <div className="flex flex-col text-center lg:items-left gap-4 mb-6">
              <div className="text-white rounded-full hidden lg:flex items-left gap-4 justify-left text-xl font-bold">
                <Image src={feature.number} width={60} height={60} alt="" />
              </div>

              <div className="text-white rounded-full flex lg:hidden items-center gap-4 justify-center text-center text-xl font-bold">
                <Image src={feature.number} width={30} height={30} alt="" />
              </div>
              <h2 className="text-xl lg:text-3xl font-bold text-[#020617]">
                {feature.title}
              </h2>
            </div>
            <p className="text-[#000]/70 text-sm  lg:text-lg text-center mb-8">{feature.description}</p>
          </div>

          <div className="flex justify-center">
            <div className="hidden lg:flex  justify-center">
              <motion.div className={`bg-white rounded-3xl shadow flex justify-center items-center ${isIndex1 ? 'w-full h-[350px] px-0' : 'w-full h-[350px] p-0'}`}>
                <Image
                  src={feature.image}
                  alt={`${feature.title} POS Feature`}
                  width={feature.width}
                  height={feature.height}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="flex lg:hidden w-[300px] justify-center">
              <motion.div className="bg-white relative p-0 rounded-2xl flex justify-center items-center w-[500px] h-[300px]">
                <Image
                  src={feature.image}
                  alt={`${feature.title} POS Feature`}
                fill
                  className="object-cover absolute"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
