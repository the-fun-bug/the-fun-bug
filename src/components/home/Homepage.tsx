import React from 'react';
import HomepageGallery from './Gallery';
import OurStory from './OurStory';
import HowWePlay from './HowWePlay';
import Cafe from './Cafe';
import VisitUs from '../common/VisitUs';

export default function Homepage() {
  return (
    <>
      <HomepageGallery />
      <OurStory />
      <HowWePlay />
      <Cafe />
      <VisitUs />
    </>
  );
}