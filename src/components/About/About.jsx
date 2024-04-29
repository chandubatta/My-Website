import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import education from "../../data/education.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
      <ul className={styles.About}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <img
                  src={getImageUrl(educationItem.imageSrc)}
                  alt={`${educationItem.organisation} Logo`}
                />
                <div className={styles.educationItemDetails}>
                  <h3>{`${educationItem.Cource}`}</h3>
                  <h3>{`${educationItem.organisation}`}</h3>
                  <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                  <p>{`${educationItem.CGPA}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
        
      </div>
    </section>
  );
};
