"use client";
import React, { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";

function ProcessTransition() {
  const EASING = [0.83, 0, 0.17, 1];

  const imageRef = useRef(null);
  const image = useInView(imageRef, { once: true });

  const listRef = useRef(null);
  const list = useInView(listRef, { once: true });

  const drop = {
    initial: {
      height: "0%",
    },
    animate: {
      height: "auto",
      transition: {
        duration: 1.2,
        ease: EASING,
        delay: 1,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section>
      <div>
        <div ref={imageRef}></div>
        <div>
          <motion.div></motion.div>
          <motion.div
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div></div>
            {Array(5).fill(null).map((_, i) => (
              <motion.div
                ref={listRef}
                initial={{ opacity: 0, y: "-5%" }}
                animate={
                  list && {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: i * 0.08,
                    },
                  }
                }
                key={i}
              ></motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProcessTransition;