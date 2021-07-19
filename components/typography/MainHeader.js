import React from "react";
import styles from "./Typography.module.css";

const MainHeader = (props) => {
  console.log("main header");
  return <h1 className={styles["main-header"]}>{props.children}</h1>;
};

export default MainHeader;
