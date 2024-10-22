'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import slide1 from './img/g-1.png';
import slide2 from './img/g-2.png';
import slide3 from './img/g-3.png';
import slide4 from './img/g-4.png';

export default function HomepageGallery() {
  const slides = [
    {
      image: slide1,
      alt: 'children playing',
    },
    {
      image: slide2,
      alt: 'children playing',
    },
    {
      image: slide3,
      alt: 'children playing',
    },
    {
      image: slide4,
      alt: 'children playing',
    },
  ];

  return (
    <section className="px-[1rem]">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Autoplay, A11y]}
        pagination={{ clickable: true }}
        className="homepage-gallery"
        autoplay={true}
        speed={800}
        spaceBetween={50}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="mx-auto">
            <div className="flex justify-center items-center mb-[40px]">
              <Image
                src={s.image}
                alt={s.alt}
                className="rounded-lg w-full max-w-[1000px]"
                priority={i === 0}
                width={1000}
                height={600}
                placeholder="blur"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
