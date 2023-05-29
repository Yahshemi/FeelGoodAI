import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Story.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Health Insurance Providers",
    content:
      "We can work together to offer Feel Good AI as a value-added service to your members, promoting wellness and potentially reducing healthcare costs.",
  },
  {
    title: "Boutique Fitness Studios",
    content:
      "Integrate your unique fitness programs into our platform, reaching a wider audience and providing a new revenue stream.",
  },
  {
    title: "Enterprise Wellness Programs",
    content:
      "Enhance your corporate wellness program with our comprehensive and personalized AI co-pilots, promoting employee wellness and productivity.",
  },
  {
    title: "Non-Profit Organizations",
    content:
      "Collaborate with us to generate revenue for your mission through our Unity co-pilot, which donates a portion of its revenue to associated non-profits.",
  }
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
            {/* <h2 className={cn("h2", styles.title)}>Health Insurance Providers</h2> */}
            {/* <div className={styles.info}>
            We can work together to offer Feel Good AI as a value-added service to your members,
            promoting wellness and potentially reducing healthcare costs.
            </div> */}
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
            <h3>Our Commitment to Partners</h3>
            <p>
            We are committed to creating mutually beneficial partnerships.
            We respect your autonomy and data ownership,
            and we are dedicated to maintaining open and transparent communication.</p>
            <br />
            <h3>Interested in Partnering with Us?</h3>
            <p>
            We would love to hear from you.
            Please contact us to discuss potential partnership opportunities.
            </p>
            <br />
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
