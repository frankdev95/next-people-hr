import React, { useRef, useState } from "react";
import styles from "./Input.module.css";
import Tooltip from "../../ui/Tooltip/Tooltip";

const Input = (props) => {
  const target = useRef(null);

  const {
    type,
    id,
    name,
    label,
    placeholder,
    value,
    checked,
    isValid,
    errorMessage,
    changeHandler,
    blurHandler,
    touched,
    isModal,
  } = props;

  return (
    <div className={styles["form-group"]}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles["input-container"]}>
        <input
          ref={target}
          id={id}
          type={type}
          name={name}
          onChange={changeHandler}
          onBlur={blurHandler}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          checked={checked}
        />
        {!isModal && !isValid && touched && errorMessage != null && (
          <Tooltip errorMessage={errorMessage} />
        )}
        {isModal && !isValid && touched && errorMessage != null && <div></div>}
      </div>
    </div>
  );
};

export default Input;
