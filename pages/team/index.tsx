import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  return (
    <>
      {/* <div className="h-[60vh] w-full bg-opacity-20 bg-wk-blue relative">
        <div className="hero-one-pagination d-flex z-20 justify-content-center flex-column align-items-center gap-3"></div>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          effect="fade"
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
            el: ".hero-one-pagination",
          }}
          className="w-full h-full relative"
        >
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                src="/image/IMG_1960.png"
                className="w-full h-full object-cover object-left-top brightness-75 lg:brightness-95"
                alt=""
                width={800}
                height={500}
                priority
                quality={100}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <Image
                src="/image/IMG_1960.png"
                className="w-full h-full object-cover object-left-top brightness-75 lg:brightness-95"
                alt=""
                width={800}
                height={500}
                priority
                quality={100}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="flex flex-col items-center justify-between lg:gap-12 gap-8 pt-12 md:p-16 sm:p-12 p-8 lg:pt-16 lg:p-24">
        <div className="lg:text-center xl:pt-48 pt-24 mb-8">
          <h1 className="capitalize lg:text-6xl text-4xl font-medium my-3 text-wk-blue">
            Discover the Collective Excellence of Our Team
          </h1>
          <p className="">
            Our experienced professionals are committed to upholding the highest
            standards of integrity, transparency, and accountability within our
            company. We prioritize the best interests of our clients, employees,
            and other stakeholders, ensuring that our operations consistently
            reflect this dedication.
          </p>
        </div>
        <div className="grid gap-12">
          <div className="grid md:grid-cols-3 sm:py-11 lg:p-0 gap-7">
            <div className="col-span-1 grid w-full">
              <Image
                className="w-full aspect-[1/1.3] object-cover"
                src="/img/team/blank.jpg"
                alt=""
                width={400}
                height={370}
              />
              <div className="mt-4">
                <p className="text-2xl font-semibold">Dr. Knight Egweme</p>
                <p className="opacity-40 py-2">Chief Executive Officer</p>
              </div>
            </div>
            <div className="col-span-1 w-full">
              <Image
                className="w-full aspect-[1/1.3] object-cover object-top"
                src="/img/team/ceo-1.png"
                alt=""
                width={400}
                height={370}
                quality={100}
              />
              <div className="mt-4">
                <p className="text-2xl font-semibold">Dominic Egwuda</p>
                <p className="opacity-40 py-2">Chief Executive Officer</p>
              </div>
            </div>
            <div className="col-span-1 w-full">
              <Image
                className="w-full aspect-[1/1.3] object-cover"
                src="/img/team/blank.jpg"
                alt=""
                width={400}
                height={370}
              />
              <div className="mt-4">
                <p className="text-2xl font-semibold">Sarah Martins Egwuda</p>
                <p className="opacity-40 py-2">Director</p>
              </div>
            </div>
          </div>
          {/* other staff */}
          <div className="grid grid-cols-2 md:grid-cols-4 sm:py-11 lg:p-0 md:gap-7 gap-3">
            <div className="col-span-1">
              <Image
                className="w-full aspect-[1/1.2] object-cover"
                src="/img/team/blank.jpg"
                alt=""
                width={290}
                height={370}
              />
              <div className="mt-4">
                <p className="lg:text-xl font-medium">Dominic Egwuda</p>
                <p className="opacity-40 py-2 text-sm">
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                className="w-full aspect-[1/1.2] object-cover"
                src="/img/team/blank.jpg"
                alt=""
                width={290}
                height={370}
              />
              <div className="mt-4">
                <p className="lg:text-xl font-semibold">Areoye Jamiu Opeyemi</p>
                <p className="opacity-40 py-2">Program Manager</p>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                className="w-full aspect-[1/1.2] object-cover"
                src="/img/team/blank.jpg"
                alt=""
                width={290}
                height={370}
              />
              <div className="mt-4">
                <p className="lg:text-xl font-semibold">Dominic Egwuda</p>
                <p className="opacity-40 py-2">Chief Executive Officer</p>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                className="w-full aspect-[1/1.2] object-cover"
                src="/img/team/blank.jpg"
                alt=""
                width={290}
                height={370}
              />
              <div className="mt-4">
                <p className="lg:text-xl font-semibold">Dominic Egwuda</p>
                <p className="opacity-40 py-2">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
