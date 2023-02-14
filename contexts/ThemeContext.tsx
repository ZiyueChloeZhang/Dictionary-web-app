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


export interface ContextProviderProp {
    children?: React.ReactNode
};

export const ThemeProvider: FC<ContextProviderProp> = ({ children }) => {
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




