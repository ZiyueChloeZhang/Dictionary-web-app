import { z } from 'zod';
import { createContext, FC, useState } from 'react';
import { ContextProviderProp } from './ThemeContext';

const Definition = z.object({
    definition: z.string(),
    example: z.string().optional()
})
export type Definition = z.infer<typeof Definition>

const Meaning = z.object({
    partOfSpeech: z.string(),
    definitions: z.array(Definition),
    synonyms: z.array(z.string()),
    antonyms: z.array(z.string())
})
export type Meaning = z.infer<typeof Meaning>;

const Phonetic = z.object({
    text: z.string().optional(),
    audio: z.string().optional()
})

const Dictionary = z.object({
    word: z.string(),
    phonetic: z.string().optional(),
    phonetics: z.array(Phonetic),
    meanings: z.array(Meaning),
    sourceUrls: z.array(z.string().url())
}).nullable();

type Dictionary = z.infer<typeof Dictionary>

export const ApiStatus = ["loading", 'success', 'failure', 'idle'] as const;
export type APIStatus = typeof ApiStatus[number];

interface IDictionaryContext {
    status: APIStatus,
    dictionary: Dictionary,
    searchWord: (word: string) => void
}

const defaultDictionaryContext: IDictionaryContext = {
    status: 'idle',
    dictionary: null,
    searchWord: (word: string) => { }
}

export const DictionaryContext = createContext<IDictionaryContext>(defaultDictionaryContext);

export const DictionaryProvider: FC<ContextProviderProp> = ({ children }) => {
    const [status, setStatus] = useState<APIStatus>("idle");
    const [dictionary, setDictionary] = useState<Dictionary>(null);

    const searchWord = async (word: string) => {
        setStatus("loading");

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((res) => {
                if (res.ok) {
                    return res.json().then((data) => {
                        setDictionary(Dictionary.parse(data[0]));
                        setStatus('success');
                    })
                } else if (res.status === 404) {
                    setDictionary(null);
                    setStatus('success');
                } else {
                    throw res;
                }
            })
            .catch((reason) => {
                console.error(reason);
                setStatus('failure');
            })


        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const json = await res.json();
        } catch (error) {
            console.error(error);
            setStatus('failure');
        }

    }

    return (
        <DictionaryContext.Provider value={{ status, dictionary, searchWord }}>
            {children}
        </DictionaryContext.Provider >
    )
}