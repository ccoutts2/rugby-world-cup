"use client";
import styles from "./Vignette.module.scss";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Vignette = ({ city, srcBackground, srcVignette, title, mousePosition }) => {
  const { x, y } = mousePosition;
  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={`/assets/images/${city}/${srcBackground}`}
          fill={true}
          alt={title}
        />
      </div>
      <motion.div style={{ x, y }} className={styles.vignette}>
        <Image
          src={`/assets/images/${city}/${srcVignette}`}
          fill={true}
          alt={title}
        />
      </motion.div>
    </div>
  );
};

export default Vignette;
