"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import ThemeContext from "@/context/ThemeContext";
const ThemeToggle = () => {
  const themeState = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={themeState?.toggle}>
      <Image src="/moon.png" alt="bg_dark" width={14} height={14} />
      <div
        className={styles.ball}
        style={themeState?.theme === "dark" ? { left: 1 } : { right: 1 }}
      ></div>
      <Image src="/sun.png" alt="bg_light" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
