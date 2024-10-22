import React from 'react';
import VisitUs from '@/components/common/VisitUs';
import type { Metadata } from 'next';
import getHoursData from '../../../../lib/getHours';

export const metadata: Metadata = {
  title: 'The Fun Bug - Contact Us | Get in Touch',
  description:
    'Contact The Fun Bug in New Braunfels for more information about our indoor play studio, open play pricing, memberships, and private event rentals.',
};

export default function ContactPage() {
  const hours = getHoursData();

  return (
    <div className="py-[0.5rem]">
      <VisitUs hours={hours} />
    </div>
  );
}
