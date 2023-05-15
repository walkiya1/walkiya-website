import Slugify from "@/src/Slugify";
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
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const projects = [
  {
    id: 1,
    name: "Joyce Udensi Hostel, University of calabar",
    role: "Web Development",
    category: "Web Development",
    image: "/image/building_plan.jpeg",
    slug: "project-a",
  },
  {
    id: 2,
    name: "Project B",
    role: "Architecture",
    category: "Architecture",
    image: "/image/building_plan.jpeg",
    slug: "project-b",
  },
  {
    id: 3,
    name: "Project C",
    role: "Library Development",
    category: "Library Development",
    image: "/image/building_plan.jpeg",
    slug: "project-c",
  },
  {
    id: 4,
    name: "Project D",
    role: "Construction",
    category: "Construction",
    image: "/image/building_plan.jpeg",
    slug: "project-c",
  },
  {
    id: 5,
    name: "Project E",
    role: "Web Development",
    category: "Web Development",
    image: "/image/building_plan.jpeg",
    slug: "project-d",
  },
];

const NextBtn = () => {
  return (
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
  );
};

const PrevBtn = () => {
  return (
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
  );
};

// Generates `/projects/1` and `/projects/2`
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  // Retrieve the `id` parameter from the URL
  const slug = context.params.slug;

  // Find the project with matching `id`
  const project = projects.find((project) => project.slug === slug);

  return {
    // Passed to the page component as props
    props: { data: project },
  };
}

export default function projecttemplate(props: any) {
  const data = props.data;
  return (
    <section className="z-[10] relative">
      <div
        className={`min-h-screen relative max-h-screen overflow-clip bg-opacity-20 bg-cover bg-no-repeat`}
      >
        <Image
          className="w-full h-full"
          src={data.image}
          width={600}
          height={600}
          priority={true}
          quality={100}
          alt=""
        />
        <div className="top-0 left-0 right-0 bottom-0 w-full h-full absolute p-24 grid place-items-center bg-black bg-opacity-25">
          <h1 className="text-8xl leading-snug font-medium text-white text-center">
            {props.data.name}
          </h1>
        </div>
        <div className="">
          <p>scroll down</p>
        </div>
      </div>
      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full lg:p-20 px-4 lg:px-[10%] grid grid-cols-7 gap-12">
        <div className="col-span-2">
          <h3 className="text-xl mb-3">Project Details</h3>
          <p>
            <span className="text-sm text-opacity-50 text-black">Status</span> - <span className="text-wk-blue">Completed</span>
          </p>
        </div>
        <div className="grid gap-12 col-span-5">
          <p className="text-xl font-light">
            The renovation of Joyce udensi hostel at the university of calabar,
            cross river state, nigeria.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 grid gap-3">
              <p className="text-opacity-50 text-black">client</p>
              <p>University of Calabar</p>
            </div>
            <div className="col-span-1 grid gap-3">
              <p className="text-opacity-50 text-black">location</p>
              <p>Calabar, cross river state, nigeria.</p>
            </div>
            <div className="col-span-1 grid gap-3">
              <p className="text-opacity-50 text-black">timeline</p>
              <p>Febuary 2021 - November 2021.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full lg:p-20 px-4">
        <h1 className="text-2xl mb-8 text-wk-blue">Project Gallery</h1>
        <div className="h-[80vh] relative">
        <Swiper
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            pagination
            modules={[Autoplay, A11y, Navigation]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
              enabled: true,
            }}
            className="overflow-visible h-full"
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <Image
                  src="/image/building_plan.jpeg"
                  className="object-cover w-full h-full"
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
                  src="/image/building_plan.jpeg"
                  className="object-cover w-full h-full"
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
                  src="/image/building_plan.jpeg"
                  className="object-cover w-full h-full"
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
                  src="/image/building_plan.jpeg"
                  className="object-cover w-full h-full"
                  width={100}
                  height={100}
                  priority
                  quality={50}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute lg:block text-white bg-white bg-opacity-10 sm:bg-opacity-30 lg:bg-transparent lg:static bottom-0 right-0 z-[2] flex flex-row-reverse items-center">
            <NextBtn />
            <PrevBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
