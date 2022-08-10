import HeadNext from "next/head";

type TypeProps = {
   title: string;
   description: string;
};

export default function Head({ title, description }: TypeProps) {
   return (
      <HeadNext>
         {/* Meta */}
         <meta
            name="description"
            content={description}
         />
         <meta
            property="og:title"
            content={title}
         />
         <meta
            property="og:description"
            content={description}
         />

         {/* Viewport */}
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
         />

         {/* TODO: Modifier selon langage sélectionné */}
         <meta
            property="og:locale"
            content="fr_CA"
         />

         {/* Titre */}
         <title>{"Sam Duhaime | " + title}</title>
      </HeadNext>
   );
}
