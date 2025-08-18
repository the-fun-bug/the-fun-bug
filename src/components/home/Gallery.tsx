'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { HomePagePhoto } from '@/types/types';

export default function HomepageGallery({
  images,
}: {
  images: HomePagePhoto[];
}) {
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
        {images.map((s, i) => (
          <SwiperSlide key={i} className="mx-auto">
            <div className="flex justify-center items-center mb-[40px]">
              <Image
                src={s.image}
                alt={s.alt}
                className="rounded-lg w-full max-w-[1000px]"
                priority={i === 0}
                width={1000}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
