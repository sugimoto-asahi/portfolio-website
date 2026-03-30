import React, {createContext, useContext, useState} from 'react';
import en from './en.json';
import jp from './jp.json';

const translations = {en, jp};

const LanguageContext = createContext(null);

/**
 * Language state provider.
 * Access via the useLanguage() hook.
 */
export function LanguageProvider({children}) {
    const [lang, setLang] = useState('en');

    const toggleLang = () => setLang(l => (l === 'en' ? 'jp' : 'en'));

    /**
     * Translation lookup. Returns the string for the current language,
     * falling back to the key itself if no translation is found.
     * @param {string} key
     * @returns {string}
     */
    const t = (key) => translations[lang][key] ?? key;

    return (
        <LanguageContext.Provider value={{lang, toggleLang, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

/**
 * Hook to consume language context anywhere in the tree.
 * @returns {{ lang: string, toggleLang: function, t: function }}
 */
export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used inside a <LanguageProvider>');
    }
    return ctx;
}
