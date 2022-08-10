import { useState } from "react";
import ReactModal from "react-modal";
import FontAwesomeIcon from "../fontAwesome/fontAwesomeIcon/FontAwesomeIcon";
import Image from "../next/Image";
import Styles from "./modal.module.scss";

export default function Modal() {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   function openModal() {
      setIsModalOpen(true);
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = "#f00";
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
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className={Styles.modalContent}
            overlayClassName={Styles.modalOverlay}
            // contentLabel="Example Modal"
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

            <div className={Styles.robotMessage}>Bonjour, je suis le robot de Sam</div>
            <div className={Styles.robotMessage}>Je suis un bien meilleur communicateur que mon maître</div>
            <div className={Styles.robotMessage}>Comment puis-je vous aider aujourd`hui ?</div>
            <div className={Styles.clientMessage}>Je veux juste vous saluer</div>
            <div className={Styles.clientMessage}>J`aimerais vous offrir un emploi</div>
            <div className={Styles.clientMessage}>J`aimerais discuter d`un projet</div>
            <div className={Styles.robotMessage}>Nous sommes toujours heureux de discuter d'un nouveau projet</div>
            <div className={Styles.robotMessage}>Envoyez la description de votre projet à mon maître</div>
         </ReactModal>
      </>
   );
}
