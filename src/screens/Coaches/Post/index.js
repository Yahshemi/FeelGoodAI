import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const Post = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
          Join the Revolution in Wellness Coaching
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src="/images/content/history-pic.png" alt="People" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}></h2>
            <div className={styles.info}>
            Welcome to Feel Good AI, a platform designed to empower wellness coaches
            like you. We're here to help you scale your impact, reach more people,
            and transform lives, all while maintaining your unique coaching style and voice.{" "}
            </div>
            <div className={styles.preview}>
              {/* <img src="/images/content/post-pic.png" alt="Post pic" /> */}
              <img src="/images/content/Tiuri_SVG/Deep_Learning.svg"/>
            </div>
            <h2>Your Expertise, Our Technology</h2>
            <div className={styles.content}>
              <p>
              Upload your programs to our platform and let our AI learn from your expertise.
              We'll mimic your coaching style and niche, creating personalized wellness plans for your clients.
              You'll also have the option to upload audio of your voice,
              allowing us to clone it and provide a more authentic coaching experience for your clients.
              </p>
              <h3>Your Dashboard, Your Control</h3>
              <p>
              Manage your clients and business through your dashboard and AI.
              You'll receive daily updates about the members in your care,
              and you'll be able to chat directly with them through the AI.
              This dashboard serves as your co-pilot,
              helping you manage all your members and business through voice interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
