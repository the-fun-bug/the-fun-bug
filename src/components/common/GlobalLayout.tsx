import React from 'react';
import { quicksand } from '@/app/fonts';

import Navbar from './Navbar';
import Footer from './Footer';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={quicksand.className}>
        <div className={`flex flex-col justify-between min-h-screen bg-white`}>
          <Navbar />
          <main className="block min-h-[100vh - 291px] w-full flex items-center justify-center">
            <div className="flex flex-col justify-center w-full max-w-[1200px] text-black">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
