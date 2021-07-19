import styles from "./PrimarySidebar.module.css";
import { masterSidebar as sidebarItems } from "../../../data/components/main-sidebar";
import Sidebar from "./Sidebar";

const sidebarClasses = {
  sidebar: styles.sidebar,
  "sidebar-link": styles["sidebar-link"],
  "sidebar-item": styles["sidebar-item"],
  active: styles.active,
};

const PrimarySidebar = () => (
  <Sidebar items={sidebarItems} classNames={sidebarClasses} />
);

export default PrimarySidebar;
