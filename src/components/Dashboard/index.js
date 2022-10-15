import { Main } from "./components/Main";
import styles from "./style.module.css";

export function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Main />
    </div>
  );
}
