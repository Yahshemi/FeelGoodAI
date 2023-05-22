import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Onboarding",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Harmony gets to know you through a 3-5 minute voice conversation. We learn about who you are, where you are in your wellness journey, what your goals are, and what level of care you are looking for. After getting to know you, your profile is created with the information shared with Harmony.",
  },
  {
    title: "Matching",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Harmony then matches you to a coach that best fits you. Our AI-powered system ensures the best match for your unique needs and goals.",
  },
  {
    title: "Personalized Plan",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Your matched coach creates a personalized wellness plan for you. This plan is dynamic and adjusts based on your progress and feedback.",
  },
  {
    title: "Begin your journey",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Start your wellness journey with Feel Good AI. Live better, live longer, feel good.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it works</h2>
          <div className={styles.info}>
          Feel Good AI is a production-ready platform of stackable wellness modules built with advanced AI.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
