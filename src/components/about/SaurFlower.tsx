import React from 'react';
import ImageNextToTextSection from '../common/ImageNextToText';
import saurFlowerLogo from './img/saur-flower.png';

export default function SaurFlower() {
  return (
    <ImageNextToTextSection
      imageSrc={saurFlowerLogo}
      alt="The Saur Flower's logo"
      imageSide="right"
      imageClass="w-full max-w-[350px]"
      title="Sweeten Your Day with Saur Flour Cookies"
      paragraph="Indulge in freshly baked delights from our owner’s passion project,
      The Saur Flour. These homemade cookies are crafted with love and the
      finest ingredients. Perfect for any occasion, they’re available for
      special order—just reach out to us directly to place your order."
      buttonText="Order Cookies"
      buttonLink="mailto:thesaurflourbakery@yahoo.com"
      buttonClass="bg-soft-blue/50 hover:bg-soft-blue"
    />
  );
}
