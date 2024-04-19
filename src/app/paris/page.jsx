"use client";
import React, { useRef } from "react";
import { useSpring, useTransform, useScroll } from "framer-motion";
import NavBack from "../components/NavBack/NavBack";
import ZoomParallax from "../components/ZoomParallax/ZoomParallax";
import Vignette from "../components/Vignette/Vignette";
import Locations from "../components/Locations/Locations";
import LinkPage from "../components/LinkPage/LinkPage";
import Footer from "../components/Footer/Footer";
import Picture1 from "../../../public/assets/images/paris/paris1.JPG";
import Picture2 from "../../../public/assets/images/paris/paris10.JPG";
import Picture3 from "../../../public/assets/images/paris/paris9.JPG";
import Picture4 from "../../../public/assets/images/paris/paris3.JPG";
import Picture5 from "../../../public/assets/images/paris/paris5.JPG";
import Picture6 from "../../../public/assets/images/paris/paris8.JPG";

const images = [
  {
    title: "Stadium",
    city: "paris",
    srcBackground: "paris4.JPG",
    srcVignette: "paris2.JPG",
  },
  {
    title: "Streets",
    city: "paris",
    srcBackground: "paris7.JPG",
    srcVignette: "paris6.JPG",
  },
  {
    title: "Seine",
    city: "paris",
    srcBackground: "paris12.JPG",
    srcVignette: "paris13.JPG",
  },
  {
    title: "Sacré Coeur",
    city: "paris",
    srcBackground: "paris11.JPG",
    srcVignette: "paris14.JPG",
  },
];

const Page = () => {
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
    const targetX = clientX - (window.innerWidth / 2) * 0.2;
    const targetY = clientY - (window.innerWidth / 2) * 0.2;

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <div onMouseMove={mouseMove}>
      <NavBack />
      <ZoomParallax
        pictures={pictures}
        scrollYProgress={scrollYProgress}
        container={container}
      />
      {images.map(({ city, srcBackground, srcVignette }, i) => {
        return (
          <Vignette
            mousePosition={mousePosition}
            city={city}
            srcBackground={srcBackground}
            srcVignette={srcVignette}
            key={i}
          />
        );
      })}
      <Locations mousePosition={mousePosition} images={images} />
      <LinkPage />
      <Footer />
    </div>
  );
};

export default Page;
