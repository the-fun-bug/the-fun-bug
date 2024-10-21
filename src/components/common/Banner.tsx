import React, { forwardRef } from 'react';
import Link from 'next/link';

type BannerProps = {
  text: string;
};

// Use forwardRef to pass the ref down to the div element
const Banner = forwardRef<HTMLDivElement, BannerProps>(({ text }, ref) => {
  return (
    <div ref={ref} className="bg-soft-pink text-center text-black py-2 px-4">
      <p>
        {text} Visit our{' '}
        <Link href="/news" className="underline hover:text-blue-600">
          News
        </Link>{' '}
        page for the latest updates!
      </p>
    </div>
  );
});

// Set a display name for easier debugging (optional)
Banner.displayName = 'Banner';

export default Banner;
