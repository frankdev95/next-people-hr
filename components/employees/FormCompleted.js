import styles from "./FormCompleted.module.css";
import successIcon from "../../public/images/success.png";
import Image from "next/image";
import PrimaryButton from "../ui/Button/PrimaryButton";

const FormCompleted = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-title"]}>
          <Image src={successIcon} alt="success icon" />
          <h1>Form Completed!</h1>
        </div>
        <p>Would task would to like to do next?</p>
      </div>
      <div className={styles.buttons}>
        <PrimaryButton>View Employee</PrimaryButton>
        <PrimaryButton>Create another Employee</PrimaryButton>
        <PrimaryButton>Finish and exit</PrimaryButton>
      </div>
    </div>
  );
};

export default FormCompleted;
