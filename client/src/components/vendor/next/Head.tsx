import HeadNext from "next/head";

type TypeProps = {
   title?: string;
   description: string;
};

export default function Head({ title, description }: TypeProps) {
   return (
      <HeadNext>
         {/* Meta */}
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
         />
         <meta
            name="theme-color"
            content="#15023a"
         />
         <meta
            name="description"
            content={description}
         />
         <meta
            property="og:title"
            content="Sam Duhaime | Développeur web"
         />
         <meta
            property="og:description"
            content="Portfolio de Sam Duhaime, développeur web à Montréal, Québec, Canada. Réalisez une application web."
         />
         {/* TODO: Modifier */}
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
         {/* TODO: Modifier */}
         <meta
            property="og:url"
            content="https://samduhaime.com"
         />
         <meta
            property="og:locale"
            content="fr_CA"
         />

         {/* Titre */}
         <title>{title ? title + " | Sam Duhaime" : "Sam Duhaime | Développeur web à Montréal"}</title>
      </HeadNext>
   );
}
