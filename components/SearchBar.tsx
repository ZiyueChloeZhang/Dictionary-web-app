import { FC } from "react";
import SearchIcon from '../public/images/icon-search.svg';

const SearchBar: FC = () => {
    const error = false;
    
    return (
        <div className={`flex justify-between items-center px-6 py-5 rounded-2xl bg-gray-100 dark:bg-black-300 hover:border-purple hover:border ${error && 'border-red border'}`}>
            <label htmlFor='input' />
            <input
                id="input"
                className={`flex-1 font-bold bg-gray-100 dark:bg-black-300 dark:text-white placeholder:opacity-25 dark:placeholder:text-white border-none focus-visible:outline-none`}
                placeholder="Search for any word..." />
            <div className="pl-6">
                <SearchIcon />
            </div>
        </div>
    );

}

export default SearchBar;