"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Language } from "./translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "supratel-language";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      document.documentElement.lang = "en";
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language, loaded]);

  const toggleLanguage = () => {
    setLanguage((current) =>
      current === "en" ? "es" : "en"
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
