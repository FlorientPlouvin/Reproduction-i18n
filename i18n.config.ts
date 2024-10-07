import french from "./translations/fr";
import english from "./translations/en";
import china from "./translations/cn.js";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  warnHtmlMessage: false,
  messages: {
    en: {
      ...english,
    },
    fr: {
      ...french,
    },
    cn: {
      ...china,
    },
  },
}));
