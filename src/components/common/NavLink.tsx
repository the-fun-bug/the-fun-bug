import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  linkName: string;
  link: string;
};

export default function NavLink({ linkName, link }: NavLinkProps) {
  return (
    <Link
      href={link}
      className="font-bold hover:bg-soft-blue rounded-lg px-[1.25rem] py-[0.75rem]"
    >
      {linkName}
    </Link>
  );
}
