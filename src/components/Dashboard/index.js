import { Header } from "./components/Header";
import { Main } from "./components/Main";
import styles from "./style.module.css";

export function Dashboard() {
  return (
    <div className="dashboard_container">
      <div className={styles.dashboard}>
        <Header />
        <Main />
      </div>
    </div>
  );
}
