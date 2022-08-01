import Styles from "./fontAwesomeDiv.module.scss";

type FontAwesomeDivProps = {
   fontAwesomeIcon: any;
   texte: string;
};

export default function FontAwesomeDiv({ fontAwesomeIcon, texte }: FontAwesomeDivProps) {
   return (
      <div className={Styles.fontAwesomeDiv}>
         <div className={Styles.iconDiv}>{fontAwesomeIcon}</div>
         <div className={Styles.texteDiv}>{texte}</div>
      </div>
   );
}
