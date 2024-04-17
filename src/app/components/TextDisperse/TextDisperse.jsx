"use client";
import styles from "./TextDisperse.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { disperse } from "./anim";

const TextDisperse = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];

    const word = element.props.children;
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}>
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
  };

  const manageMouseLeave = () => {
    setIsAnimated(false);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave(false);
      }}
      className={styles.introLine}>
      {getChars(children)}
    </div>
  );
};

export default TextDisperse;
