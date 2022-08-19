import React from "react";
import styles from "./Home.module.css";
import useFireStore from "../../hooks/useFireStore";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFireStore('transaction')
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => {
        const { id, name, amount } = transaction;
        console.log(transaction);
        return (
          <li key={id}>
            <p className={styles.name}>{name}</p>
            <p className={styles.amount}>${amount}</p>
            <button onClick={()=> deleteDocument(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
