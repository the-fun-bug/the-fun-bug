import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  buttonText: string;
  buttonLink: string;
  buttonClass: string;
  external?: boolean;
};

export default function ButtonLink({
  buttonText,
  buttonLink,
  buttonClass,
  external,
}: ButtonLinkProps) {
  return (
    <Link
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      href={buttonLink}
      className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 text-black ${buttonClass}`}
    >
      {buttonText}
    </Link>
  );
}
