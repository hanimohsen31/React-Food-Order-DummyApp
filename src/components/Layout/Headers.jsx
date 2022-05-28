import React from "react";
import styles from "./Headers.module.css";
import img from "../assets/imgs/landing1.jpg";

export default function Headers() {
  return (
    <>
      <header className={styles.header}>React Meals</header>
      <div className={styles["main-image"]}>
        <img src={img} alt="Landing" />
      </div>
    </>
  );
}
