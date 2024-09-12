import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  buttonText: string;
  buttonLink: string;
  buttonClass: string;
};

export default function ButtonLink({
  buttonText,
  buttonLink,
  buttonClass,
}: ButtonLinkProps) {
  return (
    <Link
      href={buttonLink}
      className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 ${buttonClass}`}
    >
      {buttonText}
    </Link>
  );
}
