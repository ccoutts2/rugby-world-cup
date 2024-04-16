"use client";
import styles from "./about.module.scss";
import React, { useLayoutEffect, useRef, useState } from "react";
import ZoomParallax from "../components/ZoomParallax/ZoomParallax";

const Page = () => {
  return (
    <div className={styles.nice}>
      <ZoomParallax />
    </div>
  );
};

export default Page;
