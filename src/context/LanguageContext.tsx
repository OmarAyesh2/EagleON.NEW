"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "ar" | "en";
type Dir = "rtl" | "ltr";

interface LanguageContextProps {
  lang: Lang;
  dir: Dir;
  isRtl: boolean;
  toggleLanguage: (newLang?: Lang) => void;
  setLang: (newLang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children, initialLang = "ar" }: { children: React.ReactNode; initialLang?: Lang }) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("eagleon_lang", newLang);
    document.cookie = `eagleon_lang=${newLang};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleLanguage = (newLang?: Lang) => {
    if (newLang) {
      setLang(newLang);
    } else {
      setLang(lang === "ar" ? "en" : "ar");
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", isRtl: lang === "ar", toggleLanguage, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
