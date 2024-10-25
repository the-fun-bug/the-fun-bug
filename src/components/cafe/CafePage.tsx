import React from 'react';
import dynamic from 'next/dynamic';
import CafeHeader from './CafeHeader';
import CafeMenu from './CafeMenu';

const RainbowSection = dynamic(() => import('../common/RainbowSection'), {
  ssr: false,
});

export default function CafePage() {
  return (
    <>
      <CafeHeader />
      <CafeMenu />
      <RainbowSection
        title="Did You Know?"
        description="Our full menu is available for all private events! Reserve your spot
            now and don’t miss out on all the fun."
        buttonText="Book Private Event"
        buttonLink="/parties"
        buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
      />
    </>
  );
}
