import { FC, useContext, useState, KeyboardEvent, useEffect } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";
import SearchIcon from '../public/images/icon-search.svg';

const SearchBar: FC = () => {
    const { dictionary, searchWord } = useContext(DictionaryContext);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        dictionary && setInputValue(dictionary.word);
    }, [dictionary])
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        const inputElement: HTMLInputElement = event.currentTarget;
        const inputString: string = inputElement.value;

        // input validation
        if (inputString.length === 0) {
            setIsEmpty(true);
            return;
        }
        setIsEmpty(false);
        searchWord(inputString);
    }

    return (
        <>
            <div className={`flex justify-between items-center px-6 py-5 rounded-2xl mobile:h-6 tablet:h-16 bg-gray-100 dark:bg-black-300 border ${isEmpty ? 'border-red' : 'border-gray-100 dark:border-black-300 hover:border-purple dark:hover:border-purple'}`}>
                <label htmlFor='input' />
                <input
                    id="input"
                    value={inputValue}
                    className={`flex-1 font-bold bg-gray-100 dark:bg-black-300 dark:text-white placeholder:opacity-25 dark:placeholder:text-white border-none focus-visible:outline-none mobile:text-[16px]ß leading-[19.36px]`}
                    placeholder="Search for any word..."
                    onChange={(e) => setInputValue(e.target.value)}
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