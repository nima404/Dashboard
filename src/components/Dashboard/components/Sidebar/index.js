import { useContext, useState } from "react"
import { SidebarContext } from "../../../../context/sidebarContext"
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

            <div className={sidebar ? styles.close_sidebar : styles.sidebar_header_style}>
                <i class="bi bi-app"></i>
                <h3 className={styles.sidebar_title}>DASHBOARD</h3>
                <i class="bi bi-app"></i>
            </div>

            <br />

            <div className={sidebar ? "" : styles.sidebar_main_style}>

                <button className={styles.sidebar_toggle_button_style} onClick={() => toggleSidebarHandler()}>{sidebar ? <i class="bi bi-caret-left-fill"></i> : <i class="bi bi-caret-right-fill"></i>}</button>

                <ul className={styles.listItem_parent}>
                    <li className={`${styles.listItem_style_actice} ${styles.listItem_style}`}>
                        <button className={styles.listItem_button_style}>
                            <i class={`bi bi-house ${styles.icon_style}`}></i>
                            <p className={sidebar ? styles.close_sidebar : styles.listItem_button_paragraf_style}>داشبورد</p>
                        </button>
                    </li>

                    <li className={styles.listItem_style}>
                        <button className={styles.listItem_button_style}>
                            <i class={`bi bi-person ${styles.icon_style}`}></i>
                            <p className={sidebar ? styles.close_sidebar : styles.listItem_button_paragraf_style}>پروفایل</p>
                        </button>
                    </li>

                    <li className={styles.listItem_style}>
                        <button className={styles.listItem_button_style}>
                            <i class={`bi bi-bell ${styles.icon_style}`}></i>
                            <p className={sidebar ? styles.close_sidebar : styles.listItem_button_paragraf_style}>اعلان</p>
                        </button>
                    </li>

                </ul>
            </div>

            <br />

            <div className={sidebar ? styles.close_sidebar : styles.sidebar_footer_style}>
                <button className={styles.side_button_style}>
                    <p className={styles.sidebar_paragraf}>SETTING</p>
                    <i class="bi bi-gear"></i>
                </button>
            </div>

        </div>
    )
}