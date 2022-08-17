import styles from "./Home.module.css";
import React from "react";
import TransactionForm from "./TransactionForm";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
