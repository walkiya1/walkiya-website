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

export default function About() {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: "1",
      tabTitle: "Our Values",
    },
    {
      id: "2",
      tabTitle: "Our Vision",
    },
    {
      id: "3",
      tabTitle: "Our Mission",
    },
  ];

  const handleTabClick = (e: any) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section className="z-[10] relative">
      <div className="h-[60vh] w-full bg-opacity-30 bg-wk-blue relative grid items-end justify-start p-10">
        <h1 className="text-7xl text-black">Who we are</h1>
      </div>

      <main className="min-h-screen dsk:max-w-7xl mr-auto ml-auto self-start w-full">
        <div className="sm:p-11 sm:py-11 py-4 px-4 bg-white">
          <div className="sm:grid">
            <div
              className={`lg:w-6/12 relative before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-neutral-100 w-full sm:w-11/12 sm:justify-self-center sm:grid sm:grid-cols-3 gap-10`}
            >
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  id={tab.id}
                  disabled={currentTab === `${tab.id}`}
                  onClick={handleTabClick}
                  className={`py-2 mr-6 sm:mr-0 text-black relative disabled:before:scale-100 before:transition before:ease-linear duration-[2s] before:scale-0 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-black `}
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center md:py-14 py-6">
            {currentTab === "1" && (
              <div className="animate-up">
                <div className="xl:px-48 lg:px-24 md:px-12 sm:px-6 mb-8">
                  <h1 className="font-medium text-2xl md:text-xl md:pb-4 pb-1">
                    The value we bring
                  </h1>
                  <p className="text-light">
                    At Walkiya we are dedicated to creating meaningful impact in
                    communities and beyond through specialized development and a
                    commitment to professionalism, integrity, and excellence.
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 lg:gap-5 text-left xl:px-14 md:px-12 sm:px-6 ">
                  <div className="col-span-1 flex flex-col items-start text-left gap-1">
                    <h1 className="text-xl font-medium">Integrity</h1>
                    <p className="text-sm opacity-60 w-full">
                      At Walkiya, integrity is at the core of everything we do.
                      We believe in being honest, transparent, and accountable
                      in all of our business dealings. We are committed to doing
                      what is right, not just what is easy, and to treating all
                      of our clients, employees, and partners with respect and
                      fairness.
                    </p>
                  </div>
                  <div className="col-span-1 flex flex-col items-start text-left gap-1">
                    <h1 className="text-xl font-medium">Excellence</h1>
                    <p className="text-sm opacity-60 w-full">
                      We strive for excellence in everything we do. We believe
                      that providing the highest level of quality, service, and
                      value is what sets us apart from our competition. We are
                      dedicated to continuous improvement, innovation, and to
                      delivering results that exceed our clients&apos;
                      expectations.
                    </p>
                  </div>
                  <div className="col-span-1 flex flex-col items-start text-left gap-1">
                    <h1 className="text-xl font-medium">Professionalism</h1>
                    <p className="text-sm opacity-60 w-full">
                      Professionalism is a fundamental part of our culture. We
                      are committed to conducting our business with the highest
                      level of ethical standards and professionalism. We believe
                      that our expertise and professionalism should be reflected
                      in every interaction with our clients and partners, from
                      our initial engagement to the completion of any project.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {currentTab === "2" && (
              <div className="animate-up">
                <div className="mb-8 xl:px-48 lg:px-24 md:px-12 sm:px-6 ">
                  <h1 className="font-medium text-xl pb-2">What we envision</h1>
                  <p className="text-light">
                    We envision a world where walkiya as a company increases the
                    level of happiness and uploads the dignity of our staffs,
                    partners and dignity.
                  </p>
                </div>
              </div>
            )}
            {currentTab === "3" && (
              <div className="animate-up">
                <div>
                  <p className="font-medium break-words md:text-2xl text-xl leading-loose">
                    Our mission is to use modern, dependable, innovative, and
                    cost-effective systems in the design, execution,
                    maintenance, and management of all the projects we execute
                    with dedication to delivering the highest quality work and
                    yielding exceptional results, while also providing
                    exceptional customer service and value to our clients.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:gap-12 gap-8 pt-12 md:p-16 items-center sm:p-12 p-8 lg:pt-16 lg:p-24 grid lg:grid-cols-2">
          <div className="grid-col-1 grid grid-cols-2 gap-6">
            <div className="grid place-items-center text-center">
              <p className="text-2xl">200+</p>
              <p className="text-sm">Completed projects</p>
            </div>
            <div className="grid place-items-center">
              <p className="text-2xl">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="grid place-items-center">
              <p className="text-2xl">50+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="grid place-items-center">
              <p className="text-2xl">5+</p>
              <p className="text-sm">Dedicated Teams</p>
            </div>
          </div>
          <div className="grid-col-1">
            <h1 className="capitalize text-4xl font-medium my-3 text-wk-blue">
              Sustainability at walkiya
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi expedita maiores temporibus iusto! Deserunt esse animi
              facere a quasi ipsum eveniet atque mollitia libero quisquam
              laboriosam, exercitationem laudantium similique accusamus?
            </p>
          </div>
        </div>

        <section className="pt-12 md:p-16 sm:p-12 p-8 lg:pt-16 lg:p-24">
          <h1 className="text-center text-xl font-semibold opacity-40 mb-10">
            Our Clients
          </h1>
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, A11y]}
            breakpoints={{
              280: { slidesPerView: 3 },
              440: { slidesPerView: 3 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 5 },
              1400: { slidesPerView: 7 },
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/1537815211-11-usman-dan-fodio-university.jpg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/EYooTBnWoAU8xyf.jpg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/Federal-Polytechnic-Ukana-School-Fees.webp"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/FUKashere.jpg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/FUTA_Seal.jpg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/How-To-Gain-Admission-Into-UNICAL-scaled-1.webp"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/Nigeria_Ruga_Kruco.png"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/Oju-Colleges-of-Education-Courses.jpg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/Taraba-State-University-TASU.jpg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/udusok.webp"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/12/University-of-Uyo-_-Gurusprovince.jpeg"
                  className="object-contain self-center justify-self-center aspect-square"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>

      <div className="lg:min-h-[40vh] lg:grid lg:grid-cols-2 items-center md:px-24 md:py-16 px-8 py-12 bg-opacity-20 bg-wk-blue">
        <div className="col-span-1">
          <p>They make it possible</p>
          <h1 className="text-5xl mt-2">Our Team</h1>
        </div>
        <div className="col-span-1">
          <p className="mb-6 text-sm">
            We are proud to have a team of highly skilled and dedicated
            professionals who are committed to providing our clients with the
            highest level of service and expertise.{" "}
            <span className="hidden lg:block">
              Our team members come from diverse backgrounds and have a wide
              range of experience in various fields, with their skills,
              expertise and knowledge they help our clients achieve their goals.
            </span>
          </p>
          <Link
            href="/team"
            className="py-2 px-5 inline-block text-wk-blue bg-wk-blue bg-opacity-10 text-base rounded-lg hover:bg-opacity-100 hover:text-white transition ease-linear duration-300"
          >
            <div className="flex gap-2 items-center">
              <span>Meet the Team</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="12"
                fill="none"
                viewBox="0 0 22 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L18.586 7H1a1 1 0 1 0 0 2h17.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7c.183-.183.28-.419.292-.659L22 8m-.076-.383c-.049-.118-.121-.228-.217-.324l-7-7m7.217 7.324c.048.115.075.241.076.374z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
