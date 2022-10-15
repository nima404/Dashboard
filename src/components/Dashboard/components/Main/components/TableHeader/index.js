import styles from "./style.module.css";

export function TableHeader() {
  return (
    <div className="table-header">
      <h3>Clients</h3>
      <button className={styles.add_btn}>+ add client</button>
    </div>
  );
}
