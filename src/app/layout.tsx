/* eslint-disable @typescript-eslint/no-unused-vars */
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import "./globals.css";
import { StructuredData } from './components/StructuredData';
import Header from './components/header/Header';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID ?? ""; 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Feed It Games",
  description: "Feed It Games is a website that gathers gaming news from top sources, creating a customizable feed for users to follow the news and topics that matter most.",
  openGraph: {
    title: "Backlog Gamers | Home",
    description: "Feed It Games is a website that gathers gaming news from top sources, creating a customizable feed for users to follow the news and topics that matter most.",
    url: 'http://feeditgames.com/',
    siteName: 'Feed It Games',
    locale: 'en_US',
    type: 'website',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StructuredData />
      <body className={`${roboto.className}`}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
    </html>
  );
}
