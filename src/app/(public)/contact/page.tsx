import React from 'react';
import VisitUs from '@/components/common/VisitUs';
import type { Metadata } from 'next';
import getHoursData from '../../../../lib/getHours';

export const metadata: Metadata = {
  title: 'Contact | The Fun Bug, Play Studio & Parties',
  description:
    'Contact The Fun Bug and learn where to visit us, our hours for open play & private events and how to stay up to date with our latest news',
};

export default function ContactPage() {
  const hours = getHoursData();

  return (
    <div className="py-[0.5rem]">
      <VisitUs hours={hours} />
    </div>
  );
}
