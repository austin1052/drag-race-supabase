"use client";
import { CSSProperties } from "react";
import styles from "@/app/_styles/Line.module.css";

interface props {
  height: number;
  width: number;
}

export default function Line({ height, width }: props) {
  const delayMultiplier = 15;

  // smaller values make the delay slower
  const minTime = Math.floor(height / 25);
  const maxTime = Math.floor(height / 10);
  const timeList = Array.from(
    { length: maxTime - minTime },
    (_, i) => i + minTime
  );
  const time = timeList[Math.floor(Math.random() * timeList.length)];
  const position = Math.floor(Math.random() * width);
  const delay = Math.random() * delayMultiplier;

  // asign either rise or fall animation
  const animation = position % 2 ? `${styles.lineRise}` : `${styles.lineFall}`;

  // .background has initial values set for the variables --height and --time
  // the height and time values applied to each line override the initial values
  const style = {
    "--height": `-${height}px`,
    "--time": `${time}s`,
    left: `${position}px`,
    animationDelay: `${delay}s`,
  } as CSSProperties;

  return <div className={`${styles.line} ${animation}`} style={style}></div>;
}
