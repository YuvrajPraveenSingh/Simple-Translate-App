import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [Language, setLanguage] = useState("es");
  const [Text, setText] = useState("");

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={Language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={Text} language={Language} />
    </div>
  );
}
