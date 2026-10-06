'use client';
import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap, {ScrollTrigger, useGSAP} from "@/libs/gsap"
import useViewTransition from "@/hooks/useViewTransition";


const ProjectPage = ({ project, nextProject }) => {

    
    const containerRef = useRef(null);
    const imageRef = useRef(null);


    useGSAP(() => {

        const sections = gsap.utils.toArray('section');


        gsap.to(imageRef.current, {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.4,
            ease: 'expo.out',
            delay: 0.7
        });

        sections.forEach((section, idx) => {
            const container = section.children[0];

            gsap.to(container, {
                rotate: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "top 20%",
                    scrub: true
                }
            })

            if(idx === sections.length - 1) return;

            ScrollTrigger.create({
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                pin: true,
                pinSpacing: false
            });


        })
    }, {scope: containerRef});

    const {navigateTo} = useViewTransition();

    const handleClick = () => {
        navigateTo(`/project/${nextProject.slug}`);
    }

  return (
    <>
      <main ref={containerRef}>
        <section className="h-screen flex w-full ">
         <div className="sectionContainer h-full w-full flex pt-[7rem] pb-[4rem] px-[3rem]">
             <div className="firstSegment h-full w-[10%] ">
            <TextReveal >
              <h3 className="text-[2rem]">{project.number}</h3>
            </TextReveal>
          </div>
          <div className="secondSegment h-[85%] w-[30%] ">
            <div  className="imageDiv overflow-hidden h-full w-full">
              <img
                ref={imageRef}
                style={{
                clipPath: "inset(0 0 100% 0)"
                }}
                src={project.coverImage}
                className="h-full w-full object-cover scale-[1.7]"
                alt=""
              />
            </div>
          </div>
          <div className="thirdSegment h-[85%] w-[60%] flex flex-col justify-end pl-[8rem]">
            <div className="heading">
              <TextReveal delay='0.9' ease='power4.out' splitBy="chars">
                <h1 className="text-[5rem] leading-[1.1]">{project.title}</h1>
              </TextReveal>
            </div>

            <div className="subheading flex gap-[3rem]">
              <TextReveal delay='0.9' splitBy="words">
                <h1 className="text-[2rem]">{project.subtitle}</h1>
              </TextReveal>
              <TextReveal delay='0.9' splitBy="chars">
                <h1 className="text-[2rem]">{project.year}</h1>
              </TextReveal>
            </div>

            <div className="description mt-[2rem] w-[70%] text-balance">
              <TextReveal delay='0.9' splitBy="lines">
                <p className="text-[1.5rem] leading-[1.2]">{project.description}</p>
              </TextReveal>
            </div>
          </div>
         </div>
        </section>
        {project.gallery.map((elem, idx) => {
            return (
                <section key={idx} className="h-screen w-full">
                    <div style={{transformOrigin: "bottom left"}} className="sectionContainer h-full w-full rotate-[30deg]">
                        <img src={elem} className="h-full w-full object-cover" alt="" />
                    </div>
                </section>
            )
        })}
        
        

        <footer className="h-screen w-full flex items-center justify-center gap-[1rem]">
            <h1 className="text-[2.5rem]">Next Project</h1>
            <h1 onClick={handleClick} className="cursor-pointer text-[2rem]">{nextProject.title}</h1>
        </footer>
      </main>
    </>
  );
};

export default ProjectPage;
