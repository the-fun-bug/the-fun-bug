import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  buttonText: string;
  buttonLink: string;
  buttonClass: string;
  external?: boolean;
  excludeMargin?: boolean;
};

export default function ButtonLink({
  buttonText,
  buttonLink,
  buttonClass,
  external,
  excludeMargin,
}: ButtonLinkProps) {
  return (
    <Link
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      href={buttonLink}
      className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem]  transition-all duration-300 text-black ${excludeMargin ? '' : 'my-[1rem]'} ${buttonClass}`}
    >
      {buttonText}
    </Link>
  );
}
