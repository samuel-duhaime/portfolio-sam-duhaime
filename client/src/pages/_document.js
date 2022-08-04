import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

// Configuration de toutes les pages
export default function Document() {
   return (
      <Html lang="fr">
         <Head>
            {/* Google Fonts */}
            {/* TODO : Modifier  */}
            <link
               href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Quicksand:wght@400;600;700&display=swap"
               rel="stylesheet"
            />

            {/* Favicon icône */}
            {/* TODO : Modifier  */}
            <link
               rel="icon"
               type="image/x-icon"
               href="/assets/images/logo/favicon.ico"
            />

            {/* Google Tag Manager */}
         </Head>
         <body>
            {/* Google Tag Manager lorsque sans script */}
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
