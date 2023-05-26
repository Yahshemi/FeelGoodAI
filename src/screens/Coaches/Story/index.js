import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Story.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Coming Soon: Voice Interactions",
    content:
      "We're working on a feature that will allow you to interact with your dashboard and manage your business through voice commands. This will make it even easier for you to stay on top of your clients' progress and manage your business.",
  },
  {
    title: "Join Us",
    content:
      "We're excited to have you on board. Together, we can revolutionize wellness coaching and help people live healthier, happier lives. Join us today and start making a bigger impact with your coaching.",
  },
];

const Story = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage-small", styles.stage)}></div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/story-pic.png" alt="Story Pic" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>You Own Your Data</h2>
            <div className={styles.info}>
            We respect your ownership of your data. The programs you upload are yours,
            and you can remove them at any time if you choose to leave the platform.
            We're here to coach on your behalf, not to take ownership of your work.
            </div>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
            <Link className={cn("button-stroke", styles.button)} to="/class02">
              Go to class
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
