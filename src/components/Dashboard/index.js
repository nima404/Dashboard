import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { ThemeContext } from "../../context/themeContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import styles from "./style.module.css";

export function Dashboard() {
  const { sidebar } = useContext(SidebarContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.dashboard_container} ${
        theme === "dark" && styles.dashboard_container_dark
      }`}
    >
      <div className={sidebar ? styles.Sidebar_false : styles.Sidebar}>
        <Sidebar />
      </div>

      <div className={sidebar ? styles.dashboard_false : styles.dashboard}>
        <Header />
        <Main />
      </div>
    </div>
  );
}
