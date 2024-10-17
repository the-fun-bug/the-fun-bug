// src/components/Banner.tsx

import React from 'react';
import Link from 'next/link';

type BannerProps = {
  text: string;
};

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <div className="bg-soft-pink text-center text-black py-2 px-4">
      <p>
        {text} Visit our{' '}
        <Link href="/news" className="underline hover:text-blue-600">
          News
        </Link>{' '}
        page for the latest updates!
      </p>
    </div>
  );
};

export default Banner;
