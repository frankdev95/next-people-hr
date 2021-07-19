import styles from "./Buttons.module.css";

const PrimaryButton = (props) => (
  <button
    className={`${styles.btn} ${styles["btn-primary"]}`}
    style={props.dimensions}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default PrimaryButton;
