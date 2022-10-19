import { useContext } from "react";
import { SidebarContext } from "../../../../../../context/sidebarContext";
import { ThemeContext } from "../../../../../../context/themeContext";
import styles from "./style.module.css";
export const ListItem = ({ Text, icon }) => {
  const { sidebar } = useContext(SidebarContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <li
        className={`${styles.listItem_style} ${
          theme === "dark" && styles.listItem_style_dark
        }`}
      >
        <button className={styles.listItem_button_style}>
          <i className={`bi bi-${icon} ${styles.icon_style}`}></i>
          <p
            className={
              sidebar
                ? styles.close_sidebar
                : styles.listItem_button_paragraf_style
            }
          >
            {Text}
          </p>
        </button>
      </li>
    </>
  );
};
