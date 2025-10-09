"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ParallexCard } from "../../../_components/parallex-card";
import { DEBIT_CARD_FEATURES } from "@/app/(website)/_data/debit-card-features";

const FeaturesSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {DEBIT_CARD_FEATURES.map((feature, i) => {
        const targetScale = 1 - (DEBIT_CARD_FEATURES.length - i) * 0.05;
        return (
          <ParallexCard
            key={`p_${i}`}
            i={i}
            imageWidth={900}
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
