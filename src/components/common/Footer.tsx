import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './ButtonLink';
import logo from './img/logo-nav.png';
import fbIcon from './img/facebook.png';
import instaIcon from './img/instagram.png';
import tiktokIcon from './img/tiktok.png';
import NavLink from './NavLink';

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
      <div className="grid grid-cols-1 md:grid-cols-3 w-full py-[3rem] px-[1rem] gap-[2rem] md:gap-[1.25rem] max-w-[1400px] mx-auto">
        <div className="flex justify-center md:justify-start items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="The Fun Bug, Play Studio & Parties Logo"
              className="max-w-[275px] w-full"
              height={341}
              width={485}
              placeholder="blur"
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
                placeholder="blur"
                className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
              />
            </Link>
            <Link
              href="https://www.instagram.com/thefunbugplaystudio/profilecard/?igsh=c3I0MW41ZHMxNTEx"
              target="_blank"
            >
              <Image
                src={instaIcon}
                alt="instagram icon"
                width={80}
                height={80}
                className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
                placeholder="blur"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@thefunbugplaystudio?_t=8qjMNalXXYs&_r=1"
              target="_blank"
            >
              <Image
                src={tiktokIcon}
                alt="tiktok icon"
                width={80}
                height={80}
                className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
                placeholder="blur"
              />
            </Link>
          </div>
          <h3 className="text-center max-w-[200px] text-black">
            Your Next Party, Made Easy!
          </h3>
          <ButtonLink
            buttonText="Start Planning"
            buttonLink="/parties"
            buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
          />
        </div>

        <div className="flex flex-col justify-between h-full items-center md:items-end gap-[2rem]">
          <div className="flex">
            <div className="flex flex-col">
              <NavLink link="/about" linkName="About" footer={true} />
              <NavLink link="/pricing" linkName="Pricing" footer={true} />
              <NavLink link="/parties" linkName="Parties" footer={true} />
            </div>
            <div className="flex flex-col">
              <NavLink link="/cafe" linkName="Café" footer={true} />
              <NavLink link="/news" linkName="News" footer={true} />
              <NavLink link="/contact" linkName="Contact" footer={true} />
            </div>
          </div>
          <div className="text-xs mb-[1rem] text-right flex md:justify-end whitespace-nowrap gap-[5px] text-black">
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
