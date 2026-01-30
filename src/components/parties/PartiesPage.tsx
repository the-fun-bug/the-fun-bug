import React from 'react';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import Policies from './Policies';
// import MonthlyCalendar from '../common/MonthlyCalendar';
import { Hours, PartyPageData, Photo } from '@/types/types';
import PhotoCarousel from '../home/PhotoCarousel';

export default function PartiesPage({
  hours,
  partyData,
  carouselPhotos,
}: {
  hours: Hours;
  partyData: PartyPageData;
  carouselPhotos: Photo[];
}) {
  return (
    <>
      <PartiesHeader />
      <PartyPackage hours={hours} partyData={partyData} />
      <section>
        <h1 className="font-nickainley pb-[1rem] text-center">Parties at The Fun Bug</h1>
        <PhotoCarousel images={carouselPhotos} />
      </section>
      <EnhanceYourEvent />
      {/* <MonthlyCalendar /> */}
      <Policies />
    </>
  );
}
