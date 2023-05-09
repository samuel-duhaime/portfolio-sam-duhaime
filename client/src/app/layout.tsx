import { ReactNode, StrictMode } from "react";
import type { Metadata } from "next";
import { Mr_Dafoe, Bitter, Open_Sans } from "next/font/google";
import { AppProvider } from "src/components/conteneurs/context/AppContext";
import "../styles/global.scss";

// TODO: Complete the metadata
// Metadata of the Application
export const metadata: Metadata = {
  title: "Samuel Duhaime | Web developer",
  description: "Portfolio of the Full Stack Web Developer Samuel Duhaime-Morissette from Montreal, Quebec.",
  themeColor: "#dc143c",
  viewport: "width=device-width, initial-scale=1",
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/assets/images/favicons/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/assets/images/favicons/favicon-16x16.png" },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/assets/images/favicons/apple-touch-icon.png",
    },
  ],
  manifest: "/assets/images/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    // url: "https://samuelduhaime.com",
    title: "Samuel Duhaime | Web developer",
    description: "Portfolio of the Full Stack Web Developer Samuel Duhaime-Morissette from Montreal, Quebec.",
    siteName: "Samuel Duhaime",
    // images: [
    //   {
    //     url: "/assets/images/logo/ecolio-meta.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
};

// TopNav title Font family
const mr_dafoe = Mr_Dafoe({
  subsets: ["latin"],
  variable: "--titleFontFamily",
  display: "swap",
  weight: "400",
});

// First Font family
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--firstFontFamily",
  display: "swap",
  weight: ["400", "700"],
});

// Second Font family
const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--secondFontFamily",
  display: "swap",
  weight: ["400", "700"],
});

// Root layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StrictMode>
      <AppProvider>
        <html
          lang="en"
          className={`${mr_dafoe.variable} ${bitter.variable} ${open_sans.variable}`} // Use the variables globaly
        >
          <body>{children}</body>
        </html>
      </AppProvider>
    </StrictMode>
  );
}
