import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { LANGUAGES, Lang, translations } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
};

const I18nContext: React.Context<Ctx | null> =
  ((globalThis as any).__ZAHI_I18N_CTX__ ??= createContext<Ctx | null>(null));

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("zahi-lang") as Lang | null) : null;
    return saved && translations[saved] ? saved : "ar";
  });

  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? "rtl";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("zahi-lang", lang);
  }, [lang, dir]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: setLangState,
      dir,
      t: (key: string) => translations[lang][key] ?? translations.ar[key] ?? key,
    }),
    [lang, dir]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
