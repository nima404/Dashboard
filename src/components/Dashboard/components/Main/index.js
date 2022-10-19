import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "../../../../context/themeContext";
import { Table } from "./components/Table";
import { TableHeader } from "./components/TableHeader";
import styles from "./style.module.css";

export function Main() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" && styles.main_dark} ${styles.main}`}>
      <TableHeader />
      <Table />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
