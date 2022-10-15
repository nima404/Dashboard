import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import styles from "./style.module.css";

export function Dashboard() {
  const { sidebar, toggleSidebar } = useContext(SidebarContext)

  return (
    <div className={styles.dashboard_container}>

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
