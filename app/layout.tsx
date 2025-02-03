import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from '@vercel/analytics/next'


const leagueSpartan = League_Spartan({ 
  subsets: ["latin"],
  weight: ["100", '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-leagueSpartan'
 });

export const metadata: Metadata = {
  title: "isaac",
  description: "a portfolio of isaac semanu",
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  userScalable: false,

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={leagueSpartan.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>

        <Analytics />
        
      </body>
    </html>
  );
}

