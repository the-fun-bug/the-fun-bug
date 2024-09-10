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
      <div className="grid grid-cols-1 md:grid-cols-3 w-full py-[2rem] px-[1rem] gap-[2rem] md:gap-[1rem] max-w-[1000px] mx-auto">
        <div className="flex justify-center md:justify-start items-center">
          <Image
            src={logo}
            alt="The Fun Bug, Play Studio & Parties Logo"
            className="max-w-[275px] w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
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
                className="w-[40px] h-[40px] hover:scale-105 transition-all duration-75"
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                src={instaIcon}
                alt="instagram icon"
                width={80}
                height={80}
                className="w-[40px] h-[40px] hover:scale-105 transition-all duration-75"
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                src={ticktokIcon}
                alt="ticktok icon"
                width={80}
                height={80}
                className="w-[40px] h-[40px] hover:scale-105 transition-all duration-75"
              />
            </Link>
          </div>
          <h2 className="font-bold text-xl text-center max-w-[240px]">
            Let Us Take Care of Your Next Party!
          </h2>
          <ButtonLink
            buttonText="Reserve Now"
            buttonLink="/parties"
            buttonClass="bg-soft-pink hover:bg-dark-pink hover:text-white"
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
            Made with <span className="dark:hidden">&#128420;</span>
            <span className=" hidden dark:block">&#x1F90D;</span> by{' '}
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
