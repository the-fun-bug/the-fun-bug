import React from 'react';
import GalleryPage from '@/components/gallery/GalleryPage';
import getAllGalleryImages from '../../../../lib/getGalleryData';

export async function generateMetadata() {
  return {
    title: 'Gallery | Givher',
    description:
      'Discover our gallery of past events organized for 501(c)(3), 501(c)(4), PACs, candidates, and ballot measures, highlighting our expertise in creating impactful, mission-driven experiences for our clients.',
    openGraph: {
      title: 'Gallery | Givher',
      description:
        'Discover our gallery of past events organized for 501(c)(3), 501(c)(4), PACs, candidates, and ballot measures, highlighting our expertise in creating impactful, mission-driven experiences for our clients.',
      url: '/gallery',
      siteName: 'Givher',
      type: 'website',
      images: [
        {
          url: 'https://www.givher.com/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Givher Banner',
        },
      ],
    },
  };
}

export default async function Gallery() {
  const galleryData = await getAllGalleryImages();

  return <GalleryPage galleryData={galleryData} />;
}
