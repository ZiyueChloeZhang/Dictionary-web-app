import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../public/images/logo.svg';
import Moon from '../public/images/icon-moon.svg';
import ToggleSwitch from '../components/ThemeToggle';
import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import FontSwitch from '../components/FontSwitch';
import FontContext, { fontStyles } from '../contexts/FontContext';
import SearchBar from '../components/SearchBar';
import PlayIcon from '../components/PlayIcon';
import DefinitionSection from '../components/DefinitionSection';
import NewWindowIcon from '../public/images/icon-new-window.svg';


const Home: NextPage = () => {
  const { isDark } = useContext(ThemeContext);
  const { fontName } = useContext(FontContext);

  return (
    <div className={`${isDark ? 'dark' : ''} ${fontStyles[fontName]} text-sm`}>
      <div className=' dark:bg-black-400  text-black-200 dark:text-white pb-20'>
        <Head>
          <title>Dictionary</title>
          <link rel="icon" href="/images/logo.svg" />
        </Head>
        <div className="flex flex-col max-w-3xl mx-auto pt-9">
          <div id='toolbar' className='flex w-full justify-between '>
            <Logo />
            <div className='flex flex-row'>
              <FontSwitch />
              <div id='vertical-divider' className='border-r border-gray mx-5 h-8' />
              <div className='flex items-center'>
                <ToggleSwitch />
                <Moon className={`ml-5 dark:text-purple text-gray-300`} />
              </div>
            </div>
          </div>
          <div id='search-bar' className='my-[45px]'>
            <SearchBar />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-xl">keyboard</div>
                <div className="h-2" />
                <div className="text-purple">/ˈkiːbɔːd/</div>
              </div>
              <PlayIcon />
            </div>
            <DefinitionSection />
            <DefinitionSection />
            <DefinitionSection />
            <footer>
              <div className="h-[1px] bg-gray-200 w-full mb-5" />
              <div className="flex flex-row items-center text-xs w-full">
                <div className="text-gray-300 pr-5">Source</div>
                <a className="underline " href='https://en.wiktionary.org/wiki/keyboard'>https://en.wiktionary.org/wiki/keyboard</a>
                <div className="pl-[9px]" >
                  <NewWindowIcon />
                </div>
              </div>
            </footer>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
