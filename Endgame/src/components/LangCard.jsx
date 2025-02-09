import { useState } from "react";
import { languages } from "../languages";

export default function LangCard() {

  const langElement = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span className="chip" key={language.name} style={styles}>
        {language.name}
      </span>
    );
  });

  return <>{langElement}</>;
}
