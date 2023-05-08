import type { AppProps } from "next/app";
import { StrictMode } from "react";
import ContextConteneur from "src/components/conteneurs/context/ContextConteneur";
import "../styles/global.scss";

// TODO: Delete when finishing migrating app folder
export default function App({ Component, pageProps }: AppProps) {
   return (
      <StrictMode>
         {/* Context conteneur pour les thèmes et les langues */}
         <ContextConteneur>
            <Component {...pageProps} />
         </ContextConteneur>
      </StrictMode>
   );
}
