import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://alchemyfy.com"),
  title: "Alchemyfy — AI for Experienced Business Owners",
  description:
    "Alchemyfy helps experienced business owners turn their expertise into AI leverage. Education, consulting, and systems — without the hype.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Alchemyfy — AI for Experienced Business Owners",
    description:
      "Alchemyfy helps experienced business owners turn their expertise into AI leverage. Education, consulting, and systems — without the hype.",
    url: "https://alchemyfy.com",
    siteName: "Alchemyfy",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alchemyfy — AI for Experienced Business Owners",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alchemyfy — AI for Experienced Business Owners",
    description:
      "Alchemyfy helps experienced business owners turn their expertise into AI leverage. Education, consulting, and systems — without the hype.",
    images: ["/images/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
