import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  linkName: string;
  link: string;
  isActive?: boolean; // Added isActive prop
};

export default function NavLink({
  linkName,
  link,
  isActive = false,
}: NavLinkProps) {
  return (
    <Link
      href={link}
      className={`font-bold border-b-[1px] border-worm-blue md:border-none md:rounded-lg px-[1.25rem] py-[0.75rem] transition-all duration-300 ease-in-out 
      ${isActive ? 'bg-soft-blue' : ''} 
      md:hover:bg-soft-blue`} // Conditionally apply active styles
    >
      {linkName}
    </Link>
  );
}
