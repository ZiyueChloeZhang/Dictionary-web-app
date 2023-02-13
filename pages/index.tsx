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


const Home: NextPage = () => {
  const { isDark } = useContext(ThemeContext);
  const { fontName } = useContext(FontContext);

  return (
    <div className={`${isDark ? 'dark' : ''} ${fontStyles[fontName]} text-sm`}>
      <div className=' dark:bg-black-400 w-screen h-screen text-black-200 dark:text-white'>
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
          <div className='my-[45px]'>
            <SearchBar />
          </div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate veritatis eaque maiores harum modi repudiandae. Labore, dolore, saepe unde, fuga id eligendi vero harum modi itaque ad inventore eaque.</h2>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
