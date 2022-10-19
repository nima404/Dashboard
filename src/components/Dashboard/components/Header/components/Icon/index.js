import { useContext } from "react";
import { ThemeContext } from "../../../../../../context/themeContext";
import styles from "./style.module.css";

export const Icon = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div className={styles.option_parent}>
      <div className={`${styles.option_Style} ${styles.after_before_style}`}>
        <button className={styles.optionStyle_button} title="اعلان ها">
          <i class={`bi bi-bell ${styles.icon_style}`}></i>
        </button>
      </div>

      <div className={`${styles.option_Style}`}>
        <button
          className={styles.optionStyle_button}
          onClick={() => toggle()}
          title="دارک مود"
        >
          <i
            className={`bi ${
              theme === "light"
                ? "bi-lightning-charge-fill"
                : "bi-lightning-charge"
            } ${styles.icon_style}`}
          ></i>
        </button>
      </div>

      <div className={`${styles.option_Style} ${styles.userOption_styles}`}>
        <span className={styles.userName_style}>نام کاربری</span>

        <div
          className={`${styles.user_style} ${
            theme === "dark" && styles.user_style_dark
          }`}
        >
          <button className={styles.optionStyle_button}>
            <i
              class={`bi bi-person ${styles.icon_style} ${styles.userIcon_styles}`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
