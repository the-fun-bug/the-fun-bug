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
      className="font-bold md:hover:bg-soft-blue border-b-[1px] border-worm-blue md:border-none md:rounded-lg px-[1.25rem] py-[0.75rem]"
    >
      {linkName}
    </Link>
  );
}
