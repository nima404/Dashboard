import styles from "./style.module.css";
import sidebarlogo from "../../../../../../assets/dashboard-layout.png"

export const SidebarHeader = () => {
    return (
        <div className={styles.sidebarLogo_parent}>
            <img src={sidebarlogo} className={styles.sidebar_logo} />
        </div>
    )
}