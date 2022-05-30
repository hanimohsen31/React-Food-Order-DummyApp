import React from "react";
import styles from "./Cart.module.css";
import Modal from "./Modal";
export default function Cart(props) {
  const cartItems = [{ id: "c1", name: "Sushi", amount: "2", price: "12.50" }];
  return (
    <>
    <Modal>
      <div>
        <ul className={styles["cart-items"]}>
          {cartItems.map((elm) => (
            <li>{elm.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.66</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.handleHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
      </Modal>
    </>
  );
}
