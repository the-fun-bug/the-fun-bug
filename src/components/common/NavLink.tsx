import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  linkName: string;
  link: string;
  isActive?: boolean; // Added isActive prop
  footer?: boolean;
};

export default function NavLink({
  linkName,
  link,
  isActive = false,
  footer = false,
}: NavLinkProps) {
  return (
    <Link
      href={link}
      className={`text-black font-bold ${footer ? 'w-fit ' : 'border-b-[1px] border-worm-blue md:border-none'} md:rounded-lg px-[1.25rem] py-[0.75rem] transition-all duration-300 ease-in-out 
      ${isActive ? 'bg-soft-blue' : ''} 
      md:hover:bg-soft-blue`} // Conditionally apply active styles
    >
      {linkName}
    </Link>
  );
}
