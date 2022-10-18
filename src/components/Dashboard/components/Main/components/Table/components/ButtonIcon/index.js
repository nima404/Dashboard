import styles from "./style.module.css";

export function ButtonIcon({ className, icon, handleClick, title }) {
  return (
    <button className={styles[className]} onClick={handleClick} title={title}>
      <i className={`bi bi-${icon}`}></i>
    </button>
  );
}
