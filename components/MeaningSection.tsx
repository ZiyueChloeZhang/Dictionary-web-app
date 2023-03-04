import { FC, useContext } from "react";
import { Definition, DictionaryContext, Meaning } from "../contexts/DictionaryContext";
import FontContext from "../contexts/FontContext";

const MeaningSection: FC<{ meaning: Meaning }> = ({ meaning }) => {
    const { antonyms, definitions, partOfSpeech, synonyms } = meaning;
    const { searchWord } = useContext(DictionaryContext);
    const { fontName } = useContext(FontContext);
    return (
        <div className="flex flex-col gap-10 mobile:gap-8">
            <div className="flex flex-row w-full items-center">
                <span className={`inline-block font-bold ${(fontName === "sans") && "italic"} text-lg ${(fontName === "serif") && 'font-sans font-normal'} mobile:text-sm tablet:text-lg`}>{partOfSpeech}</span>
                <div className="ml-5 h-[1px] bg-gray-200 flex-1" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-md text-gray-300 mobile:text-xs tablet:text-md">Meaning</div>
                <ul className="flex flex-col gap-[13px] pl-5 list-disc list-outside">
                    {
                        definitions.map((definition: Definition) => (
                            <li className="text-purple ml-3 pl-2 text-sm mobile:text-[15px] mobile:leading-[24px] mobile:font-light tablet:text-sm">
                                <div className="text-black-200 dark:text-white">{definition.definition}</div>
                                {definition.example && (<div className="text-gray-300 pt-[13px]">"{definition.example}"</div>)}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-col gap-2 mobile:text-xs tablet:text-md">
                {(synonyms.length > 0) && (
                    <div className="flex flex-row items-start gap-[22px]">
                        <div className="text-gray-300">Synonyms</div>
                        <div className="text-purple font-bold">{synonyms.map((word: string) => (<a className="cursor-pointer" onClick={() => searchWord(word)}>{word} </a>))}</div>
                    </div>)
                }
                {(antonyms.length > 0) && (
                    <div className="flex flex-row items-center gap-[22px]">
                        <div className="text-md text-gray-300">Antonyms</div>
                        <div className="text-purple font-bold">{antonyms.map((word: string) => (<a className="cursor-pointer" onClick={() => searchWord(word)}>{word} </a>))}</div>
                    </div>)
                }
            </div>

        </div >
    );
}

export default MeaningSection;