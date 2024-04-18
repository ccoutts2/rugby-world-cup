"use client";
import styles from "./ZoomParallax.module.scss";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ZoomParallax = ({ pictures, container }) => {
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
