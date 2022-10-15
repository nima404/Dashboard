import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme/useTheme";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [theme, toggle] = useTheme()

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggle }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}