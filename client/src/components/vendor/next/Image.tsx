import ImageNext from "next/image";

type ImageProps = {
   src: string;
   alt?: string;
   width: number;
   height: number;
   layout?: "fill";
   placeholder?: "empty" | "blur";
   priority?: boolean;
   onClick?: () => void;
};

export default function Image({
   src,
   alt = "",
   width,
   height,
   layout,
   placeholder = "empty",
   priority = false,
   onClick,
}: ImageProps) {
   return (
      <ImageNext
         src={src}
         blurDataURL={placeholder === "blur" ? `/_next/image?url=${src}&w=16&q=1` : ""} // Lien pour le blur image
         alt={alt}
         width={width}
         height={height}
         layout={layout}
         placeholder={placeholder} // "blur" || "empty"
         priority={priority} // true | False
         onClick={onClick}
         //sizes={sizes} //  sizes="(min-width: 1024px) 48px, (min-width: 475px) 32px, 16px"
         //loader={loader}
      />
   );
}
