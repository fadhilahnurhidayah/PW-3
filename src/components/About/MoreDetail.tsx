"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AboutImage1 from "../../../public/images/general/about/aboutMain2.jpg";
import AboutImage2 from "../../../public/images/general/about/aboutIntro1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";

function MoreDetail() {
  const image1 = useRef(null);
  const image2 = useRef(null);

  const textRef = useRef(null);
  const text = useInView(textRef, { once: true });

  const EASING = [0.83, 0, 0.17, 1];

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(image2.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

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

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="mt-[5vh]">
      <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
        <div className="w-full flex-1 object-cover overflow-hidden">
          <Image
            src={AboutImage1}
            alt="self portrait"
            className="w-full h-full scale-110"
            placeholder="blur"
            ref={image1}
          />
        </div>
        <div className="flex-[1.5]">
          <div className="w-full object-cover overflow-hidden">
            <Image
              src={AboutImage2}
              alt="beautiful pink flower"
              className="w-full h-full scale-110"
              placeholder="blur"
              ref={image2}
            />
          </div>
          <div className="mt-[4vh]" ref={textRef}>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className={`tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase`}
              >
                Persistence
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className={`tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase`}
              >
                & Motivation
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <div>
            <Paragraph
              text="I'm a data science enthusiast who loves turning data into insights. I recently started learning data science, driven by my passion for problem-solving and technology."
            />
          </div>
          <div className="mt-6">
            <Paragraph text="Even without experience, I'm dedicated to improving my skills in data analysis, machine learning, and data visualization. I'm always exploring new ways to use data to solve real-world problems." />
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <div>
            <Paragraph text="I'm passionate about how data can uncover hidden patterns and help make better decisions." />
          </div>
          <div className="mt-6">
            <Paragraph text="With consistent learning and practice, I'm excited to grow my skills and contribute to impactful data-driven solutions." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default MoreDetail;
