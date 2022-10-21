import { Button, Dropdown, Menu } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context/themeContext';
import { Icon } from '../Icon';
import styles from '../Icon/style.module.css'

export const DropdownButton = () => {
    const { toggle, theme } = useContext(ThemeContext);

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <div className={`${styles.option_Style} ${styles.after_before_style}`}>
                            <button className={styles.optionStyle_button} title="اعلان ها">
                                <i class={`bi bi-bell ${styles.icon_style}`}></i>
                            </button>
                        </div>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <div className={`${styles.option_Style}`}>
                            <button
                                className={styles.optionStyle_button}
                                onClick={() => toggle()} title="دارک مود"
                            >
                                <i
                                    className={`bi ${theme === "light"
                                        ? "bi-lightning-charge-fill"
                                        : "bi-lightning-charge"
                                        } ${styles.icon_style}`}
                                ></i>
                            </button>
                        </div>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <div className={`${styles.option_Style} ${styles.userOption_styles}`}>
                            <span className={styles.userName_style}>نام کاربری</span>

                            <div className={`${styles.user_style}`}>
                                <button className={styles.optionStyle_button}>
                                    <i
                                        class={`bi bi-person ${styles.icon_style} ${styles.userIcon_styles}`}
                                    ></i>
                                </button>
                            </div>
                        </div>
                    ),
                },
            ]}
        />
    );
    return (
        <>
            <Dropdown overlay={menu} placement="bottom" arrow>
                <Button>bottom</Button>

            </Dropdown>
        </>
    )
}