import type { Metadata } from "next";
import { META_TITLE, META_DESCRIPTION, META_KEYWORDS, PERSON_NAME, OG_IMAGE_URL } from "../constants/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  icons: {
    icon: '/ag_black.svg',
  },
  authors: [{ name: PERSON_NAME }],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://portfolio.adityaghorpade.in",
    siteName: "Aditya Ghorpade Portfolio",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-full flex flex-col">{children}</body>
    </html>
  );
}
