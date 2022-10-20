import { useContext } from "react";
import { ThemeContext } from "../../../../../../../../context/themeContext";
import styles from "./style.module.css";

export function EditInput({ type, value, handleOnChange }) {
  const { theme } = useContext(ThemeContext);
  return (
    <input
      type={type}
      onChange={(e) => handleOnChange(e.target.value)}
      value={value}
      className={`${theme === "dark" && styles.edit_input_dark} ${
        styles.edit_input
      }`}
    />
  );
}
