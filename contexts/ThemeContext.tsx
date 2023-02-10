import React, { FC, useState } from "react";

interface IThemeContext {
    isDark: boolean,
    toggleTheme?: () => void;
}

export const defaultTheme: IThemeContext = {
    isDark: false
}

const ThemeContext = React.createContext<IThemeContext>(defaultTheme);

interface IThemeProviderProp {
    children?: React.ReactNode
};

export const ThemeProvider: FC<IThemeProviderProp> = ({ children }) => {
    const [isDark, setIsDark] = useState(defaultTheme.isDark);

    const toggleTheme = () => {
        console.log('toggles');
        setIsDark((isDark) => !isDark)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;





