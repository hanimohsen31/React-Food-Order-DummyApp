import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div className={styles.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default function Modal(props) {
    const portalElement = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>,portalElement)}
      {/* <BackDrop /> */}
      {/* <ModalOverlay> {props.children} </ModalOverlay> */}
    </>
  );
}
