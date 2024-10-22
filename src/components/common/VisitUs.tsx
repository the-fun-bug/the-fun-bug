import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import fbIcon from './img/facebook.png';
import instaIcon from './img/instagram.png';
import tiktokIcon from './img/tiktok.png';
import { Hours } from '@/types/types';

export default function VisitUs({ hours }: { hours: Hours }) {
  const { openPlayHours, partyHours } = hours;

  return (
    <section className="flex justify-center items-center py-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px]">
        <h1 className="font-nickainley mb-[2rem]">Visit Us</h1>
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[3.5rem] lg:gap-[1.25rem]">
          <div className="flex lg:w-[32%] mx-auto justify-start">
            <div className="flex flex-col gap-[1.25rem] text-center lg:text-left items-center lg:items-start w-fit">
              <h2>Where You Can Find Us</h2>
              <Link
                href="http://maps.google.com/?q=2055 Central Plaza Suite 108, New Braunfels, TX, 78130"
                rel="noreferrer"
                target="_blank"
              >
                2055 Central Plaza Suite 108, <br />
                New Braunfels, TX, 78130
              </Link>
              <Link href="mailto:contact@thefunbug.com">
                contact@thefunbug.com
              </Link>
              <Link href="tel:+12814550896">281-455-0896</Link>
              <h2 className="mt-[1rem]">Stay Up to Date</h2>
              <div className="flex gap-[0.5rem]">
                <Link
                  href="https://www.facebook.com/groups/824992593033982"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={fbIcon}
                    alt="facebook icon"
                    width={80}
                    height={80}
                    className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
                  />
                </Link>
                {/* TO DO: REPLACE WITH LINKS */}
                <Link
                  href="https://www.instagram.com/thefunbugplaystudio/profilecard/?igsh=c3I0MW41ZHMxNTEx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={instaIcon}
                    alt="instagram icon"
                    width={80}
                    height={80}
                    className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@thefunbugplaystudio?_t=8qjMNalXXYs&_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={tiktokIcon}
                    alt="tiktok icon"
                    width={80}
                    height={80}
                    className="w-[30px] h-[30px] hover:scale-105 transition-all duration-75"
                  />
                </Link>
              </div>
              <ButtonLink
                buttonText="View Latest News"
                buttonLink="/news"
                buttonClass="bg-soft-green/50 hover:bg-soft-green"
              />
            </div>
          </div>
          <div className="flex justify-center lg:w-[32%] mx-auto">
            <div className="w-fit flex flex-col gap-[1.25rem]">
              <h2 className="text-center lg:text-left">Open Play Hours</h2>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Monday</p>
                <p className="w-[142px]">{openPlayHours.monday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Tuesday</p>
                <p className="w-[142px]">{openPlayHours.tuesday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Wednesday</p>
                <p className="w-[142px]">{openPlayHours.wednesday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Thursday</p>
                <p className="w-[142px]">{openPlayHours.thursday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Friday</p>
                <p className="w-[142px]">{openPlayHours.friday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Saturday</p>
                <p className="w-[142px]">{openPlayHours.saturday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Sunday</p>
                <p className="w-[142px]">{openPlayHours.sunday}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end lg:w-[32%] mx-auto">
            <div className="w-fit flex flex-col gap-[1.25rem] items-center lg:items-start">
              <h2 className="text-center lg:text-left">Private Event Hours</h2>
              <h3 className="font-bold text-sm text-center lg:text-left">
                Subject to Availability
              </h3>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Friday</p>
                <p className="w-[150px] sm:w-[162px]">{partyHours.friday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Saturday</p>
                <p className="w-[150px] sm:w-[162px]">{partyHours.saturday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Sunday</p>
                <p className="w-[150px] sm:w-[162px]">{partyHours.sunday}</p>
              </div>
              <ButtonLink
                buttonText="Book a Party"
                buttonLink="/parties"
                buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
