import { useState } from "react";
import Styles from "./contact.module.scss";

export default function Contact() {
   const [message, setMessage] = useState(false);

   const handleSubmit = (e: any) => {
      e.preventDefault();
      setMessage(true);
   };
   return (
      <div
         className={Styles.contact}
         id="contact"
      >
         <div className={Styles.left}>
            <img
               src="assets/shake.svg"
               alt=""
            />
         </div>
         <div className={Styles.right}>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  placeholder="Email"
               />
               <textarea placeholder="Message"></textarea>
               <button type="submit">Send</button>
               {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
         </div>
      </div>
   );
}
