import React, { FC, useState } from "react";

interface IThemeContext {
    isDark: boolean,
    toggleTheme?: () => void;
}

const defaultTheme: IThemeContext = {
    isDark: false
} as const;

const ThemeContext = React.createContext<IThemeContext>(defaultTheme);
export default ThemeContext;


interface IThemeProviderProp {
    children?: React.ReactNode
};

export const ThemeProvider: FC<IThemeProviderProp> = ({ children }) => {
    const [isDark, setIsDark] = useState(defaultTheme.isDark);

    const toggleTheme = () => {
        setIsDark((isDark) => !isDark)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}




