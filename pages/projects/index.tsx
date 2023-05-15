import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Parallax } from "react-parallax";

// interface Project {
//   name: string;
//   role: string;
//   category: string;
//   image: string;
// }

const projects = [
  {
    id: 1,
    name: "Remodelling of lecture Hall",
    role: "Construction",
    category: "Construction",
    image: "/image/DSC_1223.JPG",
    slug: "remodelling"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropCategory, setDropCategory] = useState(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category || "");
  };

  const handleShowAll = () => {
    setSelectedCategory("");
  };

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <>
    <Head>
    <title>Our Projects</title>
    </Head>
    <section className="z-[10] relative">
      <Parallax
        bgImage="/image/building_plan.jpeg"
        bgImageAlt=""
        strength={-200}
      >
        <div className="lg:p-16 lg:pt-48 md:p-8 p-4 pt-48 bg-black bg-opacity-20 text-white">
          <div className="dsk:max-w-7xl mr-auto ml-auto grid place-items-center">
            <div className="grid gap-4 w-full">
              <h1 className="text-6xl">
                Let&apos;s Build Something <br /> Great. Together.
              </h1>
              <p className="">We design, build and manage</p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="min-h-screen dsk:max-w-7xl mr-auto ml-auto self-start w-full lg:p-20 pt-20 px-4">
        <h3 className="mb-4 text-2xl text-wk-blue">Featured Projects</h3>
        <div className="flex relative md:gap-8 items-center justify-between md:justify-normal">
          <p>By Category</p>
          <div className="text-sm md:flex gap-8 hidden">
            <button
              onClick={handleShowAll}
              className={`${
                selectedCategory === "" ? "before:scale-100 text-wk-blue before:bg-wk-blue" : ""
              } py-2 mr-6 sm:mr-0 text-black relative disabled:before:scale-100 hover:before:scale-100 before:origin-left before:transition before:ease-linear before:duration-300 duration-500 before:scale-0 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-black`}
            >
              All
            </button>
            <button
              onClick={() => handleCategorySelect("Architecture")}
              className={`${
                selectedCategory === "Architecture" ? "before:scale-100 text-wk-blue before:bg-wk-blue" : ""
              } py-2 mr-6 sm:mr-0 text-black relative disabled:before:scale-100 hover:before:scale-100 before:origin-left before:transition before:ease-linear before:duration-300 duration-500 before:scale-0 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-black`}
            >
              Architecture
            </button>
            <button
              onClick={() => handleCategorySelect("Construction")}
              className={`${
                selectedCategory === "Construction" ? "before:scale-100 text-wk-blue before:bg-wk-blue" : ""
              } py-2 mr-6 sm:mr-0 text-black relative disabled:before:scale-100 hover:before:scale-100 before:origin-left before:transition before:ease-linear before:duration-300 duration-500 before:scale-0 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-black`}
            >
              Construction
            </button>
            <button
              onClick={() => handleCategorySelect("Web Development")}
              className={`${
                selectedCategory === "Web Development" ? "before:scale-100 text-wk-blue before:bg-wk-blue" : ""
              } py-2 mr-6 sm:mr-0 text-black relative disabled:before:scale-100 hover:before:scale-100 before:origin-left before:transition before:ease-linear before:duration-300 duration-500 before:scale-0 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-black`}
            >
              Web Development
            </button>
          </div>

          <div className="relative group h-full">
            <button
              className="text-white relative md:hidden inline-flex bg-wk-blue font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center"
              type="button"
            >
              {!selectedCategory ? "All" : selectedCategory}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`z-10 absolute right-0 top-0 mt-12 hidden group-hover:inline-flex bg-white divide-y divide-gray-100 rounded-lg shadow`}
            >
              <ul className="py-2 text-sm text-gray-700 grid place-items-center">
                <li>
                  <button
                    onClick={handleShowAll}
                    className={`text-black block px-8 py-2 text-center`}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategorySelect("Architecture")}
                    className={`text-black block px-8 py-2 text-center`}
                  >
                    Architecture
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategorySelect("Construction")}
                    className={`text-black block px-8 py-2 text-center`}
                  >
                    Construction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategorySelect("Web Development")}
                    className={`text-black block px-8 py-2 text-center`}
                  >
                    Web Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid relative lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 py-10 gap-5">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`projects/${project.slug}`}
              className={`p-2 h-full bg-gray-50 flex flex-col rounded-3xl transition-all duration-500 ease-in-out ${
                !selectedCategory || selectedCategory === project.category
                  ? "scale-100 opacity-100 animate-up"
                  : "scale-0 opacity-0 absolute -z-50"
              }`}
            >
              <div className="flex-1">
              <Image
                className="w-full h-full object-cover object-center rounded-2xl"
                src={project.image}
                quality={100}
                alt={""}
                height={674}
                width={674}
              />
              </div>
              <div className="px-3 mt-3">
                <h1 className="py-1">{project.name}</h1>
                <div className="flex items-end justify-between text-sm pb-2">
                  <p className="text-neutral-400 text-xs">role</p>
                  <p className="text-wk-blue">{project.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
