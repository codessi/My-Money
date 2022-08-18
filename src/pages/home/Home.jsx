import styles from "./Home.module.css";
import React, { useEffect } from "react";
import TransactionForm from "./TransactionForm";
import useAuthContext from "../../hooks/useAuthContext";
import { firestore } from "../../config";
import TransactionList from "./TransactionList";
import { useCollection } from "../../hooks/useCollection";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transaction");
  console.log(documents)

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
