import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const ChangeLanguage = () => {
  const [language, setLanguage] = useState("sr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div>
        <h2>Jezik: {language}</h2>
        <Greeting />
        <LanguageButton />
      </div>
    </LanguageContext.Provider>
  );
};

const Greeting = () => {
  const { language } = useContext(LanguageContext);
  return <h2>{language == "sr" ? "Zdravo" : "Hello"}</h2>;
};

const LanguageButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <button
      onClick={() => {
        setLanguage(language == "sr" ? "en" : "sr");
      }}
    >
      Promeni Jezik
    </button>
  );
};
export default ChangeLanguage;
