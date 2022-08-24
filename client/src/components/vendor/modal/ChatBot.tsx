import { useState } from "react";
import ReactModal from "react-modal";
import FontAwesomeIcon from "../fontAwesome/fontAwesomeIcon/FontAwesomeIcon";
import Image from "../next/Image";
import Styles from "./chatBot.module.scss";

type chatArrayProps = {
   texte: string;
   personne: "client" | "robot";
   action?: "salut" | "emploi" | "projet";
   id: number;
};

export default function ChatBot() {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const [chatArray, setChatArray] = useState<chatArrayProps[]>([
      { texte: "Bonjour, je suis le robot de Sam", personne: "robot", id: 1 },
      { texte: "Je suis un bien meilleur communicateur que mon maître", personne: "robot", id: 2 },
      { texte: "Comment puis-je vous aider aujourd`hui ?", personne: "robot", id: 3 },
      { texte: "Je veux juste vous saluer", personne: "client", action: "salut", id: 4 },
      { texte: "J`aimerais vous offrir un emploi", personne: "client", action: "emploi", id: 5 },
      { texte: "J`aimerais discuter d`un projet", personne: "client", action: "projet", id: 6 },
   ]);

   function openModal() {
      setIsModalOpen(true);
   }

   function closeModal() {
      setIsModalOpen(false);
   }

   return (
      <>
         <button
            className={Styles.robotButton}
            onClick={openModal}
         >
            <FontAwesomeIcon icon={"faRobot"} />
         </button>
         <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className={Styles.modalContent}
            overlayClassName={Styles.modalOverlay}
            contentLabel="Robot de Sam"
            ariaHideApp={false}
         >
            <div className={Styles.topChat}>
               <div className={Styles.circlePhoto}>
                  <Image
                     src="/assets/images/photos/sam-duhaime.png"
                     alt="Samuel Duhaime-Morissette"
                     height="50"
                     width="50"
                  />
               </div>
               <div>
                  <div>
                     <strong>Robot de Sam</strong>
                  </div>
                  <div>Posez-moi une question</div>
               </div>
               <div className={Styles.close}>
                  <FontAwesomeIcon
                     icon={"faTimes"}
                     onClick={closeModal}
                  />
               </div>
            </div>

            <div className={Styles.chatBot}>
               {chatArray.map(({ texte, personne, action, id }) => (
                  <div
                     key={id}
                     className={personne === "client" ? Styles.clientMessage : Styles.robotMessage}
                     onClick={
                        action === "salut"
                           ? () => {
                                setChatArray(
                                   chatArray
                                      .filter(
                                         (el) =>
                                            el.personne === "robot" 
                                      )
                                      .concat(
                                         {
                                            texte: "Bonjour, j'espère que vous aimez mon portfolio",
                                            personne: "robot",
                                            id: chatArray.length + 1,
                                         },
                                         {
                                            texte: "Est-ce que je peux vous aider avec autre chose ?",
                                            personne: "robot",
                                            id: chatArray.length + 2,
                                         },
                                         {
                                            texte: "J`aimerais vous offrir un emploi",
                                            personne: "client",
                                            action: "emploi",
                                            id: chatArray.length + 3,
                                         },
                                         {
                                            texte: "J`aimerais discuter d`un projet",
                                            personne: "client",
                                            action: "projet",
                                            id: chatArray.length + 4,
                                         }
                                      )
                                );
                             }
                           : action === "emploi"
                           ? () => {
                                setChatArray(
                                   chatArray.concat(
                                      {
                                         texte: "Vous voulez engagez un robot ou mon maître ?",
                                         personne: "robot",
                                         id: chatArray.length + 1,
                                      },
                                      {
                                         texte: "Contactez mon maître à sduhaimemorissette@gmail.com",
                                         personne: "robot",
                                         id: chatArray.length + 3,
                                      },
                                      {
                                         texte: "Est-ce que je peux vous aider avec autre chose ?",
                                         personne: "robot",
                                         id: chatArray.length + 4,
                                      },
                                      {
                                         texte: "Je veux juste vous saluer",
                                         personne: "client",
                                         action: "salut",
                                         id: chatArray.length + 5,
                                      },
                                      {
                                         texte: "J`aimerais discuter d`un projet",
                                         personne: "client",
                                         action: "projet",
                                         id: chatArray.length + 6,
                                      }
                                   )
                                );
                             }
                           : action === "projet"
                           ? () => {
                                setChatArray(
                                   chatArray.concat(
                                      {
                                         texte: "Génial! Je suis très heureux de lire ceci.",
                                         personne: "robot",
                                         id: chatArray.length + 1,
                                      },
                                      {
                                         texte: "Envoyez-moi la description de votre projet et je vous répondrais dès que possible",
                                         personne: "robot",
                                         id: chatArray.length + 3,
                                      },
                                      {
                                         texte: "Est-ce que je peux vous aider avec autre chose ?",
                                         personne: "robot",
                                         id: chatArray.length + 4,
                                      },
                                      {
                                         texte: "Je veux juste vous saluer",
                                         personne: "client",
                                         action: "salut",
                                         id: chatArray.length + 5,
                                      },
                                      {
                                         texte: "J`aimerais vous offrir un emploi",
                                         personne: "client",
                                         action: "emploi",
                                         id: chatArray.length + 6,
                                      }
                                   )
                                );
                             }
                           : () => {}
                     }
                  >
                     {texte}
                  </div>
               ))}
            </div>
         </ReactModal>
      </>
   );
}
