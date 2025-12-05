import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mo Fitness - Coming Soon | Une Nouvelle Ère Commence",
  description: "La mentalité du loup. Le commencement, c'est maintenant. Rejoins la meute Mo Fitness et transforme ton corps et ton mental avec un coaching d'élite.",
  keywords: ["fitness", "coaching", "transformation", "musculation", "sport", "Mo Fitness", "wolf mentality"],
  authors: [{ name: "Mo Fitness" }],
  creator: "Mo Fitness",
  publisher: "Mo Fitness",
  metadataBase: new URL("https://mofitnessofficial.com"),
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mofitnessofficial.com",
    siteName: "Mo Fitness",
    title: "Mo Fitness - Coming Soon | Une Nouvelle Ère Commence",
    description: "La mentalité du loup. Le commencement, c'est maintenant. Rejoins la meute Mo Fitness et transforme ton corps et ton mental avec un coaching d'élite.",
    images: [
      {
        url: "/mofitness-small.png",
        width: 1200,
        height: 630,
        alt: "Mo Fitness Logo - Wolf Mentality",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mo Fitness - Coming Soon | Une Nouvelle Ère Commence",
    description: "La mentalité du loup. Le commencement, c'est maintenant. Rejoins la meute Mo Fitness et transforme ton corps et ton mental.",
    images: ["/mofitness-small.png"],
    creator: "@mofitness",
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons
  icons: {
    icon: "/mofitness-small.png",
    apple: "/mofitness-small.png",
  },
  
  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
