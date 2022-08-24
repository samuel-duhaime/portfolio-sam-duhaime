import Styles from "./liste.module.scss";

type ListeProps = {
   liArray: {
      text: string;
      id: number;
   }[];
   Tag?: "ul" | "ol";
   type?: "1" | "A";
   checkListe?: boolean;
};

export default function Liste({ liArray, Tag = "ul", type, checkListe = false }: ListeProps) {
   return (
      <div className={Styles.liste}>
         <Tag type={type}>
            {liArray.map(({ text, id }) => (
               <li
                  key={id}
                  className={checkListe ? Styles.checkListe : ""}
               >
                  {text}
               </li>
            ))}
         </Tag>
      </div>
   );
}
