import styles from "./Home.module.css";
import React, { useEffect } from "react";
import TransactionForm from "./TransactionForm";
import useAuthContext from "../../hooks/useAuthContext";
import { firestore } from "../../config";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
