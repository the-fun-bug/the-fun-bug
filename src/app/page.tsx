import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import Image from 'next/image';
import funBugLogo from './The Fun Bug Logo - LARGE.png';

export default function Home() {
  return (
    <GlobalLayout>
      <main className="bg-white gap-[2rem] flex flex-col justify-center items-center h-screen p-[1rem]">
        <h1 className="font-nickainley text-center">Coming Soon...</h1>
        <Image
          src={funBugLogo}
          alt="The Fun Bug, Play Studio and Parties"
          className="pointer-events-none w-full max-w-[500px]"
          height={682}
          width={970}
        />
      </main>
    </GlobalLayout>
  );
}
