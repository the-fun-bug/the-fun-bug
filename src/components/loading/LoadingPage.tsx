import React from 'react';
import Image from 'next/image';
import loadingImg from './img/loading-cloud.png';

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-252px)]">
      <div className="relative">
        <Image
          src={loadingImg}
          alt="pink cloud"
          height={350}
          width={200}
          className="w-[220px] animate-pulse-slow"
        />
        <div className="absolute top-0 left-0 h-[126px] w-[220px] flex items-center justify-center">
          <h1 className="font-nickainley p-0 ml-[1rem] text-[2.5rem]">
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
}
