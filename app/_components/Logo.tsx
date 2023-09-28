"use client";

import { useState, useEffect, CSSProperties } from "react";
import { logo } from "../_assets/index";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app/_styles/Logo.module.css";

export default function Logo({ width }: { width: string }) {
  const [darkMode, setDarkMode] = useState<boolean>(
    typeof window !== undefined
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    prefersDark.addEventListener("change", (e) =>
      e.matches ? setDarkMode(true) : setDarkMode(false)
    );
  }, []);

  const style = { "--logo-width": `${width}` } as CSSProperties;

  return (
    <div className={styles.logo} style={style}>
      <Link href="/">
        <Image
          src={darkMode ? logo.light : logo.dark}
          alt="walk that duck logo"
        />
      </Link>
    </div>
  );
}
