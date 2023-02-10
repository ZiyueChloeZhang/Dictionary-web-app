import { createContext, FC, useState } from "react";

export const FontNames = ["Sans Serif", "Serif", "Mono"] as const;
type FontName = typeof FontNames[number];

interface IFontContext {
    fontName: FontName,
    swithFont?: (name: FontName) => void
}

const defaultFont: IFontContext = {
    fontName: "Sans Serif"
} as const;

const FontContext = createContext<IFontContext>(defaultFont);
export default FontContext;

interface IFontProviderProp {
    children?: React.ReactNode
};

export const FontProvider: FC<IFontProviderProp> = ({ children }) => {
    const [fontName, setFont] = useState(defaultFont.fontName);

    const swithFont = (fontName: FontName) => {
        setFont(fontName)
    }

    return (
        <FontContext.Provider value={{ fontName, swithFont }}>
            {children}
        </FontContext.Provider>
    )
}

