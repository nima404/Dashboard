import styles from "./style.module.css";

export const Loading = () => {
  return (
    <tr>
      <td colSpan={8} className={styles.loader_container} scope="col">
        <div className={styles.loading_parent}>
          <div className={styles.loader}></div>
        </div>
      </td>
    </tr>
  );
};
