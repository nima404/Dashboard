import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../../../context/themeContext";
import styles from "./style.module.css";
import Fuse from "fuse.js";

export const Header = () => {
  const { toggle, theme } = useContext(ThemeContext);
  const [filterClients, setFilterClients] = useState("");
  const [searchText, setSearchText] = useState("");
  const filterOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    keys: ["firstName", "lastName", "location"],
  };
  const clients = useSelector((state) => state.client.clients);
  const fuse = new Fuse(clients, filterOptions);
  function handleSearch() {
    setFilterClients(fuse.search(searchText));
  }
  console.log(filterClients);
  return (
    <header className={styles.header_style} dir="rtl">
      <div className={styles.searchInput_parent}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type={"text"}
          className={styles.searchInput_style}
          placeholder="جست و جو.."
        />
        <button className={styles.optionStyle_button} onClick={handleSearch}>
          <i className={`bi bi-search ${styles.search_btn}`}></i>
        </button>
      </div>

      <div className={styles.option_parent}>
        <div className={`${styles.option_Style} ${styles.after_before_style}`}>
          <button className={styles.optionStyle_button}>
            <i class={`bi bi-bell ${styles.icon_style}`}></i>
          </button>
        </div>

        <div className={`${styles.option_Style}`}>
          <button
            className={styles.optionStyle_button}
            onClick={() => toggle()}
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

          <div className={`${styles.user_style}`}>
            <button className={styles.optionStyle_button}>
              <i
                class={`bi bi-person ${styles.icon_style} ${styles.userIcon_styles}`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
