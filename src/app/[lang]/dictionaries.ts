import "server-only";

interface Dictionary {
  [key: string]: () => Promise<{ [key: string]: string }>;
}

const dictionaries: Dictionary = {
  en: () => import("@/lang/en.json").then((module) => module.default),
  es: () => import("@/lang/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
