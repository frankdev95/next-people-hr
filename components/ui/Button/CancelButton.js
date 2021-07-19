import styles from "./Buttons.module.css";

const CancelButton = (props) => (
  <button
    className={`${styles.btn} ${styles["btn-cancel"]}`}
    style={props.dimensions}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default CancelButton;
