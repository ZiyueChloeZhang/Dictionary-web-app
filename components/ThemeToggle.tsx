import { FC, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeToggle: FC = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <label htmlFor='toggle-switch'
                className={'w-10 h-5 relative rounded-full bg-gray-300 dark:bg-purple cursor-pointer'}>
                <input type="checkbox" id="toggle-switch" className="sr-only peer " onChange={toggleTheme} />
                <span className="w-[14px] h-[14px] my-[3px] left-[3px] peer-checked:left-[23px] bg-white absolute rounded-full 
                "> </span>
            </label>
        </>
    );

}

export default ThemeToggle;