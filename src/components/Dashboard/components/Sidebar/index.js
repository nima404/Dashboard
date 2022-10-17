import { useContext, useState } from "react"
import { SidebarContext } from "../../../../context/sidebarContext"
import { ListItem } from "./components/listItem/index"
import styles from "./style.module.css"

export const Sidebar = () => {

    // State
    const { sidebar, toggleSidebar } = useContext(SidebarContext)

    // Function's
    const toggleSidebarHandler = () => {
        toggleSidebar(prev => prev = !prev)
    }

    return (
        <div className={sidebar ? styles.close_sidbar_style : styles.sidbar_style}>

            <br />

            <div className={sidebar ? "" : styles.sidebar_main_style}>

                <button className={styles.sidebar_toggle_button_style} onClick={() => toggleSidebarHandler()}>{sidebar ? <i class="bi bi-caret-left-fill"></i> : <i class="bi bi-caret-right-fill"></i>}</button>

                <ul className={styles.listItem_parent}>

                    <ListItem listItemClassName={`${styles.listItem_style_actice} ${styles.listItem_style}`} buttonClassName={styles.listItem_button_style} iconClassName={`bi bi-house ${styles.icon_style}`} paragrafClassName={sidebar ? styles.close_sidebar : styles.listItem_button_paragraf_style} paragrafText="داشبورد" />

                    <ListItem listItemClassName={styles.listItem_style} buttonClassName={styles.listItem_button_style} iconClassName={`bi bi-person ${styles.icon_style}`} paragrafClassName={sidebar ? styles.close_sidebar : styles.listItem_button_paragraf_style} paragrafText="پروفایل" />

                    <ListItem listItemClassName={styles.listItem_style} buttonClassName={styles.listItem_button_style} iconClassName={`bi bi-bell ${styles.icon_style}`} paragrafClassName={sidebar ? styles.close_sidebar : styles.listItem_button_paragraf_style} paragrafText="اعلان" />

                </ul>
            </div >

            <br />

            <div className={styles.sidebar_footer_style}>
                <button className={styles.side_button_style}>
                    <p className={sidebar ? styles.close_sidebar_paragraf : styles.sidebar_paragraf}>SETTING</p>
                    <i class="bi bi-gear"></i>
                </button>
            </div>

        </div >
    )
}