import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme())

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
        document.body.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
            const colorScheme = event.matches ? "dark" : "light"
            setTheme(colorScheme)
        })

        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", event => {
                const colorScheme = event.matches ? "dark" : "light"
                setTheme(colorScheme)
            })
        }
    }, [])


    function getInitialTheme() {
        const savedTheme = window.localStorage.getItem("theme");

        return savedTheme || getSystemTheme();
    }

    function getSystemTheme() {
        return window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function toggle() {
        const isDark = theme === "dark";

        setTheme(isDark ? "light" : "dark");
    }

    return [theme, toggle];
}