import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fbIcon from '../common/img/facebook.png';
import instaIcon from '../common/img/instagram.png';
import tiktokIcon from '../common/img/tiktok.png';

export default function NewsHeader() {
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[750px]">
        <h1 className="font-nickainley pb-[1rem]">The Fun Bug News</h1>
        <p>
          Stay in the loop with all the buzz at The Fun Bug! For the most
          up-to-date news and a peek behind the scenes, join us on
          social—there’s always something fun happening.
        </p>
        <div className="flex gap-[2rem] md:gap-[1rem] pt-[2rem] md:pt-[1rem]">
          <Link
            href="https://www.facebook.com/groups/824992593033982"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow us on Facebook"
          >
            <Image
              src={fbIcon}
              alt="facebook icon"
              width={80}
              height={80}
              className="w-[40px] h-[40px] md:w-[30px] md:h-[30px] hover:scale-105 transition-all duration-75"
              placeholder="blur"
            />
          </Link>
          <Link
            href="https://www.instagram.com/thefunbugplaystudio/profilecard/?igsh=c3I0MW41ZHMxNTEx"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow us on Instagram"
          >
            <Image
              src={instaIcon}
              alt="instagram icon"
              width={80}
              height={80}
              className="w-[40px] h-[40px] md:w-[30px] md:h-[30px] hover:scale-105 transition-all duration-75"
              placeholder="blur"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@thefunbugplaystudio?_t=8qjMNalXXYs&_r=1"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow us on TikTok"
          >
            <Image
              src={tiktokIcon}
              alt="tiktok icon"
              width={80}
              height={80}
              className="w-[40px] h-[40px] md:w-[30px] md:h-[30px] hover:scale-105 transition-all duration-75"
              placeholder="blur"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
