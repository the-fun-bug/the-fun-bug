import React from 'react';
import '../globals.css';
import getBannerText from '../../../lib/getBannerText';

import { quicksand } from '../fonts';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'The Fun Bug, Play Studio & Parties',
  description:
    'Welcome to The Fun Bug, where playtime meets relaxation for both kids and parents!',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon.ico',
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
  const banner = getBannerText();

  return (
    <html lang="en">
      <body className="bg-white">
        <div className={quicksand.className}>
          <div
            className={`flex flex-col justify-between min-h-screen bg-white`}
          >
            <Navbar bannerText={banner.websiteBanner} />
            <main className="block min-h-[100vh - 291px] w-full flex items-center justify-center">
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
