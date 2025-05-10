import { languages } from "../languages";
import clsx from "clsx";
export default function LangCard({wrongGussedCounter}) {
return (
  <>
{languages.map((language, index) => {
    const isLanguageLost = index < wrongGussedCounter;
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} key={language.name} style={styles}>
        {language.name}
      </span>
    );
  })
}
 </> 
)
}
