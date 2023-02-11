import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../public/images/logo.svg';
import ArrowIcon from '../public/images/icon-arrow-down.svg';
import Moon from '../public/images/icon-moon.svg';
import ToggleSwitch from '../components/ThemeToggle';
import React, { useContext, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import FontSwitch from '../components/FontSwitch';
import FontContext from '../contexts/FontContext';
import { kebabCase } from "lodash";


const Home: NextPage = () => {
  const { isDark } = useContext(ThemeContext);
  const { fontName } = useContext(FontContext);

  return (
      <div className={`${isDark ? 'dark' : ''} font-${kebabCase(fontName)} text-sm`}>
        <div className=' dark:bg-black-400 w-screen h-screen transition-all duration-500'>
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
            <div>
            </div>
            <h1>header</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores itaque dicta aliquam numquam officiis, esse quasi nesciunt hic rem facere molestiae quod dolor excepturi, odio voluptates veritatis eaque at.</p>
          </div>
        </div>
      </div>
  )
}

export default Home
