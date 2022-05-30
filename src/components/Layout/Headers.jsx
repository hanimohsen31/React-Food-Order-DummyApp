import React from "react";
import styles from "./Headers.module.css";
import img from "../../assets/imgs/landing4.jpg";
import HeaderCartButton from './HeaderCartButton';

export default function Headers(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton handleShowCart={props.handleShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={img} alt="Landing" />
      </div>
    </>
  );
}
