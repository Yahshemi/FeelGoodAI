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
      "Start a conversation with Harmony, our AI, who gets to know you, your goals, and your preferences. This includes choosing your focus area: fitness, nutrition, mindfulness, or spiritual wellness.",
  },
  {
    title: "Match with a Coach",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Based on your focus and goals, you'll be matched with a coach whose specialty aligns with your needs. Whether you're looking to run a faster 40yd dash, recover from an injury, or simply improve your overall fitness, we have a coach for you.",
  },
  {
    title: "Personalized Plan Creation",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Your coach, powered by Feel Good AI, creates a personalized wellness plan tailored to your needs.",
  },
  {
    title: "Begin your journey",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Start your wellness journey with Feel Good AI and your coach. Engage in focused conversations, explore new wellness topics, and follow your personalized plan. Your wellness journey is just a conversation away.",
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
