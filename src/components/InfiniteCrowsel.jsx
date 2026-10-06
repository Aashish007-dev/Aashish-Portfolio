import { useEffect, useRef } from "react";
import CrowselCard from "./CrowselCard";
import gsap from "@/libs/gsap";

const CARD_W = 400;
const CARD_H = 520;
const SCALE = 1.35;
const CARD_GAP = 20;

const DURATION = 25;

const TRACK_H = CARD_H * SCALE;

const InfiniteCrowsel = ({ projets }) => {
  const doubled = [...projets, ...projets];

  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const signleWidth = projets.length * (CARD_W + CARD_GAP);

    tweenRef.current = gsap.to(trackRef.current, {
      x: -signleWidth,
      ease: "none",
      duration: DURATION,
      repeat: -1,
    });

    return () => tweenRef.current?.kill();
  }, [projets]);

  return (
    <div
      style={{ padding: `${TRACK_H * 0.25}px 0 24px` }}
      className="overflow-hidden"
    >
      <div
        ref={trackRef}
        style={{
          gap: `${CARD_GAP}px`,
          width: "max-content",
          height: `${TRACK_H}px`,
        }}
        className="track flex items-center"
      >
        {doubled.map((project, i) => (
          <CrowselCard
            key={i}
            project={project}
            onHoverStart={() => tweenRef.current?.pause()}
            onHoverEnd={() => tweenRef.current?.play()}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCrowsel;
