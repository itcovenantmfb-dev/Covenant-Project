import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface CardProps {
  i: number;
  feature: Feature;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const ATMCard = ({
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

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-2"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(-1vh + ${i * 0}px)`,
          backgroundColor: "#F1F5EB",
        }}
        className="relative w-full max-w-[1200px] mx-auto bg-white rounded-3xl p-10 lg:p-10 origin-top"
      >
        <div className="flex flex-col lg:flex-row max-w-[900px] mx-auto gap-12 items-center justify-center h-full">
          <div className={""}>
            <div className="flex flex-col items-left gap-4 mb-6">
              <div className="text-white rounded-full hidden lg:flex items-left gap-4 justify-left text-xl font-bold">
                <Image src={feature.number} width={60} height={60} alt="" />
              </div>

              <div className="text-white rounded-full flex lg:hidden items-left gap-4 justify-left text-xl font-bold">
                <Image src={feature.number} width={30} height={30} alt="" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#020617]">
                {feature.title}
              </h2>
            </div>
            <p className="text-[#000]/70 text-lg mb-8">{feature.description}</p>
          </div>

          <div className="flex justify-center">
            <div className="hidden lg:flex w-[350px] justify-center">
              <motion.div className="rounded-3xl  flex justify-center items-center w-[550px] h-[350px]">
                <Image
                  src={feature.image}
                  alt={`${feature.title} ATM Feature`}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="flex lg:hidden w-[200px] justify-center">
              <motion.div className="rounded-2xl  flex justify-center items-center w-[600px] h-[300px]">
                <Image
                  src={feature.image}
                  alt={`${feature.title} ATM Feature`}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
