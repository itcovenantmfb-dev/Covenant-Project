"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ParallexCard } from "../../../_components/parallex-card";
import { MOBILE_BANKING_FEATURES } from "@/app/(website)/_data/mobile-banking-data";

const FeaturesSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {MOBILE_BANKING_FEATURES.map((feature, i) => {
        const targetScale = 1 - (MOBILE_BANKING_FEATURES.length - i) * 0.05;
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
