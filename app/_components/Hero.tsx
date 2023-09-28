"use client";

import { useContext } from "react";
import { NavContext } from "@/app/_context/NavContext";
import Logo from "@/app/_components/Logo";
import styles from "@/app/_styles/Hero.module.css";
import animation from "@/app/_styles/Nav.module.css";

export default function Hero() {
  const { menuVisible } = useContext(NavContext);

  let animationStyle;
  switch (menuVisible) {
    case null:
      animationStyle = `${styles.logoContainer}`;
      break;
    case true:
      animationStyle = `${styles.logoContainer} ${animation.hide}`;
      break;
    case false:
      animationStyle = `${styles.logoContainer} ${animation.show}`;
      break;
  }

  return (
    <>
      <div className={animation.perspective}>
        <div className={animationStyle}>
          <Logo width="40%" />
        </div>
      </div>
      <h1 className={`${styles.title} page-title`}>
        <div>
          <span className="title-text">a </span>
          <span className="">drag race </span>
        </div>
        <div>
          <span className="title-text">fantasy league</span>
        </div>
      </h1>
      {/* <div className="test-div"></div>
      <div className="test-div"></div>
      <div className="test-div"></div>
      <div className="test-div"></div> */}
    </>
  );
}
