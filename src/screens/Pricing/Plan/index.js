import React, { useState } from "react";
import cn from "classnames";
import styles from "./Plan.module.sass";
import Icon from "../../../components/Icon";

const options = [
  {
    title: "Main features",
    items: [
      {
        title: "Personalized Wellness Plans",
        description: "Some Text",
      },
      {
        title: "AI-Powered Fitness & Nutrition Coaching",
        description: "Some Text",
      },
      {
        title: "Mindfulness & Spiritual Guidance",
        description: "Some Text",
      },
      {
        title: "24/7 Support from AI Wellness Professionals",
        description: "Some Text",
      },
      {
        title: "Access to a Community of Wellness Enthusiasts",
        description: "Some Text",
      },
      // {
      //   title: "Direct Chat with Wellness Professionals",
      //   description: "Some Text",
      // },
      // {
      //   title: "Premium Courses",
      //   description: "Some Text",
      // },
      // {
      //   title: "User support",
      //   description: "Some Text",
      // },
      // {
      //   title: "Chat to trainers",
      //   description: "Some Text",
      // },
      // {
      //   title: "Unlimited Videos",
      //   description: "Some Text",
      // },
    ],
  },
];

const data = [
  {
    title: "Mind",
    color: "#9757D7",
    description: "Harmony + Unity Co-Pilots",
    price: "15",
    note: "per month or $150/year",
    button: "Start free trial",
    options: [
      "true",
      "false",
      "true",
      "false",
      "true",
      "true",
      "false",
      "false",
      "false",
      "false",
    ],
  },
  {
    title: "Body",
    color: "#FF592C",
    description: "Nourish + Stride Co-Pilots",
    price: "20",
    note: "per month or $200/year",
    button: "Get Started",
    options: [
      "true",
      "true",
      "false",
      "true",
      "true",
      "true",
      "true",
      "true",
      "false",
      "false",
    ],
  },
  {
    title: "Mind + Body",
    color: "#EF466F",
    description: "All-In-One Wellness",
    price: "30",
    note: "per month or $300/year",
    button: "Contact Sale",
    options: [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
    ],
  },
];

const Plan = () => {
  const [more, setMore] = useState([false, false, false]);

  const handleClick = (index) => {
    let newMore = [...more];
    newMore[index] = !more[index];

    setMore(newMore);
  };

  const renderContent = (content) => {
    if (content === "true") {
      return <Icon name="check" size="14" />;
    }
    if (content === "false") {
      return <div className={styles.minus}>-</div>;
    }
    return <div className={styles.minus}>{content}</div>;
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
        Choose a co-pilot that’s right for you
        </div>
        <h1 className={cn("h1", styles.title)}>
        EMBRACE WELLNESS WITH FEEL GOOD AI
        </h1>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.head}></div>
              <div className={styles.body}>
                {options.map((option, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.category}>{option.title}</div>
                    {option.items.map((item, index) => (
                      <div className={styles.parameter} key={index}>
                        <div className={styles.label}>{item.title}</div>
                        <div className={styles.hint}>
                          <Icon name="info" size="10" />
                          <div className={styles.tooltip}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {data.map((type, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.head}>
                  <div className={styles.package} style={{ color: type.color }}>
                    {type.title}
                  </div>
                  <div className={styles.description}>{type.description}</div>
                  {type.price && (
                    <>
                      <div className={styles.cost}>
                        <span className={styles.sign}>$</span>{" "}
                        <span className={styles.price}>{type.price}</span>
                      </div>
                      <div className={styles.note}>{type.note}</div>
                    </>
                  )}
                </div>
                <div className={styles.body}>
                  <div
                    className={cn(styles.more, {
                      [styles.active]: more[index],
                    })}
                    onClick={() => handleClick(index)}
                  >
                    See all features
                    <Icon name="arrow-bottom" size="9" />
                  </div>
                  <div
                    className={cn(styles.list, {
                      [styles.visible]: more[index],
                    })}
                  >
                    {options.map((option, optionIndex) => (
                      <div className={styles.item} key={optionIndex}>
                        {option.items.map((item, itemIndex) => (
                          <div className={styles.parameter} key={itemIndex}>
                            <div className={styles.label}>{item.title}</div>
                            {renderContent(type.options[itemIndex])}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    className={cn(
                      { button: index === 0 },
                      { button: index === 1 },
                      { "button-stroke": index === 2 },
                      styles.button
                    )}
                  >
                    {type.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
