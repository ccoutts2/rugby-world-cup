import styles from "./Intro.module.scss";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "top",
          end: "+=500px",
        },
      });

      timeline
        .from(background.current, { clipPath: `inset(15%)` })
        .to(introImage.current, { height: "200px" }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.introContainer}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          src={"/assets/images/background.jpeg"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}>
          <Image
            src={"/assets/images/intro.png"}
            alt="intro image"
            fill={true}
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          rugby world cup
        </h1>
      </div>
    </div>
  );
}
