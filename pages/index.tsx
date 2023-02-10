import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../public/images/logo.svg';
import ArrowIcon from '../public/images/icon-arrow-down.svg';
import Moon from '../public/images/icon-moon.svg';
import ToggleSwitch from '../components/ToggleSwicth';
import React, { useState } from 'react';


const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleColorTheme = () => {
    setIsDarkMode((currMode) => !currMode);
  }

  return (
    <div >
      <Head>
        <title>Dictionary</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main className="max-w-3xl mx-auto mt-9 ">
        <div id='toolbar' className='flex w-full justify-between'>
          <Logo />
          <div className='flex flex-row'>
            <div className='flex justify-center items-center'>
              <span className='font-bold px-2 text-black'>Sans Serif</span>
              <div className="px-2">
                <ArrowIcon />
              </div>
            </div>
            <div id='vertical-divider' className='border-r border-gray mx-5 h-8' />
            <div className='flex items-center'>
              <ToggleSwitch isOn={isDarkMode} onToggle={toggleColorTheme} />
              <Moon className={`ml-5 ${isDarkMode ? 'text-purple' : 'text-gray-dark'}`} />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home
