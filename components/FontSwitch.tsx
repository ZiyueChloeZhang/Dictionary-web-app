import { FC, useContext } from "react";
import FontContext, { FontNames } from "../contexts/FontContext";
import ArrowIcon from '../public/images/icon-arrow-down.svg';
import { Menu } from '@headlessui/react';
import { kebabCase } from "lodash";

const FontSwitch: FC = () => {
    const { fontName } = useContext(FontContext);

    return (
        <Menu as='div' className="inline-block text-left self-center z-10">
            <div>
                <Menu.Button className='inline-flex w-full justify-center items-center'>
                    <span className='font-bold px-2 text-light-primary text-black-200 dark:text-white transition-all duration-500'>{fontName}</span>
                    <div className="px-2">
                        <ArrowIcon />
                    </div>
                </Menu.Button>
            </div>

            <Menu.Items className="absolute z-10 mt-2 w-[183px] origin-top-right rounded-2xl shadow-sm bg-white">
                <div className="px-4 py-4">
                    {FontNames.map((name) => (
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active && 'text-purple'} block py-2 text-sm font-${kebabCase(name)} font-bold`}>
                                    {name}
                                </button>
                            )}

                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Menu >
    );

}

export default FontSwitch;