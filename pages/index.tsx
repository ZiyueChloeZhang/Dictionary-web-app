import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../public/images/logo.svg';
import ArrowIcon from '../public/images/icon-arrow-down.svg';
import Moon from '../public/images/icon-moon.svg';
import ToggleSwitch from '../components/ThemeToggle';
import React, { useContext, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';


const Home: NextPage = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`${isDark ? 'dark' : ''} font-inter`}>
      <div className=' dark:bg-black-400 w-screen h-screen transition-all duration-500'>
        <Head>
          <title>Dictionary</title>
          <link rel="icon" href="/images/logo.svg" />
        </Head>
        <main className="max-w-3xl mx-auto pt-9">
          <div id='toolbar' className='flex w-full justify-between '>
            <Logo />
            <div className='flex flex-row'>
              <div className='flex justify-center items-center'>
                <span className='font-bold px-2 text-light-primary text-black-200 dark:text-white transition-all duration-500'>Sans Serif</span>
                <div className="px-2">
                  <ArrowIcon />
                </div>
              </div>
              <div id='vertical-divider' className='border-r border-gray mx-5 h-8' />
              <div className='flex items-center'>
                <ToggleSwitch />
                <Moon className={`ml-5 dark:text-purple text-gray-300`} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
