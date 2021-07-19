import styles from "./Layout.module.css";
import PrimarySidebar from "../sidebar/PrimarySidebar";

const Layout = (props) => {
  const { children } = props;

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PrimarySidebar />
        {children}
      </section>
    </main>
  );
};

export default Layout;
