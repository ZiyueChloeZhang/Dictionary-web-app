import { FC } from "react";

const texts = [
    "(etc.) A set of keys used to operate a typewriter, computer etc.",
    "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
    "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device."
]

const DefinitionSection: FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row w-full items-center">
                <span className="inline-block font-bold italic text-lg">noun</span>
                <div className="ml-5 h-[1px] bg-gray-200 flex-1" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-md text-gray-300">Meaning</div>
                <ul className="flex flex-col gap-[13px] pl-5 list-disc list-outside">
                    {
                        texts.map((line) => (
                            <li className="text-purple ml-3 pl-2">
                                <span className="text-black-200 dark:text-white text-sm">{line}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-row items-center gap-[22px]">
                <div className="text-md text-gray-300">Synonyms</div>
                <div className="text-purple font-bold">electronic keyboard</div>
            </div>
        </div>
    );
}

export default DefinitionSection;