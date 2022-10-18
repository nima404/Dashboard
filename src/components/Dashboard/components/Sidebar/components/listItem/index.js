import { useContext } from "react";
import { SidebarContext } from "../../../../../../context/sidebarContext";
import styles from "./style.module.css";
export const ListItem = ({ Text, icon }) => {
  const { sidebar } = useContext(SidebarContext);
  return (
    <>
      <li className={styles.listItem_style}>
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
