import { useContext } from "react"
import { ThemeContext } from "../../../../context/themeContext"
import styles from "./style.module.css"

export const Header = () => {

    const { toggle, theme } = useContext(ThemeContext);

    return (
        <header className={styles.header_style} dir="rtl">

            <div className={styles.searchInput_parent}>
                <input type={"text"} className={styles.searchInput_style} placeholder="جست و جو.." />
            </div>

            <div className={styles.option_parent}>

                <div className={`${styles.option_Style} ${styles.after_before_style}`}>
                    <button className={styles.optionStyle_button}>
                        <i class={`bi bi-bell ${styles.icon_style}`}></i>
                    </button>
                </div>

                <div className={`${styles.option_Style}`}>
                    <button className={styles.optionStyle_button} onClick={() => toggle()}>
                        <i className={`bi ${theme === "light" ? "bi-lightning-charge-fill" : "bi-lightning-charge"} ${styles.icon_style}`}></i>
                    </button>
                </div>

                <div className={`${styles.option_Style} ${styles.userOption_styles}`}>

                    <span className={styles.userName_style}>نام کاربری</span>

                    <div className={`${styles.user_style}`}>
                        <button className={styles.optionStyle_button}>
                            <i class={`bi bi-person ${styles.icon_style} ${styles.userIcon_styles}`}></i>
                        </button>
                    </div>

                </div>

            </div>

        </header>
    )
}