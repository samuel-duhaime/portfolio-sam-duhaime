import { useState } from "react";
import langagesArray from "./data/langagesArray.json";
import htmlArray from "./data/htmlArray.json";
import scssArray from "./data/scssArray.json";
import reactArray from "./data/reactArray.json";
import typescriptArray from "./data/typescriptArray.json";
import nodeArray from "./data/nodeArray.json";
import Styles from "./codeConteneur.module.scss";

type textArrayProps = {
   textId: number;
   text: string;
   color: string;
};

type codeArrayProps = {
   id: number;
   textArray: textArrayProps[];
   margin: string;
};

type langagesArrayProps = {
   id: number;
   text: string;
};

export default function CodeConteneur() {
   const [codeLangage, setCodeLangage] = useState<string>("React");
   let codeArray;

   // Changer le code selon le langage
   switch (codeLangage) {
      case "HTML":
         codeArray = htmlArray;
         break;
      case "SCSS":
         codeArray = scssArray;
         break;
      case "React":
         codeArray = reactArray;
         break;
      case "TypeScript":
         codeArray = typescriptArray;
         break;
      case "Node":
         codeArray = nodeArray;
         break;
      default:
         codeArray = reactArray;
         break;
   }

   return (
      <>
         {/* Langages de codage */}
         <div className={Styles.codeLangages}>
            {langagesArray.map(({ id, text }: langagesArrayProps) => {
               return (
                  <div
                     key={id}
                     className={codeLangage === text ? Styles.active : ""}
                     onClick={() => setCodeLangage(text)}
                  >
                     {text}
                  </div>
               );
            })}
         </div>

         {/* Conteneur du code */}
         <div className={Styles.codeConteneur}>
            {codeArray.map(({ id, textArray, margin }: codeArrayProps) => {
               return (
                  <div key={id}>
                     <span style={{ color: "white", marginRight: "30px" }}>{id}</span>
                     <span style={{ marginLeft: margin }}>
                        {/* Texte du code */}
                        {textArray.map(({ textId, color, text }: textArrayProps) => {
                           return (
                              <span
                                 key={textId}
                                 style={{ color: color }}
                              >
                                 {text}
                              </span>
                           );
                        })}
                     </span>
                  </div>
               );
            })}
         </div>
      </>
   );
}
