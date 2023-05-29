import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const items = [
  {
    title: "General",
    items: [
      {
        title: "What is Feel Good AI?",
      },
      {
        title: "How does Feel Good AI contribute to non-profit organizations?",
      },
      {
        title: "How does Feel Good AI handle my data?",
      },
      {
        title: "Can I use Feel Good AI if I'm not tech-savvy?",
      },
      {
        title: "How does Feel Good AI support its users?join a class once it’s in session?",
      },
      {
        title: "How does Feel Good AI ensure the quality of its services?",
      },
    ],
  },
  {
    title: "Co-pilot",
    items: [
      {
        title: "What is the Stride co-pilot?",
      },
      {
        title: "What is the Nourish co-pilot?",
      },
      {
        title: "What is the Harmony co-pilot?",
      },
      {
        title: "What is the Unity co-pilot?",
      },
    ],
  },
  {
    title: "Subscription",
    items: [
      {
        title: "How much does a Feel Good AI subscription cost?",
      },
      {
        title: "What does the subscription include?",
      },
      {
        title: "How does the partnership membership work?",
      },
      {
        title: "Can I cancel my subscription at any time?",
      },
      // {
      //   title: "Can I join a class once it’s in session?",
      // },
      // {
      //   title: "Do I need to buy a yoga mat, towel, or equipment? ",
      // },
    ],
  },
  {
    title: "Coaches",
    items: [
      {
        title: "What is the role of human coaches in Feel Good AI?",
      },
      {
        title: "How can I become a coach on Feel Good AI?",
      },
      {
        title: "Do coaches have to be certified or have specific qualifications to join Feel Good AI?",
      },
      {
        title: "How are coaches compensated on Feel Good AI?",
      },
      {
        title: "Can coaches interact directly with users on Feel Good AI?",
      },
      // {
      //   title: "Do I need to buy a yoga mat, towel, or equipment? ",
      // },
    ],
  },
];

const Team = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            learn how to get started
          </div>
          <h2 className={cn("h2", styles.title)}>Frequently Asked Questions</h2>
          <div className={styles.info}>
            Join Fitness Pro community now to get free updates and also alot of
            freebies are waiting for you or <a href="/#">Contact Support</a>
          </div>
          <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={category}
            setValue={setCategory}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <Item item={x} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
