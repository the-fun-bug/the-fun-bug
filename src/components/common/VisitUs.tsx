import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import fbIcon from './img/facebook.png';
import instaIcon from './img/instagram.png';
import ticktokIcon from './img/ticktok.png';

export default function VisitUs() {
  return (
    <section className="flex justify-center items-center py-[2rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center w-full max-w-[1000px]">
        <h1 className="font-nickainley mb-[1rem]">Visit Us</h1>
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-[2rem] md:gap-[1rem]">
          <div className="flex flex-col gap-[1rem] md:w-[32%] mx-auto text-center md:text-left items-center md:items-start">
            <h2 className="font-bold text-xl">Where You Can Find Us</h2>
            <Link
              href="http://maps.google.com/?q=2063 Central Plaza Suite 108, New Braunfels, TX, 78130"
              className="max-w-[300px]"
            >
              2063 Central Plaza Suite 108, New Braunfels, TX, 78130
            </Link>
            <Link href="mailto:thefunbug@yahoo.com">thefunbug@yahoo.com</Link>
            <Link href="tel:+12814550896">281-455-0896</Link>
            <h2 className="font-bold text-xl mt-[1rem]">Stay Up to Date</h2>
            <div className="flex gap-[0.5rem]">
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
              {/* TO DO: REPLACE WITH LINKS */}
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
            <ButtonLink
              buttonText="View Latest News"
              buttonLink="/news"
              buttonClass="bg-soft-green hover:bg-dark-green hover:text-white"
            />
          </div>
          <div className="flex flex-col gap-[1rem] md:w-[32%] mx-auto">
            <h2 className="font-bold text-xl text-center md:text-left">
              Open Play Hours
            </h2>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Monday</p>
              <p className="w-[142px]">9:00 am - 4:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Tuesday</p>
              <p className="w-[142px]">9:00 am - 4:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Wednesday</p>
              <p className="w-[142px]">9:00 am - 4:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Thursday</p>
              <p className="w-[142px]">9:00 am - 4:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Friday</p>
              <p className="w-[142px]">9:00 am - 4:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Saturday</p>
              <p className="w-[142px]">9:00 am - 2:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Sunday</p>
              <p className="w-[142px]">Closed for private parties only</p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] md:w-[32%] mx-auto">
            <h2 className="font-bold text-xl text-center md:text-left">
              Private Event Hours
            </h2>
            <h3 className="font-bold text-sm text-center md:text-left">
              Subject to Availability
            </h3>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Friday</p>
              <p className="w-[162px]">3:00 pm - 5:00 pm & 6:00 pm - 8:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Saturday</p>
              <p className="w-[162px]">3:00 pm - 5:00 pm & 6:00 pm - 8:00 pm</p>
            </div>
            <div className="flex gap-[1rem]">
              <p className="w-[88.5px]">Sunday</p>
              <p className="w-[162px]">
                11:00 am - 1:00 pm, 2:00 pm - 4:00 pm & 5:00 pm - 7:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
