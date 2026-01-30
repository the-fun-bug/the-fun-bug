'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';
import { Photo } from '@/types/types';

type FitMode = 'cover' | 'contain';

export default function PhotoCarousel({
  images,
  fit = 'cover',
}: {
  images: Photo[];
  fit?: FitMode;
}) {
  return (
    <section className="px-[1rem]">
      <div className="mx-auto w-full max-w-[750px]">
        <Swiper
          slidesPerView={1}
          loop
          modules={[Scrollbar, Autoplay, A11y]}
          scrollbar={{ draggable: true }}
          className="homepage-gallery"
          autoplay
          speed={800}
          spaceBetween={24}
        >
          {images.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="mb-10 w-full relative">
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
      </div>
    </section>
  );
}
