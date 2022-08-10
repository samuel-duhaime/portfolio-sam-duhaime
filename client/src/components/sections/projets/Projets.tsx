import { useContext } from "react";
import { AppContext } from "src/hooks/useContext/AppContext";
import Image from "../../vendor/next/Image";
import Heading from "../../tags/heading/Heading";
import Styles from "./projets.module.scss";

export default function Portfolio() {
   const { langue } = useContext(AppContext);
   const data = [
      {
         id: 1,
         title: "Écolio",
         img: "/assets/images/photos/sam-duhaime.png",
      },
      {
         id: 2,
         title: "LocoMotion",
         img: "/assets/images/photos/sam-duhaime.png",
      },
      {
         id: 3,
         title: "Projet personnel",
         img: "/assets/images/photos/sam-duhaime.png",
      },
      {
         id: 4,
         title: "AirBnb clone",
         img: "/assets/images/photos/sam-duhaime.png",
      },
   ];

   return (
      <div className={Styles.projets}>
         <Heading
            Tag="h2"
            text={langue === "fr" ? "Projets" : "Projects"}
            textAlign="center"
         />
         <div className={Styles.ProjetsContainer}>
            {data.map((data: { id: number; img: string; title: string }) => (
               <div
                  className={Styles.projet}
                  key={data.id}
               >
                  <Image
                     src={data.img}
                     alt=""
                     height="200px"
                     width="200px"
                  />
                  <h3>{data.title}</h3>
               </div>
            ))}
         </div>
      </div>
   );
}
