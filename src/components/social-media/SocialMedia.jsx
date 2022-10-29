import React from "react";
import { SocialIcon } from "react-social-icons";
import { COLORSAPP } from "../../helpers/colors-app";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <SocialIcon
        url="https://www.facebook.com/"
        fgColor="#fff"
        bgColor={COLORSAPP.background}
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.instagram.com/"
        fgColor="#fff"
        bgColor={COLORSAPP.background}
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.twitter.com/"
        fgColor="#fff"
        bgColor={COLORSAPP.background}
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.linkedin.com/"
        fgColor="#fff"
        bgColor={COLORSAPP.background}
        style={{ height: 35, width: 35 }}
      />
    </div>
  );
};

export default SocialMedia;
