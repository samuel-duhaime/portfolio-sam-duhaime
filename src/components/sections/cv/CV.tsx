import { useContext } from "react";
import { AppContext } from "src/hooks/useContext/AppContext";
import Heading from "../../tags/heading/Heading";
import Liste from "../../conteneurs/liste/Liste";
import Styles from "./cv.module.scss";
import CodeConteneur from "../../conteneurs/codeConteneur/CodeConteneur";

export default function CV() {
   const { langue } = useContext(AppContext);
   return (
      <div
         className={Styles.cv}
      >
         <Heading
            Tag="h2"
            text="CV"
            textAlign="center"
         />
         <div className={Styles.sections}>
            <div className={Styles.section}>
               <div className={Styles.left}>
                  <Heading
                     Tag="h3"
                     text="Travail"
                  />
               </div>
               <div className={Styles.right}>
                  <div className={Styles.description}>
                     <div className={Styles.descriptionTitre}>
                        <div>Écolio | Fondateur et CEO</div>
                        <div>Automne 2020 - aujourd'hui</div>
                     </div>
                     <div>
                        <Liste
                           Tag="ul"
                           liArray={[
                              {
                                 text: "Fonder Écolio, une plateforme de matériel pédagogique pour le milieu scolaire francophone.",
                                 id: 1,
                              },
                              {
                                 text: "Programmer toutes les étapes d'une application Web avec React, NodeJs, Sass et Figma.",
                                 id: 2,
                              },
                              {
                                 text: "Recevoir une subvention de l'École des entrepreneurs du Québec pendant un an.",
                                 id: 3,
                              },
                              {
                                 text: "Écrire le plan d'affaires avec une mention d'excellence.",
                                 id: 4,
                              },
                              {
                                 text: "Présenter une conférence sur l'entrepreneuriat devant le Carrefour jeunesse-emploi Ahuntsic.",
                                 id: 5,
                              },
                           ]}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className={Styles.section}>
               <div className={Styles.left}>
                  <Heading
                     Tag="h3"
                     text="Éducation"
                  />
               </div>
               <div className={Styles.right}>
                  <div className={Styles.description}>
                     <div className={Styles.descriptionTitre}>
                        <div>HEC Montréal | Attestation d'études en conception de projets entrepreneuriaux</div>
                        <div>Automne 2020</div>
                     </div>
                     <div>
                        <Liste
                           Tag="ul"
                           liArray={[
                              {
                                 text: "Obtenir une mention d'excellence.",
                                 id: 1,
                              },
                           ]}
                        />
                     </div>
                     <div className={Styles.descriptionTitre}>
                        <div>Université Laval | Baccalauréat en enseignement de l'éducation physique et à la santé</div>
                        <div>2016 - 2020</div>
                     </div>
                     <div>
                        <Liste
                           Tag="ul"
                           liArray={[
                              {
                                 text: "Organiser la course à relais de Québec à Montréal du Grand défi Pierre Lavoie de l'Université Laval pour lequel a été récolté plus de 6000 $.",
                                 id: 1,
                              },
                           ]}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className={Styles.section}>
               <div className={Styles.left}>
                  <Heading
                     Tag="h3"
                     text="Codage"
                  />
               </div>
               <div className={Styles.right}>
                  <CodeConteneur />
               </div>
            </div>
            <div className={Styles.section}>
               <div className={Styles.left}>
                  <Heading
                     Tag="h3"
                     text="Outils"
                  />
               </div>
               <div className={Styles.right}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum itaque iure officia ducimus ut
                  inventore. Veritatis quidem, asperiores eum ipsam officiis voluptas tempore provident ab, qui modi ad?
                  Quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel tempore aliquid impedit
                  voluptatibus eveniet eligendi fuga dolorum veritatis ab, ea itaque nulla ipsa quo dolore. Libero natus
                  atque totam?
               </div>
            </div>
         </div>
      </div>
   );
}
