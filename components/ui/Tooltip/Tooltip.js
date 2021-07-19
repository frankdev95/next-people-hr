import styles from "./Tooltip.module.css";

const Tooltip = (props) => {
  const { errorMessage } = props;

  return (
    <div className={styles.tooltip}>
      <div className={styles["tooltip-arrow"]}></div>
      <div className={styles["tooltip-content"]}>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Tooltip;
