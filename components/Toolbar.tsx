import React from 'react'
import FontSwitch from './FontSwitch'
import ToggleSwitch from './ThemeToggle';
import Moon from '../public/images/icon-moon.svg';

const Toolbar = () => {
    return (
        <div id='toolbar' className='flex w-full justify-between mobile:h-6 tablet:h-8 desktop:h-9'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" /><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" /><path d="M11 9h12" /></g></svg>
            <div className='flex flex-row'>
                <FontSwitch />
                <div id='vertical-divider' className='border-r border-gray mx-5 ' />
                <div className='flex items-center'>
                    <ToggleSwitch />
                    <Moon className={`ml-5 dark:text-purple text-gray-300`} />
                </div>
            </div>
        </div>
    )
}

export default Toolbar