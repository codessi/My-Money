import styles from "./Home.module.css";
import React, { useEffect } from "react";
import TransactionForm from "./TransactionForm";
import useAuthContext from "../../hooks/useAuthContext";
import { firestore } from "../../config";

const Home = () => {
  const { user } = useAuthContext();
// test 
  useEffect(() => {
    const result = [];
    const ref = firestore.collection("transaction");
    const unsub = ref.onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      console.log(result)
    }, error => {
      
      console.log(error.message)
    })

    // console.log("from home ", firestore.collection("transaction").get());
  }, []);
// test end
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
