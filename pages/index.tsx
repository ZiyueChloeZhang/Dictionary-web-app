import type { NextPage } from 'next'
import Head from 'next/head'
import Moon from '../public/images/icon-moon.svg';
import ToggleSwitch from '../components/ThemeToggle';
import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import FontSwitch from '../components/FontSwitch';
import FontContext, { fontStyles } from '../contexts/FontContext';
import SearchBar from '../components/SearchBar';
import { DictionaryProvider } from '../contexts/DictionaryContext';
import Dictionary from '../components/Dictionary';
import Main from '../components/Main';
import Toolbar from '../components/Toolbar';

const Home: NextPage = () => {
    const { isDark } = useContext(ThemeContext);
    const { fontName } = useContext(FontContext);


    return (
        <div className={`${isDark ? 'dark' : ''} ${fontStyles[fontName]} text-sm `}>
            <div className=' dark:bg-black-400  text-black-200 dark:text-white min-h-screen mobile:p-5 tablet:p-10'>
                <Head>
                    <title>Dictionary</title>
                    <link rel="icon" href="/images/logo.svg" />
                </Head>

                <DictionaryProvider>
                    <Main />
                </DictionaryProvider>
            </div>
        </div>
    )
}

export default Home
