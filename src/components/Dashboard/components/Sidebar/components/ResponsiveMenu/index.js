import { ListItem } from '../listItem';
import { SidebarFooter } from '../SidebarFooter';
import { SidebarMain } from '../SidebarMain';
import styles from './style.module.css';

export const ResponsiveMenu = ({ className }) => {
    return (
        <nav className={`navbar bg-light fixed-top ${styles.ResponsivMenu}`}>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" style={{ width: "45%" }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <div className={`${styles.sidebar_header_style}`}>
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