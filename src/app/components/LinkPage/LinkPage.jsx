"use client";
import styles from "./LinkPage.module.scss";
import React from "react";
import Link from "next/link";

const LinkPage = () => {
  const projects = [
    {
      title: "Marseille",
      handle: "marseille",
      src: "intro.JPG",
      link: "/marseille",
    },
    {
      title: "Nice",
      handle: "nice",
      src: "intro.JPG",
      link: "/nice",
    },
    {
      title: "Lille",
      handle: "lille",
      src: "intro.JPG",
      link: "/lille",
    },
    {
      title: "Paris",
      handle: "paris",
      src: "intro.JPG",
      link: "/paris",
    },
  ];

  return (
    <nav className={styles.links}>
      <ul className={styles.list}>
        {projects.map((project) => (
          <Link href={project.link}>
            <li>{project.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default LinkPage;
