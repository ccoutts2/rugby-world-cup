import styles from "./Description.module.scss";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const phrases = [
  "this is a photo gallery of my time in france",
  "for the rugby world cup",
  "spanning 2 months of travelling",
  "with my best friends",
];

const Description = () => {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
};

const AnimatedText = ({ children }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out",
      });
    });

    return () => ctx.revert();
  }, []);

  return <p ref={text}>{children}</p>;
};

export default Description;
