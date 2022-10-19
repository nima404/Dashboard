import { useContext } from "react";
import { SidebarContext } from "../../../../../../context/sidebarContext";
import styles from "./style.module.css";

export const SidebarFooter = () => {
    const { sidebar, toggleSidebar } = useContext(SidebarContext);

    return (
        <div className={styles.sidebar_footer_style}>
            <button className={styles.side_button_style}>
                <p
                    className={
                        sidebar ? styles.close_sidebar_paragraf : styles.sidebar_paragraf
                    }
                >
                    SETTING
                </p>
                <i class="bi bi-gear"></i>
            </button>
        </div>
    )
}