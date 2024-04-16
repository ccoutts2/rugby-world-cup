import styles from "./Projects.module.scss";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const imageContainer = useRef(null);

  const projects = [
    {
      title: "Marseille",
      src: "salar_de_atacama.jpg",
      link: "/marseille",
    },
    {
      title: "Nice",
      src: "valle_de_la_muerte.jpeg",
      link: "/nice",
    },
    {
      title: "Lille",
      src: "miniques_lagoon.jpg",
      link: "/lille",
    },
    {
      title: "Paris",
      src: "miscani_lake.jpeg",
      link: "/paris",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        start: "-=100px",
        end: document.body.offsetHeight,
        pin: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/assets/images/${projects[selectedProject].src}`}
            fill={true}
            alt="${title}"
          />
        </div>
        <div className={styles.column}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, optio
            facere. Quibusdam dolorum
          </p>
        </div>
        <div className={styles.column}>
          <p>
            vitae optio sapiente minus blanditiis sunt necessitatibus magni deserunt
            impedit temporibus natus consequatur!
          </p>
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}>
              <Link href={project.link}>
                <p>{project.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
