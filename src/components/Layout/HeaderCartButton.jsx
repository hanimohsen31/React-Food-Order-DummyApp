import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import {CartContext} from "../../store/CartContext";

export default function HeaderCartButton(props) {
  const handleButton = () => {
    props.handleShowCart();
    // console.log("clicked");
    // console.log(props.handleShowCart());
  };
  const ctx = useContext(CartContext);
  // console.log(ctx)
  const numberofCartItems = ctx.items.reduce((curNum,item) => {return curNum + item.amount},0)
  return (
    <>
      <button className={styles.button} onClick={handleButton}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{numberofCartItems}</span>
      </button>
    </>
  );
}
