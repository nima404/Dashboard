import styles from "./style.module.css";

export const Loading = () => {
  return (
    <tr>
      <td colSpan={8} className={styles.loader_container} scope="col">
        <div className={styles.loader}></div>
      </td>
    </tr>
  );
};
