import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import VisitUs from '@/components/common/VisitUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | The Fun Bug, Play Studio & Parties',
  description:
    'Contact The Fun Bug and learn where to visit us, our hours for open play & private events and how to stay up to date with our latest news',
};

export default function ContactPage() {
  return (
    <GlobalLayout>
      <div className="py-[0.5rem]">
        <VisitUs />
      </div>
    </GlobalLayout>
  );
}
