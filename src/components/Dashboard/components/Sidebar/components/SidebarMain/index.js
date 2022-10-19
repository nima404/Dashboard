import { useContext } from "react";
import { SidebarContext } from "../../../../../../context/sidebarContext";
import { ListItem } from "../listItem";
import styles from "./style.module.css";

export const SidebarMain = () => {
    const { sidebar, toggleSidebar } = useContext(SidebarContext);
    // Function's
    const toggleSidebarHandler = () => {
        toggleSidebar((prev) => (prev = !prev));
    };
    
    return (
        <div className={sidebar ? "" : styles.sidebar_main_style}>
            <button
                className={styles.sidebar_toggle_button_style}
                onClick={() => toggleSidebarHandler()}
            >
                {sidebar ? (
                    <i class="bi bi-caret-left-fill"></i>
                ) : (
                    <i class="bi bi-caret-right-fill"></i>
                )}
            </button>

            <ul className={styles.listItem_parent}>
                <ListItem icon={"house"} Text="داشبورد" />
                <ListItem icon={"person"} Text="پروفایل" />
                <ListItem icon={"bell"} Text="اعلان" />
            </ul>
        </div >
    )
}