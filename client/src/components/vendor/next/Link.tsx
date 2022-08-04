import { ReactNode } from "react";
import LinkNext from "next/link";
import { UrlObject } from "url";

type LinkProps = {
   children: ReactNode;
   href: string | UrlObject;
   ariaLabel?: string;
   target?: "_blank";
   onClick?: () => void;
};

export default function Link({ children, href, ariaLabel, target, onClick }: LinkProps) {
   return (
      <LinkNext href={href}>
         <a aria-label={ariaLabel} onClick={onClick} target={target}>
            {children}
         </a>
      </LinkNext>
   );
}
