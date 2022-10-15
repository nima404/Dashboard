import { Table } from "./components/Table";
import { TableHeader } from "./components/TableHeader";
import styles from "./style.module.css";

export function Main() {
  return (
    <div className={styles.main}>
      <TableHeader />
      <Table />
    </div>
  );
}
