import { FC, useContext } from "react";
import { DictionaryContext } from "../contexts/DictionaryContext";
import MeaningSection from "./MeaningSection";
import PlayIcon from "./PlayIcon";

const Dictionary: FC = () => {
    const { dictionary, status } = useContext(DictionaryContext);

    if (status === 'idle') return <></>;
    if (status === 'failure') return <div>error message</div>;
    if (status === 'loading') return <div>loading</div>;

    if (!dictionary) return <div>no result</div>;

    const { word, meanings, phonetics, phonetic, sourceUrls } = dictionary;

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-bold text-xl">{word}</div>
                        <div className="h-2" />
                        <div className="text-purple">{phonetic ||''}</div>
                    </div>
                    <PlayIcon />
                </div>
                {meanings.map(meaning => (<MeaningSection meaning={meaning} />))}
                <footer>
                    <div className="h-[1px] bg-gray-200 w-full mb-5" />
                    <div className="flex flex-row items-center text-xs w-full">
                        <div className="text-gray-300 pr-5">Source</div>
                        {sourceUrls.map((sourceUrl) => (<a className="underline " href={sourceUrl}> {sourceUrls}</a>))}
                        <div className="pl-[9px]" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" /></svg>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );

}

export default Dictionary;