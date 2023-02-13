import { createContext, FC, useState } from "react";

export const FontNames = ["sans", "serif", "mono"] as const;
export type FontName = typeof FontNames[number];

export const fontStyles = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono'
} as const;

interface IFontContext {
    fontName: FontName,
    switchFont: (name: FontName) => void
}

const defaultFont: IFontContext = {
    fontName: "sans",
    switchFont: (name: FontName) => { }
} as const;

const FontContext = createContext<IFontContext>(defaultFont);
export default FontContext;

interface IFontProviderProp {
    children?: React.ReactNode
};

export const FontProvider: FC<IFontProviderProp> = ({ children }) => {
    const [fontName, setFont] = useState(defaultFont.fontName);

    const switchFont = (fontName: FontName) => {
        setFont(fontName)
    }

    return (
        <FontContext.Provider value={{ fontName, switchFont }}>
            {children}
        </FontContext.Provider>
    )
}

