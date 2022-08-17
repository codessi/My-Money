import styles from "./Home.module.css";
import React from "react";


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}></div>
    </div>
  );
};

export default Home;
