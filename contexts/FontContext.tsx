import { createContext, FC, useState } from "react";

export const FontNames = ["Sans Serif", "Serif", "Mono"] as const;
export type FontName = typeof FontNames[number];

interface IFontContext {
    fontName: FontName,
    switchFont: (name: FontName) => void
}

const defaultFont: IFontContext = {
    fontName: "Sans Serif",
    switchFont: (name:FontName) => {}
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

