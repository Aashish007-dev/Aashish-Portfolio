/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "@/libs/gsap";
import useViewTransition from "@/hooks/useViewTransition";

const CARD_W = 400;
const CARD_H = 520;
const SCALE = 1.35;

const CrowselCard = ({ project, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const numberRef = useRef(null);
  const titleRef = useRef(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: CARD_W * SCALE,
      height: CARD_H * SCALE,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.42,
      ease: 'power3.out'
    });


    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.17,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.6,
      duration: 0.19,
      ease: 'power3.out'
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  const {navigateTo} = useViewTransition();

  const handleClick = () => {
    navigateTo(`/project/${project.slug}`)
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={handleClick}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
      }}
      className="relative width"
    >
      {/* Title Panel */}

      <div
        style={{ bottom: "calc(100% + 1.5rem)" }}
        className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[0.8rem] "
      >
        <TextReveal ref={numberRef} duration='0.25' trigger="manual" splitBy="chars">
          <h3 className="text-[1.2rem] text-[#010101]">{project.number}</h3>
        </TextReveal>

        <TextReveal ref={titleRef} duration='0.25' trigger="manual" splitBy="chars">
          <h3 className="text-[1.2rem] text-[#010101]">{project.title}</h3>
        </TextReveal>
      </div>

      {/* Image panel */}

      <div className="imageDiv absolute h-full w-full overflow-hidden">
        <img
          style={{ transformOrigin: "center center", userSelect: "none" }}
          ref={imageRef}
          className="h-full w-full object-cover scale-[1.6]"
          src={project.coverImage}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default CrowselCard;
