import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chandu Batta</h1>
        <p className={styles.description}>
        I am a software development enthusiast with six months of internship experience, passionate about crafting innovative solutions and honing my skills in various technologies. My internship has equipped me with practical knowledge and hands-on experience, and I am eager to continue my journey of learning and growth in the field of software development.
        </p>
        <a href="mailto:battachandu996699@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/chandu.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
