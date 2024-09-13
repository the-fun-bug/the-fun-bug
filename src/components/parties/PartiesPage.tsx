import React from 'react';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import PartyHours from './PartyHours';
import BookEvent from './BookEvent';

export default function PartiesPage() {
  return (
    <>
      <PartiesHeader />
      <PartyPackage />
      <EnhanceYourEvent />
      <PartyHours />
      <BookEvent />
    </>
  );
}
