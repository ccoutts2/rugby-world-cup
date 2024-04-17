"use client";
import styles from "./about.module.scss";
import React from "react";
import { useSpring } from "framer-motion";
import ZoomParallax from "../components/ZoomParallax/ZoomParallax";
import Vignette from "../components/Vignette/Vignette";
import Locations from "../components/Locations/Locations";
import Footer from "../components/Footer/Footer";

const images = [
  {
    title: "Town",
    srcBackground: "nice4.JPG",
    srcVignette: "nice1.JPG",
  },
  {
    title: "Sea",
    srcBackground: "nice7.JPG",
    srcVignette: "nice2.JPG",
  },
  {
    title: "Stadium",
    srcBackground: "nice13.JPG",
    srcVignette: "nice12.JPG",
  },
  {
    title: "Harbour",
    srcBackground: "nice3.JPG",
    srcVignette: "nice6.JPG",
  },
];

const Page = () => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.25;

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <div onMouseMove={mouseMove} className={styles.nice}>
      <ZoomParallax />
      {images.map(({ srcBackground, srcVignette }, i) => {
        return (
          <Vignette
            mousePosition={mousePosition}
            srcBackground={srcBackground}
            srcVignette={srcVignette}
            key={i}
          />
        );
      })}
      <Locations mousePosition={mousePosition} images={images} />
      <Footer />
    </div>
  );
};

export default Page;
