import { StrictMode } from "react";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
   return (
      <StrictMode>
         <Component {...pageProps} />
      </StrictMode>
   );
}