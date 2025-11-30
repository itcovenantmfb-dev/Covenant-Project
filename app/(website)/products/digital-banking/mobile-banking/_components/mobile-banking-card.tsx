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

export const MobileBankingCard = ({
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
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 0.8]);

  // Increase size for index 4
  const isIndex4 = i === 4;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center mt-20 sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-1vh + ${i * 0}px)`,
          backgroundColor: "#F1F5EB",
        }}
        className="relative w-full max-w-[1200px] mx-auto bg-white rounded-3xl p-0 lg:pb-0 origin-top"
      >
        <motion.div 
          style={{ opacity: gradientOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-white/90 via-white to-white rounded-3xl pointer-events-none z-10"
        />
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
            <div className="hidden lg:flex justify-center" style={{ width: isIndex4 ? '450px' : '350px' }}>
              <motion.div 
                className="rounded-3xl  mt-[-100px] flex justify-center items-center" 
             
              >
                <Image
                  src={feature.image}
                  alt={`${feature.title} Mobile Banking Feature`}
                  width={isIndex4 ? 500 : 400}
                  height={isIndex4 ? 400 : 300}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="flex lg:hidden w-[200px] justify-center">
              <motion.div className="rounded-2xl shadow flex justify-center items-center w-[500px] h-[200px]">
                <Image
                  src={feature.image}
                  alt={`${feature.title} Mobile Banking Feature`}
                  width={350}
                  height={200}
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
