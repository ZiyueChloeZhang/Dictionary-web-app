import React, { FC, useContext } from 'react'
import { DictionaryContext } from '../contexts/DictionaryContext';
import Dictionary from './Dictionary'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar';

const Main: FC = () => {
    return (
        <div className='flex flex-col mobile:gap-6 tablet:gap-12 max-w-3xl m-auto'>
            <Toolbar />
            <SearchBar />
            <Dictionary />
        </div>
    )
}

export default Main