import { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/themeContext";
import { Icon } from "./components/Icon";
import styles from "./style.module.css";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`${styles.header_style} ${
        theme === "dark" && styles.header_style_dark
      }`}
      dir="rtl"
    >
      <div className={styles.sidebar_header_style}>
        <h4 className={styles.sidebar_title}>پنل کاربری</h4>
      </div>

      <Icon />
    </header>
  );
};
