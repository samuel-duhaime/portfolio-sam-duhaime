import { useContext } from "react";
import { AppContext } from "src/hooks/useContext/AppContext";
import Heading from "../../tags/heading/Heading";
import Liste from "../../conteneurs/liste/Liste";
import CodeConteneur from "../../conteneurs/codeConteneur/CodeConteneur";
import ImageSelectionnee from "../../conteneurs/imageSelectionnee/ImageSelectionnee";
import Styles from "./cv.module.scss";

export default function CV() {
   const { langue } = useContext(AppContext);
   return (
      <div className={Styles.cv}>
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
                  <div className={Styles.descriptions}>
                     {/* Écolio */}
                     <div className={Styles.description}>
                        <div className={Styles.descriptionTitre}>
                           <div>
                              <strong>Écolio | Fondateur et CEO</strong>
                           </div>
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
                                    text: "Programmer de manière autodidacte une application web avec React, NextJs, Sass, TypeScript, NodeJs et Figma.",
                                    id: 2,
                                 },
                                 {
                                    text: "Recevoir une subvention de 25 000$ de l'École des entrepreneurs du Québec.",
                                    id: 3,
                                 },
                                 {
                                    text: "Écrire le plan d'affaires avec une mention d'excellence.",
                                    id: 4,
                                 },
                                 {
                                    text: "Présenter une conférence sur l'entrepreneuriat devant le CJE (Carrefour jeunesse-emploi Ahuntsic).",
                                    id: 5,
                                 },
                              ]}
                           />
                        </div>
                     </div>

                     {/* Éducation physique */}
                     <div className={Styles.description}>
                        <div className={Styles.descriptionTitre}>
                           <div>
                              <strong>CSSDM | Enseignant en éducation physique</strong>
                           </div>
                           <div>Hiver 2021</div>
                        </div>
                        <div>
                           <Liste
                              Tag="ul"
                              liArray={[
                                 {
                                    text: "Organiser un projet d'apprentissage du vélo avec Vélo Québec.",
                                    id: 1,
                                 },
                                 {
                                    text: "Enseigner l'éducation physique aux élèves de la deuxième à la sixième année du primaire.",
                                    id: 2,
                                 },
                                 {
                                    text: "Co-enseigner plusieurs groupes avec une autre enseignante en éducation physique.",
                                    id: 3,
                                 },
                              ]}
                           />
                        </div>
                     </div>

                     {/* Québec Sans Frontières */}
                     <div className={Styles.description}>
                        <div className={Styles.descriptionTitre}>
                           <div>
                              <strong>Québec Sans Frontières | Responsable d'équipe</strong>
                           </div>
                           <div>Hiver 2019 - Automne 2019</div>
                        </div>
                        <div>
                           <Liste
                              Tag="ul"
                              liArray={[
                                 {
                                    text: "Superviser une équipe de sept stagiaires pendant 3 mois en Bolivie afin de réaliser un projet de participation citoyenne.",
                                    id: 1,
                                 },
                                 {
                                    text: "Planifier et animer une formation prédépart d`une vingtaine d`heures pour les participants stagiaires.",
                                    id: 2,
                                 },
                                 {
                                    text: "Élaborer le cadre logique et l`échéancier du projet en collaboration avec les partenaires boliviens et canadiens.",
                                    id: 3,
                                 },
                                 {
                                    text: "Concevoir et animer une dizaine d`ateliers et réaliser 4 courts métrages avec la collaboration d`un comité de jeunes Boliviens.",
                                    id: 4,
                                 },
                                 {
                                    text: "Gérer le budget de 15 000 $ du stage.",
                                    id: 5,
                                 },
                              ]}
                           />
                        </div>
                     </div>

                     {/* Éducation physique */}
                     <div className={Styles.description}>
                        <div className={Styles.descriptionTitre}>
                           <div>
                              <strong>École Peter Hall | Enseignant en éducation spécialisée</strong>
                           </div>
                           <div>Automne 2017 - Hiver 2019</div>
                        </div>
                        <div>
                           <Liste
                              Tag="ul"
                              liArray={[
                                 {
                                    text: "Adapter l`enseignement en fonction des besoins individualisés des élèves de 5 à 21 ans ayant un handicap physique et mental.",
                                    id: 1,
                                 },
                                 {
                                    text: "Développer les élèves en collaborant avec les parents et l'équipe-école.",
                                    id: 2,
                                 },
                                 {
                                    text: "Organiser des évènements au comité social, au club de lecture et au comité d`Halloween.",
                                    id: 3,
                                 },
                                 {
                                    text: "Élaborer les objectifs, les plans d`interventions et les profils éducatifs personnalisés des élèves.",
                                    id: 4,
                                 },
                              ]}
                           />
                        </div>
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
                  <div className={Styles.descriptions}>
                     {/* HEC */}
                     <div className={Styles.description}>
                        <div className={Styles.descriptionTitre}>
                           <div>
                              <strong>
                                 HEC Montréal | Attestation d'études en conception de projets entrepreneuriaux
                              </strong>
                           </div>
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
                     </div>

                     {/* Université Laval */}
                     <div className={Styles.description}>
                        <div className={Styles.descriptionTitre}>
                           <div>
                              <strong>
                                 Université Laval | Baccalauréat en enseignement de l'éducation physique et à la santé
                              </strong>
                           </div>
                           <div>2016 - 2020</div>
                        </div>
                        <div>
                           <Liste
                              Tag="ul"
                              liArray={[
                                 {
                                    text: "Organiser la course à relais de Québec à Montréal du Grand défi Pierre Lavoie de l'Université Laval en recoltant plus de 6 000$.",
                                    id: 1,
                                 },
                              ]}
                           />
                        </div>
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
                  <ImageSelectionnee />
               </div>
            </div>
         </div>
      </div>
   );
}
