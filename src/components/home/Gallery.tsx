'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { HomePagePhoto } from '@/types/types';

type FitMode = 'cover' | 'contain';

export default function HomepageGallery({
  images,
  fit = 'cover',
}: {
  images: HomePagePhoto[];
  fit?: FitMode;
}) {
  return (
    <section className="px-[1rem]">
      <Swiper
        slidesPerView={1}
        loop
        modules={[Pagination, Autoplay, A11y]}
        pagination={{ clickable: true }}
        className="homepage-gallery"
        autoplay
        speed={800}
        spaceBetween={24}
      >
        {images.map((s, i) => (
          <SwiperSlide key={i} className="mx-auto">
            <div className="mx-auto mb-10 w-full max-w-[1000px] relative">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-neutral-100" />
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className={`${
                    fit === 'cover' ? 'object-cover' : 'object-contain'
                  } object-center rounded-lg`}
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
