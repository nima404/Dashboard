import { createContext, useState } from "react";

export const SidebarContext = createContext()

export const SidebarContextProvider = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)
    return (
        <SidebarContext.Provider value={{ sidebar, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}