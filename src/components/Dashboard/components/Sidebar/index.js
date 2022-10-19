import { useContext, useState } from "react";
import { SidebarContext } from "../../../../context/sidebarContext";
import { ThemeContext } from "../../../../context/themeContext";
import { ListItem } from "./components/listItem/index";
import { SidebarFooter } from "./components/SidebarFooter";
import { SidebarHeader } from "./components/SidebarHeader";
import { SidebarMain } from "./components/SidebarMain";
import styles from "./style.module.css";

export const Sidebar = () => {
  // State
  const { sidebar } = useContext(SidebarContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        sidebar ? styles.close_sidbar_style : styles.sidbar_style
      } ${theme === "dark" && styles.sidbar_style_dark}`}
    >
      <SidebarHeader />
      <br />
      <SidebarMain />
      <br />
      <SidebarFooter />
    </div>
  );
};
