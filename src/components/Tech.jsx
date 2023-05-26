import React from 'react';
import Marquee from 'react-fast-marquee';

import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import threejs from "../assets/tech/threejs.svg";
import sql from "../assets/tech/sql.png";

import { styles } from "../styles";

import '../../src/index.css';
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="App">
      <div className="title">
      <p className={styles.sectionSubText}>Coding Languages I have experiences in</p>
      <h2 className={styles.sectionHeadText}>My languages.</h2>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={css} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={docker} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={figma} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "");