import React, { FC, useContext } from 'react'
import { DictionaryContext } from '../contexts/DictionaryContext';
import Dictionary from './Dictionary'
import SearchBar from './SearchBar'

const Main: FC = () => {
    return (
        <>
            <div id='search-bar' className='my-[45px]'>
                <SearchBar />
            </div>
            <Dictionary />
        </>
    )
}

export default Main