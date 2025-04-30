import React from 'react';
import VisitUs from '../common/VisitUs';
import { Hours } from '@/types/types';

export default function ContactPage({ hours }: { hours: Hours }) {
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px]">
        <h1 className="text-center font-nickainley pb-[1rem] max-w-[640px]">
          Contact The Fun Bug
        </h1>
        <p className="max-w-[700px] text-center mb-[2rem]">
          Have a question about our play studio, party packages, or café? We’re
          here to help! Reach out using the info below or connect with us on
          social — we’d love to hear from you.
        </p>
        <VisitUs hours={hours} />
      </div>
    </section>
  );
}
