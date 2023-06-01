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
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Walkiya Limited</title>
        <meta name="title" content="Walkiya Limited" />
        <meta
          name="description"
          content="Walkiya is a leading provider of construction and IT Solutions in Nigeria, offering a full range of solutions including new construction, renovations, project management, design and engineering, web design and development, networking solutions and more, with our team of professionals who are trained and experienced in diverse professions to carry out the following services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walkiya.com.ng" />
        <meta property="og:title" content="Walkiya Limited" />
        <meta
          property="og:description"
          content="Walkiya is a leading provider of construction and IT Solutions in Nigeria, offering a full range of solutions including new construction, renovations, project management, design and engineering, web design and development, networking solutions and more, with our team of professionals who are trained and experienced in diverse professions to carry out the following services"
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walkiya.com.ng/" />
        <meta property="twitter:title" content="Walkiya Limited" />
        <meta
          property="twitter:description"
          content="Walkiya is a leading provider of construction and IT Solutions in Nigeria, offering a full range of solutions including new construction, renovations, project management, design and engineering, web design and development, networking solutions and more, with our team of professionals who are trained and experienced in diverse professions to carry out the following services"
        />
        <meta property="twitter:image" content="" />
        <link
          rel="shortcut icon"
          href="/icn/app_icon_192.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>Walkiya Limited</title>
      </Head>
      <section className="md:pt-10 pt-6 z-[10] relative">
        <main className="min-h-screen dsk:max-w-7xl mr-auto ml-auto self-start w-full lg:p-20 pt-20 px-4">
          <div className="w-full h-[350px] md:h-[26rem] rounded-3xl lg:rounded-none relative overflow-hidden lg:overflow-visible">
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
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
                enabled: true,
              }}
              loop={true}
              speed={1000}
              effect="fade"
              autoplay={{
                delay: 5000,
              }}
              className="w-full h-full text-white overflow-hidden lg:rounded-3xl"
            >
              <SwiperSlide className="relative h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src="/projects/p-b-4.jpeg"
                    className="w-full h-full object-cover object-left-center brightness-75 lg:brightness-95"
                    alt=""
                    width={1000}
                    height={500}
                    priority
                    quality={100}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 w-full h-full p-4 md:p-10 text-center grid md:grid-cols-8">
                    <div className="col-span-6 col-start-2 self-center z-10">
                      <h1 className="font-semibold text-2xl md:text-3xl xl:text-5xl leading-[1.2] mb-2 lg:text-4xl sm:text-3xl">
                        We deliver superior quality every time.
                      </h1>
                      <p className="lg:text-base md:text-sm text-xs">
                        We use high quality materials and worksmanship on every
                        project we embark to to guarantee customer satisfaction.
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0">
                    <Link
                      href=""
                      className="md:text-lg text-xs pb-3 pl-5 font-medium flex items-center group capitalize transition duration-500 ease-in-out"
                      about="link to project"
                    >
                      <span className="mr-2  transition-all duration-500 ease-in-out">
                        <span className="transition-all duration-500 ease-in-out">
                          -
                        </span>{" "}
                        Twin Pavilion UniCal
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src="/image/DSC_1223.JPG"
                    className="w-full h-full object-cover object-left-top brightness-75 lg:brightness-95"
                    alt=""
                    width={1000}
                    height={500}
                    priority
                    quality={100}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 w-full h-full p-4 md:p-10 text-center grid md:grid-cols-8">
                    <div className="col-span-6 col-start-2 self-center z-10">
                      <h1 className="font-semibold text-2xl xl:text-5xl leading-[1.2] mb-2 lg:text-4xl sm:text-3xl">
                        Elegance and Functionality
                      </h1>
                      <p className="md:text-base text-sm">
                        We believe in creating a balance between beauty and
                        function to create spaces with purpose.
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0">
                    <Link
                      href=""
                      className="md:text-lg transition-all ease-in-out duration-300 text-xs pb-3 pl-5 font-medium flex items-center group capitalize"
                      about="link to project"
                    >
                      <span className="mr-2">
                        <span className="transition-all ease-in-out duration-300">
                          -
                        </span>{" "}
                        Lecture Hall AAUA
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolute lg:block text-white bg-white bg-opacity-10 sm:bg-opacity-30 lg:bg-transparent lg:static bottom-0 right-0 z-[2] flex flex-row-reverse items-center">
              <button
                type="button"
                id="next-btn"
                className="lg:absolute flex prev-btn right-0 lg:hover:bg-wk-blue hover:text-white ease-in-out transition duration-500 lg:translate-x-1/2 justify-center items-center lg:text-wk-blue lg:rounded-xl lg:w-14 lg:h-14 p-4 border-wk-blue lg:border bottom-1/2 top-1/2 z-[2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Previous Button</span>
              </button>
              <button
                type="button"
                id="prev-btn"
                className="lg:absolute flex prev-btn left-0 lg:hover:bg-wk-blue hover:text-white ease-in-out transition duration-500 lg:-translate-x-1/2 justify-center items-center lg:text-wk-blue lg:rounded-xl lg:w-14 lg:h-14 p-4 border-wk-blue lg:border bottom-1/2 top-1/2 z-[2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Previous Button</span>
              </button>
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 text-blue font-light py-20">
            <div className="col-span-1 md:block hidden">
              <div className="self-center relative h-full">
                <Image
                  className="max-w-[60%] lg:max-w-[40%] absolute top-[15%] left-[10%] parallex-img"
                  src="/image/who-we-are.jpeg"
                  width={840}
                  height={912}
                  alt=""
                />
                <Image
                  className="max-w-[60%] lg:max-w-[40%] absolute left-[30%] top-[40%] lg:left-[40%] lg:top-[40%] parallex-img"
                  src="/image/fancy-img-2-1.jpeg"
                  width={840}
                  height={912}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-1">
              <p className="uppercase tracking-widest">Walkiya Limited</p>
              <h1 className="capitalize text-4xl font-medium my-3 text-wk-blue">
                Who we are
              </h1>
              <p className="leading-7">
                We are a versatile company that specializes in a range of
                services including construction, library development, and IT
                solutions.
                <br />
                <br />
                As a full-service provider, we offer comprehensive
                expertise in various sectors, our capabilities extend beyond
                construction, encompassing services such as networking, app
                development, website creation, supply and installation
                of ICT equipment, digital catalog systems and innovative library
                management software to name a few. 
                <br />
                <br />
                We are dedicated to shaping the future through innovative and influential designs.
                Furthermore, we integrate sustainability into all our projects,
                leveraging our core values, along with strategic services to
                deliver holistic and environmentally conscious solutions.
              </p>
            </div>
          </div>

          <div
            id="anniversary"
            className="grid gap-6 sm:px-11 pb-24 px-4 py-20"
          >
            <div className="col-span-1 grid gap-6 md:gap-0">
              <div className="flex flex-col sm:flex-row sm:gap-5 items-center">
                <div className="flex flex-col w-full sm:w-auto">
                  <p className="text-xl">Since</p>
                  <h1 className="md:text-9xl text-8xl font-bold text-wk-blue">
                    2013
                  </h1>
                </div>
                <div className="flex flex-col md:gap-2 gap-1 w-full sm:w-auto">
                  <p className="md:text-xl text-xl">Celebrating</p>
                  <span className="md:text-4xl sm:text-3xl text-4xl font-semibold">
                    10 Years of
                  </span>
                  <p className="md:text-xl text-xl">Excellence</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl mb-2">
                  Walkiya Limited Marks a Decade of Operation
                </p>
                <p className="font-light">
                  As we approach our 10th year of operation, we are proud to
                  look back on the past decade of success and growth. Since our
                  founding in 2013, we have built a reputation for excellence
                  and reliability, thanks to the hard work and dedication of our
                  team of skilled professionals. As we celebrate this milestone,
                  we are grateful for the support and trust of our clients and
                  partners, and we look forward to continuing to serve the
                  Nigerian economy for many more years to come.{" "}
                  {/* <Link
                  href="/about/10th-anniversary"
                  className="text-wk-blue text-opacity-60 hover:text-opacity-100 transition-all ease-in-out duration-300 underline underline-offset-8"
                >
                  read more
                </Link> */}
                </p>
              </div>
            </div>
            <div className="col-span-1 grid md:grid-cols-2 gap-6">
              <div className="col-span-1 sm:mt-8 mt-4 md:mt-0 bg-wk-blue text-white md:p-8 p-4 text-right">
                <p className="font-medium text-xl mb-3">Letter from the Ceo</p>
                <p className="text-sm font-light">
                  In such a short time, we at Walkiya Limited have done the
                  remarkable job of leaving our mark in various industries in
                  Nigeria. This has allowed us to assume the lead on significant
                  infrastructure projects. It is a reputation that precedes us
                  as a result of the uniqueness and professionalism dedicated to
                  each job from idea to fruition. The aim of Walkiya Limited
                  transcends different spheres of life, including but not
                  limited to the economic advancement of Nigeria. This
                  advancement looks like investing in the talents in the country
                  by hiring the very best to represent and work for Walkiya
                  Limited. It is not as grandeur as a charity, but it is a step
                  in the right direction in ensuring the development of the
                  nation isn&apos;t left solely to the hands of the government.
                  Because Walkiya Limited believes innovation is the hub of
                  creativity, we are known for our fresh innovative perspective
                  we bring to each project. We are made up of a strong, sturdy
                  team of top-notch talents who are consistently delivering
                  state-of-the-art executions. In the long run, we plan to be a
                  household name in the sectors we reside, spreading our wings
                  across the continent of Africa and the world at large. I
                  appreciate your ongoing assistance.
                </p>
              </div>
              <div className="col-span-1 relative">
                <Image
                  className="w-full h-full object-cover"
                  src="/image/IMG_1962.png"
                  alt="Dominic Egwudaa, Ceo fo Walkiya Limited"
                  width={800}
                  height={1000}
                  quality={100}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 overlay-ceo p-4 flex flex-col items-end justify-end text-white">
                  <p>Dominic Egwudaa</p>
                  <p className="uppercase text-xs">Cheif Executive Officer</p>
                </div>
              </div>
            </div>
          </div>

          <section className="py-12">
            <div className="w-full grid relative after:bg-wk-blue after:bg-opacity-5 after:rounded-3xl after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:w-full after:h-[80%] after:md:h-full after:-mt-14 after:-z-[1]">
              <div className="grid grid-cols-3 w-full px-8">
                <div className="col-span-2">
                  <p className="text-wk-blue">EHM. SO?</p>
                  <h1 className="text-3xl font-semibold">What do we do</h1>
                  <p className="opacity-60">
                    Full-service Comapny Utilizing Modern Technology.
                  </p>
                </div>
                <div className="col-span-1 items-end justify-end md:grid hidden">
                  <Link
                    href="/about"
                    className="py-2 px-5 text-wk-blue bg-wk-blue bg-opacity-10 text-base rounded-lg hover:bg-opacity-100 hover:text-white transition ease-linear duration-300"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <div className="w-full p-8 px-4 md:px-8 rounded-lg grid gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col items-center border border-wk-blue border-opacity-5 bg-white rounded-xl px-6 py-16 text-center gap-3">
                  <div className="p-4 bg-wk-blue bg-opacity-10 inline-block text-wk-blue rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl font-medium opacity-60">
                    Construction
                  </h1>
                  <p className="text-sm opacity-60">
                    We offer comprehensive infrastructure development services,
                    encompassing design, planning, construction, and
                    maintenance. Our expert team ensures high-quality projects
                    that meets your needs and budget.
                  </p>
                </div>
                <div className="col-span-1 flex flex-col items-center border border-wk-blue border-opacity-5 bg-white rounded-xl px-6 py-16 text-center gap-3">
                  <div className="p-4 bg-wk-blue bg-opacity-10 inline-block text-wk-blue rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl font-medium opacity-60">
                    IT Solutions
                  </h1>
                  <p className="text-sm opacity-60">
                    We specialize in networking, app development, website
                    creation, and the supply and installation of ICT equipment.
                    Our team can deliver customized solutions to meet your
                    specific IT requirements.
                  </p>
                </div>
                <div className="col-span-1 flex flex-col items-center border border-wk-blue border-opacity-5 bg-white rounded-xl px-6 py-16 text-center gap-3">
                  <div className="p-4 bg-wk-blue bg-opacity-10 inline-block text-wk-blue rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <h1 className="text-xl font-medium opacity-60">
                    Library Development
                  </h1>
                  <p className="text-sm opacity-60">
                    We offer comprehensive solutions to enhance your library's
                    functionality and services. From digital catalog systems to
                    innovative library management software, we provide tailored
                    solutions to optimize your library's operations and improve
                    user experiences.
                  </p>
                </div>
              </div>
              <div className="col-span-1 items-center justify-center grid md:hidden pt-10">
                <Link
                  href=""
                  className="py-2 px-5 text-wk-blue bg-wk-blue bg-opacity-10 text-base rounded-lg hover:bg-opacity-100 hover:text-white transition ease-linear duration-300"
                >
                  See more
                </Link>
              </div>
            </div>
          </section>

          <section className="py-12">
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
      </section>
    </>
  );
}
