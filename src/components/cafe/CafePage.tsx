import React from 'react';
import CafeHeader from './CafeHeader';
import CafeMenu from './CafeMenu';
import RainbowSection from '../common/RaindowSection';

export default function CafePage() {
  return (
    <>
      <CafeHeader />
      <CafeMenu />
      <RainbowSection
        title="Did You Know?"
        description="Our full menu is available for all private events! Reserve your spot
            now and don’t miss out on all the fun. Book Private Event"
        buttonText="Book Private Event"
        buttonLink="/parties"
        buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
      />
    </>
  );
}
