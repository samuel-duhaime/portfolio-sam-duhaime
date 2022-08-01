import Styles from "./liste.module.scss";

type ImageTexteProps = {
   liArray: {
      text: string;
      id: number;
   }[];
   Tag?: "ul" | "ol";
   type?: "1" | "A";
};

export default function Ul({ liArray, Tag = "ul", type }: ImageTexteProps) {
   return (
      <div className={Styles.liste}>
         <Tag type={type}>
            {liArray.map(({ text, id }) => (
               <li key={id}>{text}</li>
            ))}
         </Tag>
      </div>
   );
}
