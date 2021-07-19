import React from "react";
import LoginForm from "./LoginForm";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <section className={styles.auth}>
      <LoginForm />
    </section>
  );
};

export default Auth;
