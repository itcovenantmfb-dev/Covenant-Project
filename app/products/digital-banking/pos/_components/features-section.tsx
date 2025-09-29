"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { POS_FEATURES } from "@/app/_data/pos-card-features";
import { ParallexCard } from "../../../_components/parallex-card";

const FeaturesSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {POS_FEATURES.map((feature, i) => {
        const targetScale = 1 - (POS_FEATURES.length - i) * 0.05;
        return (
          <ParallexCard
            key={`p_${i}`}
            i={i}
            feature={feature}
            progress={scrollYProgress}
            range={[i * 0.1, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default FeaturesSection;