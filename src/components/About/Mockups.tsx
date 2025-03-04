"use client"

import React, { useRef } from "react";
import Image from "next/image";
import AboutOutro1 from '../../../public/images/general/about/aboutOutro1.jpg'
import AboutOutro2 from '../../../public/images/general/about/aboutOutro2.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Mockups() {
  const image1 = useRef(null)
  const image1Div = useRef(null)
  const image2Div = useRef(null)
  const image2 = useRef(null)

  useGSAP(() => {
    gsap.to(image1.current, {
      y: -40,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1Div.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to(image2.current, {
      y: 30,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  })

  // Add a return statement with the JSX you want to render
  return (
    <section className="relative flex flex-col md:flex-row gap-10 py-20">
      <div ref={image1Div} className="md:w-1/2">
        <Image 
          ref={image1} 
          src={AboutOutro1} 
          alt="About Outro 1" 
          className="w-full h-auto object-cover"
        />
      </div>
      <div ref={image2Div} className="md:w-1/2">
        <Image 
          ref={image2} 
          src={AboutOutro2} 
          alt="About Outro 2" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default Mockups;