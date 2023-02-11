import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext';
import { FontProvider } from '../contexts/FontContext';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FontProvider>
        <Component {...pageProps} />
      </FontProvider>
    </ThemeProvider>
  );
}

export default MyApp
