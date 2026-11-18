
"use client";

import {
    createContext,
    useCallback,
    useContext,
    useSyncExternalStore,
} from "react";

export type Language = "en" | "ta";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const LANGUAGE_EVENT = "meinova-language-change";
const STORAGE_KEY = "meinova-language";

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

function subscribe(callback: () => void) {
    window.addEventListener("storage", callback);
    window.addEventListener(LANGUAGE_EVENT, callback);

    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(LANGUAGE_EVENT, callback);
    };
}

function getLanguageSnapshot(): Language {
    try {
        return localStorage.getItem(STORAGE_KEY) === "ta" ? "ta" : "en";
    } catch {
        return "en";
    }
}

function getServerLanguageSnapshot(): Language {
    return "en";
}

export default function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const language = useSyncExternalStore(
        subscribe,
        getLanguageSnapshot,
        getServerLanguageSnapshot
    );

    const setLanguage = useCallback((nextLanguage: Language) => {
        try {
            localStorage.setItem(STORAGE_KEY, nextLanguage);
            window.dispatchEvent(new Event(LANGUAGE_EVENT));
        } catch {
            console.error("Unable to save language preference.");
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used within a LanguageProvider"
        );
    }

    return context;
}
