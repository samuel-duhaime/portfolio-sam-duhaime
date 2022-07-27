import HeadNext from "next/head";

type TypeProps = {
   title: string;
   description: string;
};

export default function Head({ title, description }: TypeProps) {
   return (
      <HeadNext>
         {/* Meta */}
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta name="theme-color" content="#24305e" />
         <meta name="description" content={description} />
         <meta property="og:title" content="Enseigner tout simplement." />
         <meta
            property="og:description"
            content="Trouvez, téléchargez, partagez et vendez du matériel
                  pédagogique francophone avec Écolio."
         />
         <meta property="og:image" content="https://ecolio.ca/assets/images/logo/ecolio-meta.png" />
         <meta property="og:image:width" content="1200" />
         <meta property="og:image:height" content="630" />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://ecolio.ca" />
         <meta property="og:locale" content="fr_CA" />

         {/* Titre */}
         <title>{title ? "Écolio | " + title : "Écolio"} </title>
      </HeadNext>
   );
}
