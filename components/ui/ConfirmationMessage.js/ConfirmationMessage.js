import styles from "./ConfirmationMessage.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import CancelButton from "../Button/CancelButton";

const ConfirmationMessage = (props) => {
  return (
    <div className={styles["confirmation-message"]}>
      <h2>{props.message}</h2>
      <div className={styles.actions}>
        <CancelButton onClick={props.onCancel} dimensions={{ width: "12rem" }}>
          Cancel
        </CancelButton>
        <PrimaryButton
          onClick={props.onConfirm}
          dimensions={{ width: "12rem" }}
        >
          Okay
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
