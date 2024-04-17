"use client";
import styles from "./page.module.scss";
import React, { useEffect } from "react";
import Cursor from "./components/Cursor/Cursor";
import Intro from "./components/Intro/Intro";
import Description from "./components/Description/Description";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Cursor />
      <Intro />
      <Description />
      <Projects />
      <Footer />
    </main>
  );
}
