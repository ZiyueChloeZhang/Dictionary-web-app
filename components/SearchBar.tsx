import React from "react";
import { FC } from "react";
import SearchIcon from '../public/images/icon-search.svg';

const SearchBar: FC = () => {
    const error = false;
    const [isEmpty, setIsEmpty] = React.useState<boolean>(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        const inputElement: HTMLInputElement = event.currentTarget;
        const inputString: string = inputElement.value;

        // input validation
        if (inputString.length === 0) {
            setIsEmpty(true);
            return;
        }

        setIsEmpty(false);
    }

    return (
        <>
            <div className={`flex justify-between items-center px-6 py-5 rounded-2xl bg-gray-100 dark:bg-black-300 border ${isEmpty ? 'border-red' : 'border-gray-100 dark:border-black-300 hover:border-purple dark:hover:border-purple'}`}>
                <label htmlFor='input' />
                <input
                    id="input"
                    className={`flex-1 font-bold bg-gray-100 dark:bg-black-300 dark:text-white placeholder:opacity-25 dark:placeholder:text-white border-none focus-visible:outline-none`}
                    placeholder="Search for any word..."
                    onKeyDown={handleKeyDown} />
                <div className="pl-6">
                    <SearchIcon />
                </div>
            </div>
            {isEmpty && <div className="absolute text-red pt-2 text-md">Whoops, can’t be empty…</div>}
        </>
    );

}

export default SearchBar;