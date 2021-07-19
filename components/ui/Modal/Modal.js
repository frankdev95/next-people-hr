import React, { Fragment } from "react";
import styles from "./Modal.module.css";

const ModalMask = (props) => {
  return <div className={styles.mask} onClick={props.onClick}></div>;
};

const ModalContent = (props) => {
  return (
    <div
      className={`${styles.modal} ${props.className || ""}`}
      style={props.styles}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <ModalMask onClick={props.onMaskClick} />
      <ModalContent className={props.className} styles={props.styles}>
        {props.children}
      </ModalContent>
    </Fragment>
  );
};

export default Modal;
