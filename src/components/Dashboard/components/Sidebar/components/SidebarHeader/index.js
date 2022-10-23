import styles from "./style.module.css";
import sidebarlogo from "../../../../../../assets/dashboard-layout.png"

export const SidebarHeader = () => {
    return (
        <div className={styles.sidebar_logo}>
            {/* <img src={sidebarlogo} className={styles.sidebar_logo} /> */}
            <i className={`bi bi-people ${styles.icon_fs}`}></i>
        </div>
    )
}