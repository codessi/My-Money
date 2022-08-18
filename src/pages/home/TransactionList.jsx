import React from "react";
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => {
        const {id, name, amount} = transaction
        console.log(transaction);
        return (
          <li  key={id}>
            <p className={styles.name}>{name}</p>
            <p className={styles.amount}>${amount}</p>
          </li>
        )
      })}
    </ul>
  );
}
