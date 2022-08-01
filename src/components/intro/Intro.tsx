import { useContext } from "react";
import Typewriter from "typewriter-effect";
import { AppContext } from "src/hooks/useContext/AppContext";
import Image from "../vendor/next/Image";
import Styles from "./intro.module.scss";

export default function Intro() {
   const { langue } = useContext(AppContext);

   return (
      <div
         className={Styles.intro}
         id="introduction"
      >
         <div className={Styles.left}>
            <div className={Styles.imgContainer}>
               <Image
                  src="/assets/images/sam-duhaime.png"
                  alt="Samuel Duhaime-Morissette"
                  height="600"
                  width="500"
               />
            </div>
         </div>
         <div className={Styles.right}>
            <div className={Styles.wrapper}>
               <h1>
                  Sam Duhaime <br />
                  {langue === "fr" ? (
                     <>
                        <div className={Styles.red}>Développeur web</div>
                        <Typewriter
                           options={{
                              wrapperClassName: Styles.red,
                              cursorClassName: Styles.cursor,
                              strings: ["Full-stack", "Frontend", "Backend"],
                              autoStart: true,
                              loop: true,
                           }}
                        />
                        <div className={Styles.small}>
                           <br />
                           Montréal, Québec
                        </div>
                     </>
                  ) : (
                     <>
                        <Typewriter
                           options={{
                              wrapperClassName: Styles.red,
                              cursorClassName: Styles.cursor,
                              strings: ["Full-stack", "Frontend", "Backend"],
                              autoStart: true,
                              loop: true,
                           }}
                        />
                        <div className={Styles.red}>Web developer</div>
                        <div className={Styles.small}>
                           <br />
                           Montreal, Quebec
                        </div>
                     </>
                  )}
               </h1>
            </div>
         </div>
      </div>
   );
}
