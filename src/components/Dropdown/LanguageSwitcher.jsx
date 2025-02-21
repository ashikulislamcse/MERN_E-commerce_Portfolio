import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-gray-400 hover:text-gray-600 rounded-md focus:outline-none cursor-pointer"
      >
        {language} ▼
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg">
          <button
            onClick={() => handleLanguageChange("English")}
            className="block w-full px-4 py-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("বাংলা")}
            className="block w-full px-4 py-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            বাংলা
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
