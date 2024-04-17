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
      src: "nice4.JPG",
      link: "/marseille",
    },
    {
      title: "Nice",
      src: "nice5.JPG",
      link: "/nice",
    },
    {
      title: "Lille",
      src: "nice7.JPG",
      link: "/lille",
    },
    {
      title: "Paris",
      src: "nice9.JPG",
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
            src={`/assets/images/${projects[selectedProject].src}`}
            fill={true}
            alt="${title}"
          />
        </div>
        <div className={styles.column}>
          <p>
            amidst the bustling streets of the city, we explore, where dreams
            intertwine and stories galore. laughter and music fill the evening air,
            as memories weave, beyond compare.
          </p>
        </div>
        {/* <div className={styles.mask}>
          <p>
            from quaint villages to coastal shores, we journey on, where adventure
            soars. friends united, in tales of old, where each moment sparkles,
            bright as gold.
          </p>
        </div> */}

        <div className={styles.column}>
          <p>
            from parisian cafes to lille&apos;s embrace, we chase the thrill of the
            game, in every space. friends bound by love, in this timeless fold, where
            memories bloom, in stories untold.
          </p>
        </div>
        {/* <div className={styles.mask}>
          <p>
            amidst the vineyards and cobblestone streets, we wander, souls entwined
            in france&apos;s heartbeat. laughter and cheers mingle in the air, as
            rugby&apos;s spirit ignites everywhere.
          </p>
        </div> */}
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
