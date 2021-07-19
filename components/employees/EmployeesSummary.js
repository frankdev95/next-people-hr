import { useState, Fragment } from "react";
import styles from "./EmployeesSummary.module.css";
import { employees } from "../../data/company/employees";
import searchIcon from "../../public/images/search.png";
import plusIcon from "../../public/images/plus.png";
import EmployeeTable from "./EmployeeTable";
import Image from "next/image";
import MainHeader from "../typography/MainHeader";
import Modal from "../ui/Modal/Modal";
import AddForm from "./AddEmployeeForm";
import Layout from "../layout/main/Layout";

const classes = [
  "td-name",
  "td-location",
  "td-department",
  "td-role",
  "td-contact",
  "td-status",
];

const Employees = () => {
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);

  const addEmployeeClickHandler = () => setShowAddEmployeeForm(true);

  return (
    <Layout>
      <Fragment>
        {showAddEmployeeForm && (
          <Modal className={styles.modal}>
            <AddForm onModalClose={() => setShowAddEmployeeForm(false)} />
          </Modal>
        )}
        <section className={styles.container}>
          <header className={styles.header}>
            <MainHeader>Employees</MainHeader>
            <div className={styles["header-main"]}>
              <form action="">
                <div className={styles["search-bar"]}>
                  <select name="" id="">
                    <option value="" hidden>
                      All categories
                    </option>
                  </select>
                  <input type="text" placeholder="Search..." />
                  <button className={styles["search-btn"]} type="submit">
                    <Image src={searchIcon} alt="search icon" />
                  </button>
                </div>
              </form>
              <button
                className={styles["add-btn"]}
                onClick={addEmployeeClickHandler}
              >
                <Image src={plusIcon} alt="plus icon" />
                <span>Add employee</span>
              </button>
            </div>
          </header>
          <main className={styles["employee-main"]}>
            <EmployeeTable data={employees} classes={classes} />
          </main>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Employees;
