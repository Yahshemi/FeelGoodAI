import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
  "Feel Good AI Synergy",
  "Seamlessly Integrates with Your Daily Routines",
  "Customized Wellness Journeys",
  "Effortless Progress Tracking",
  "User-Centric, Intuitive Design",
];

const Workouts = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/phones@2x.png 2x"
              srcSetDark="/images/content/phones-dark@2x.png 2x"
              src="/images/content/phones.png"
              srcDark="/images/content/phones-dark.png"
              alt="Phones"
            />
          </div>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/ball-green-1@2x.png 2x"
              src="/images/content/ball-green-1.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/apple@2x.png 2x"
              src="/images/content/apple.png"
              alt="Apple"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            All your wellness, <br></br>in one place
          </h2>
          <div className={styles.info}>
          Feel Good AI - your personalized wellness co-pilot for a balanced,
          vibrant life. Less guesswork, more growth!
          </div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li className={styles.item} key={index}>
                {x}
              </li>
            ))}
          </ul>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/pricing">
            Select Your Co-Pilot
            </Link>
            <button className={cn("button-stroke", styles.button)}>
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
