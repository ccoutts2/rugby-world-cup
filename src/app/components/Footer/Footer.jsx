"use client";
import styles from "./Footer.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import TextDisperse from "../TextDisperse/TextDisperse";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.body}>
        <div className={styles.introLine}>
          <p>chris</p>
          <p>coutts</p>
        </div>

        <div className={styles.introLine}>
          <p>software</p>
          <p>dev</p>
        </div>

        <div className={styles.introLine}>
          <p>&</p>
          <p>artistic</p>
        </div>

        <TextDisperse>
          <p>→email</p>
        </TextDisperse>

        <Link
          className={styles.link}
          target="_blank"
          href="https://www.chris-coutts.com/">
          <TextDisperse>
            <p>→portfolio</p>
          </TextDisperse>
        </Link>

        <Link
          className={styles.link}
          target="_blank"
          href="https://www.linkedin.com/in/chris-coutts/">
          <TextDisperse>
            <p>→linkedin</p>
          </TextDisperse>
        </Link>
        <Link
          className={styles.link}
          target="_blank"
          href="https://github.com/ccoutts2">
          <TextDisperse>
            <p>→github</p>
          </TextDisperse>
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
