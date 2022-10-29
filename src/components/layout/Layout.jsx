import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
