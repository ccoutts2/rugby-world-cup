"use client";
import styles from "./Cursor.module.scss";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorSize = 30;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className={styles.cursor}></motion.div>
  );
};

export default Cursor;
