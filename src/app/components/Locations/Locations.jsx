"use client";
import styles from "./Locations.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Locations = ({ mousePosition, images }) => {
  const [index, setIndex] = useState(0);

  const { x, y } = mousePosition;
  return (
    <div className={styles.locations}>
      <div className={styles.locationsContainer}>
        {images.map(({ title }, index) => {
          return (
            <p
              onMouseMove={() => {
                setIndex(index);
              }}
              key={index}>
              {title}
            </p>
          );
        })}
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image
          src={`/assets/images/${images[index].srcBackground}`}
          fill={true}
          alt={images.title}
        />
      </motion.div>
    </div>
  );
};

export default Locations;
