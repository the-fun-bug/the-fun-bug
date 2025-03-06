import React from 'react';
import CafePage from '@/components/cafe/CafePage';
import type { Metadata } from 'next';
import getMenuData from '../../../../lib/getMenuData';

export const metadata: Metadata = {
  title: 'The Fun Bug Cafe | Relax with Drinks & Free Wi-Fi',
  description:
    'Unwind at The Fun Bug Cafe in New Braunfels, where parents can enjoy coffee, refreshments, and free Wi-Fi while their kids play in a fun, safe environment in our indoor playground.',
};

export default function ContactPage() {
  const menuData = getMenuData();

  return <CafePage menuData={menuData} />;
}
