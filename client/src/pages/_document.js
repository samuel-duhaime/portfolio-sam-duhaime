import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

// Configuration de toutes les pages
export default function Document() {
   return (
      <Html lang="fr">
         <Head>
            {/* Google Fonts */}
            <link
               href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
               rel="stylesheet"
            />

            {/* Favicon icône */}
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/assets/images/favicons/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/assets/images/favicons/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/assets/images/favicons/favicon-16x16.png"
            />
            <link
               rel="manifest"
               href="/assets/images/favicons/site.webmanifest"
            />
            <link
               rel="mask-icon"
               href="/safari-pinned-tab.svg"
               color="#5bbad5"
            />

            {/* Couleur du navigateur */}
            <meta
               name="theme-color"
               content="#dc143c"
            />

            {/* TODO: Image et website */}
            <meta
               property="og:image"
               content="https://ecolio.ca/assets/images/logo/ecolio-meta.png"
            />
            <meta
               property="og:image:width"
               content="1200"
            />
            <meta
               property="og:image:height"
               content="630"
            />
            <meta
               property="og:type"
               content="website"
            />
            <meta
               property="og:url"
               content="https://samduhaime.com"
            />

            {/* TODO: Google Tag Manager */}
         </Head>
         <body>
            {/* Google Tag Manager lorsque sans script */}
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
