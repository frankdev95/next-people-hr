import { Fragment } from "react";
import styles from "./Stage.module.css";
import nextIcon from "../../../../public/images/next.png";
import Image from "next/image";
import Number from "../../Badge/Number";

const Stage = (props) => {
  const { stages, className } = props;

  return (
    <div className={styles.container}>
      {stages.map((stage, index) => {
        return (
          <Fragment key={stage.number}>
            {index > 0 && index < stages.length && (
              <div className={styles["arrow-container"]}>
                <Image src={nextIcon} alt="arrow icon" />
              </div>
            )}
            <Number
              number={stage.number}
              text={stage.text || null}
              className={className}
              active={stage.active}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Stage;
