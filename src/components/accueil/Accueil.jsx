import { useEffect, useRef } from "react";
import { init } from "ityped"; // Créer un script de texte
import Styles from "./accueil.module.scss";

export default function Accueil() {
   const textRef = useRef();

   useEffect(() => {
      init(textRef.current, {
         showCursor: true,
         backDelay: 1500,
         backspeed: 60,
         strings: ["Developer", "Designer", "Entrepreneur"],
      });
   }, []);

   return (
      <div
         className={Styles.intro}
         id="intro"
      >
         <div className={Styles.left}>
            <div className={Styles.imgContainer}>
               <img
                  src="assets/man.png"
                  alt=""
               />
            </div>
         </div>
         <div className={Styles.right}>
            <div className={Styles.wrapper}>
               <h2>Welcome, I'm</h2>
               <h1>Sam Duhaime</h1>
               <h3>
                  Freelance <span ref={textRef}></span>
               </h3>
            </div>
            <a href="#portfolio">
               <img
                  src="assets/down.png"
                  alt=""
               ></img>
            </a>
         </div>
      </div>
   );
}
