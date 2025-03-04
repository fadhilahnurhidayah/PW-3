"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image1 from "../../../public/images/general/home/about_image4.jpg";
import Image2 from "../../../public/images/general/home/about_image3.jpg";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";
import Image3 from "../../../public/images/general/home/about_image6.jpg"
import Header3 from "../Header3";

function About() {
  const image1 = useRef(null);
  const image2Div = useRef(null);
  const image2 = useRef(null);

  const topRef = useRef(null);
  const top = useInView(topRef, { once: true });

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    var tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "+=3000px",
        scrub: true,
      },
    });

    tl.from(image2Div.current, {
      yPercent: 10,
    }).to(image2Div.current, {
      yPercent: -5,
    });
  });

  // fresh span
  const topline1 = "I offer data science services";
  // ideas span
  const topline2 = "to turn raw data into actionable";
  // deliver span
  const bottomline1 = "insights through analysis and";
  // finish span
  const bottomline2 = "machine learning.";

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-[15vh]">
      <div>
        <div className="">
          <Header3 phrase={topline1} className="pr-[15vw]"/>
          <Header3 phrase={topline2} className="pr-[15vw]"/>
        </div>
        <div className="">
        <Header3 phrase={bottomline1} className="pl-[15vw]"/>
        <Header3 phrase={bottomline2} className="pl-[15vw]"/>
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row md:items-center gap-y-4 md:gap-y-0">
        <div className="md:flex-1 object-cover object-center overflow-hidden">
          <Image
            src={Image3}
            alt="two boxes displayed elegantly with a pink stone background"
            className="w-full h-full scale-110"
            ref={image1}
            placeholder="blur"
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div
            className="w-full h-full md:w-[70%] object-cover object-left-top overflow-hidden"
            ref={image2Div}
          >
            <Image
              src={Image2}
              alt="two iphones displaying recipe app with a stone wall and green door as a vignette"
              className="w-full h-full"
              ref={image2}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="flex mt-8"
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="xs:flex-[1] hidden xs:block"></div>
        <div className="xs:flex-[2.5] md:flex-[1.2] flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Paragraph text="As a data science enthusiast, I prioritize turning data into meaningful insights while maintaining clear and effective communication. When working on projects, I aim to present findings in a simple and visually appealing way, making complex data easier to understand. I enjoy adding a personal touch to every project, ensuring that each solution aligns with the client's needs." />
          </div>
          <div className="flex-1">
            <div className="">
              <Paragraph text="I lead with empathy, especially when working with individuals or businesses new to data-driven solutions. My interpersonal skills, like communication and collaboration, help create a comfortable environment where ideas can flow freely. For me, quality insights and impactful solutions will always come before quantity. " />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
