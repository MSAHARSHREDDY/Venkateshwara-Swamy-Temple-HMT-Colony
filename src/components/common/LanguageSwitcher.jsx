import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 bg-amber-100 rounded-full px-2 py-1 shadow-inner">
      {[
        { code: "en", label: "EN" },
        { code: "te", label: "తె" },
        { code: "hi", label: "हि" }
      ].map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
            i18n.language === lang.code 
            ? "bg-red-900 text-white" 
            : "text-red-900 hover:bg-amber-200"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}