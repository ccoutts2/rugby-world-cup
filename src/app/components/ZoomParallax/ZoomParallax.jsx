"use client";
import styles from "./ZoomParallax.module.scss";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Picture1 from "../../../../public/assets/images/nice1.JPG";
import Picture2 from "../../../../public/assets/images/nice2.JPG";
import Picture3 from "../../../../public/assets/images/nice3.JPG";
import Picture4 from "../../../../public/assets/images/nice4.JPG";
import Picture5 from "../../../../public/assets/images/nice5.JPG";
import Picture6 from "../../../../public/assets/images/nice8.JPG";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture6,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale8,
    },
    {
      src: Picture5,
      scale: scale9,
    },
    {
      src: Picture1,
      scale: scale4,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div style={{ scale: scale }} className={styles.el} key={index}>
            <div className={styles.imageContainer}>
              <Image src={src} fill={true} alt="nice" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParallax;
