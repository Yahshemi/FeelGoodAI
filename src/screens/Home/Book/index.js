import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Strength, Conditioning & Mobility",
    color: "#45B26B",
    images: "/images/content/user.svg",
    alt: "user",
    content: "his module focuses on building physical strength, endurance, and mobility. It includes resistance training, cardiovascular exercises, functional movements, and routines designed to improve flexibility and body control.",
  },
  {
    title: "Nutrition & Recovery",
    color: "#9757D7",
    images: "/images/content/medal-1.svg",
    alt: "medal",
    content: "This module highlights the role of nutrition in fitness and the importance of recovery in optimizing physical performance. It includes guidance on balanced eating, hydration, sleep, and restorative practices.",
  },
  {
    title: "Mental Resilience & Performance",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
    content: "This module focuses on the psychological aspects of fitness and strategies for improving athletic performance. It includes strategies for developing mental toughness, maintaining motivation, managing stress, and enhancing focus and concentration.",
  },
];

const Book = () => {
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/book-pic@2x.png 2x"
              srcSetDark="/images/content/book-pic-dark@2x.png 2x"
              src="/images/content/book-pic.png"
              srcDark="/images/content/book-pic-dark.png"
              alt="Book pic"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/ball-green@2x.png 2x"
              src="/images/content/ball-green.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/content/dumbbells@2x.png 2x"
              src="/images/content/dumbbells.png"
              alt="Dumbbells"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Optimized Fitness</h2>
          <div className={styles.info}>
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.note}>
          Each of these modules will be personalized based on your fitness level, goals, and preferences. Your coach, powered by Feel Good AI, will guide you through each module, providing support and feedback along the way.
            {/* <strong className={styles.green}>10% Discount</strong> if you’re
            already using the{" "}
            <strong className={styles.black}>Fitness Pro</strong> on App Store */}
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/class02-details">
              <span>START</span>
              <Icon name="arrow-right" size="10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
