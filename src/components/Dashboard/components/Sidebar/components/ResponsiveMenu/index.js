
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context/themeContext';
import { Icon } from '../../../Header/components/Icon';
import { ListItem } from '../listItem';
import { SidebarFooter } from '../SidebarFooter';
import { SidebarMain } from '../SidebarMain';
import styles from './style.module.css';

export const ResponsiveMenu = ({ className }) => {
    const { theme, useTheme } = useContext(ThemeContext)

    return (
        <nav className={`navbar ${theme === "dark" ? "navbar-dark bg-dark" : "bg-light"} fixed-top ${styles.ResponsivMenu} `}>
            <div class="container-fluid w-100 d-flex justify-content-between">
                <div>
                    <div>
                        <button className={`navbar-toggler ${styles.navbar_toggler_active}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div>
                    <Icon />
                </div>
                <div class={`offcanvas offcanvas-end ${theme === "dark" ? "navbar-dark bg-dark" : "bg-light"}`} style={{ width: "45%" }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <div className={`${styles.sidebar_header_style} `}>
                            <h5 className={styles.sidebar_title}>پنل کاربری</h5>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <ListItem icon={"house"} Text="داشبورد" />
                            <ListItem icon={"person"} Text="پروفایل" />
                            <ListItem icon={"bell"} Text="اعلان" />
                        </ul>
                    </div>
                    <SidebarFooter />
                </div>
            </div>
        </nav>
    )
}