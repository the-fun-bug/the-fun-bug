import React from 'react';
import '../globals.css';

import { quicksand } from '../fonts';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://thefunbug.com'),
  title: {
    default: 'The Fun Bug, Play Studio & Parties',
    template: '%s | The Fun Bug, Play Studio & Parties',
  },
  description:
    'Welcome to The Fun Bug, where playtime meets relaxation for both kids and parents!',

  openGraph: {
    type: 'website',
    siteName: 'The Fun Bug',
    title: 'The Fun Bug, Play Studio & Parties',
    description:
      'Welcome to The Fun Bug, where playtime meets relaxation for both kids and parents!',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'The Fun Bug, Play Studio & Parties',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Fun Bug, Play Studio & Parties',
    description:
      'Welcome to The Fun Bug, where playtime meets relaxation for both kids and parents!',
    images: ['/opengraph-image.png'],
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    shortcut: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className={quicksand.className}>
          <div
            className={`flex flex-col justify-between min-h-screen bg-white`}
          >
            <Navbar />
            <main className="min-h-[calc(100vh-291px)] w-full flex items-center justify-center">
              <div className="flex flex-col justify-center w-full max-w-[1200px] text-black">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
