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


}

export default Mockups;
