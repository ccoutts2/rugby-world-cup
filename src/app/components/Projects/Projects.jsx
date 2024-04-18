"useclient";
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
      handle: "nice",
      src: "nice4.JPG",
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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        start: "-=100px",
        end: "+=725px",
        pin: true,
        marker: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/assets/images/${projects[selectedProject].handle}/${projects[selectedProject].src}`}
            fill={true}
            alt={projects[selectedProject].title}
          />
        </div>

        <div className={styles.column}>
          <p>
            amidst the bustling streets of the city, we explore, where dreams
            intertwine and stories galore. laughter and music fill the evening air,
            as memories weave, beyond compare.
          </p>
        </div>

        <div className={styles.column}>
          <p>
            from parisian cafes to lille&apos;s embrace, we chase the thrill of the
            game, in every space. friends bound by love, in this timeless fold, where
            memories bloom, in stories untold.
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
