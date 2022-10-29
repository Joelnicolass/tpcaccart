import React from "react";
import SocialMedia from "../social-media/SocialMedia";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>© 2022 Codo a Codo</h3>

      <SocialMedia />
    </div>
  );
};

export default Footer;
