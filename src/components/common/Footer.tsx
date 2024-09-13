import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './ButtonLink';
import logo from './img/logo-nav.png';
import fbIcon from './img/facebook.png';
import instaIcon from './img/instagram.png';
import ticktokIcon from './img/ticktok.png';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div
        className="h-[2px] w-full"
        style={{
          background:
            'linear-gradient(to left, #FDD7EC 0%, #FECDA1 33%, #FBFEC1 66%, #D9EBDD 100%',
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 w-full py-[2rem] md:px-[1rem] gap-[2rem] md:gap-[1rem] max-w-[1000px] mx-auto">
        <div className="flex justify-center md:justify-start items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="The Fun Bug, Play Studio & Parties Logo"
              className="max-w-[275px] w-full"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex gap-[0.5rem] mb-[1rem]">
            <Link
              href="https://www.facebook.com/groups/824992593033982"
              target="_blank"
            >
              <Image
                src={fbIcon}
                alt="facebook icon"
                width={80}
                height={80}
                className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                src={instaIcon}
                alt="instagram icon"
                width={80}
                height={80}
                className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                src={ticktokIcon}
                alt="ticktok icon"
                width={80}
                height={80}
                className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
              />
            </Link>
          </div>
          <h2 className="text-center max-w-[240px]">
            Let Us Take Care of Your Next Party!
          </h2>
          <ButtonLink
            buttonText="Reserve Now"
            buttonLink="/parties#reserve"
            buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
          />
        </div>

        <div className="flex flex-col justify-between h-full items-center md:items-end gap-[2rem]">
          <div className="flex gap-[3rem]">
            <div className="flex flex-col gap-[1rem]">
              <Link href="/about">About</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/parties">Parties</Link>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <Link href="/cafe">Cafe</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="text-xs mb-[1rem] text-right flex md:justify-end whitespace-nowrap gap-[5px]">
            Made with &#128420; by{' '}
            <Link
              href="https://leighdahlin.com/"
              className="underline"
              target="_blank"
            >
              Leigh Dahlin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
