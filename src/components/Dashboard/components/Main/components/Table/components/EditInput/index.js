import styles from "./style.module.css";

export function EditInput({ type, value, handleOnChange }) {
  return (
    <input
      type={type}
      onChange={(e) => handleOnChange(e.target.value)}
      value={value}
      className={styles.edit_input}
    />
  );
}
