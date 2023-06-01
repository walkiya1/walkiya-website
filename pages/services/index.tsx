import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-parallax"

export default function Services() {
  return (
    <>
    <Head>
    <title>About Us</title>
    </Head>
    <section className="md:pt-10 pt-6 z-[10] relative">
      <div className="w-full lg:p-20 lg:pt-32 pt-28 px-4">
        <div className="sm:p-11 sm:py-11 py-4 px-4 grid gap-4">
          <h1 className="text-5xl">
            Professional Approach to Satisfaction Guarantee
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            dolore sint nulla assumenda velit deserunt dolores fuga quibusdam
            quasi officia. Molestias excepturi maxime nobis impedit dolore
            voluptatum explicabo ipsam ratione.
          </p>
        </div>
      </div>

      <Parallax
        bgImage="/12/pexels-photo-4513940-1.webp"
        bgImageAlt=""
        strength={-200}
    >
      <div className="w-full h-[40vh]"></div>
    </Parallax>

      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full gap-4 p-16 lg:gap-24 lg:p-20 lg:pb-0 lg:pt-32 px-4 flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="col-span-1 flex flex-col gap-4">
          <h1 className="text-4xl">Infrastructure Development</h1>
          <p className="font-light">
            We provide a wide range of infrastructure development services, from
            design and planning to build and maintenance. Whether you&apos;re
            building a new home, remodeling an existing one or planning a
            commercial development, our team of experts will work with you to
            deliver a high-quality construction project that meets your needs
            and budget.
          </p>
        </div>
    <Parallax
          bgImage="/12/protected-steel-concrete-high-rise-under-construction.jpg"
          bgImageAlt=""
          strength={200}
        >
          <div className="col-span-1 lg:min-h-[500px] sm:min-h-[400px] min-h-[300px]">
          </div>
        </Parallax>
      </div>
      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full gap-4 lg:gap-24 lg:p-20 lg:pb-0 lg:pt-32 px-4 grid md:grid-cols-2">
          <Parallax
          bgImage="/image/it.jpg"
          bgImageAlt=""
          strength={200}
        >
          <div className="col-span-1 lg:min-h-[500px] sm:min-h-[400px] min-h-[300px]">
          </div>
        </Parallax>
        <div className="col-span-1 flex flex-col gap-4">
          <h1 className="text-4xl">IT Solutions</h1>
          <p className="font-light">
            We provide a wide range of IT solutions, from networking and server
            management to cybersecurity, data backup solutions and software
            development. Our team of certified technicians and developers can
            help you design and implement IT solutions that meet the specific
            needs of your business.
          </p>
        </div>
      </div>
      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full gap-4 p-16 lg:gap-24 lg:p-20 lg:pt-32 px-4 flex flex-col-reverse lg:grid md:grid-cols-2">
        <div className="col-span-1 flex flex-col gap-4">
          <h1 className="text-4xl">Library Development</h1>
          <p className="font-light">
            We provide a wide range of infrastructure development services, from
            design and planning to build and maintenance. Whether you&apos;re
            building a new home, remodeling an existing one or planning a
            commercial development, our team of experts will work with you to
            deliver a high-quality construction project that meets your needs
            and budget.
          </p>
          <div className="w-full grid"></div>
        </div>
        <Parallax
          bgImage="/12/gettyimages-692061433_custom-187a6b394207014edeaa2421538fb0e4acd4187e.jpg"
          bgImageAlt=""
          strength={200}
        >
          <div className="col-span-1 lg:min-h-[500px] sm:min-h-[400px] min-h-[300px]">
          </div>
        </Parallax>
      </div>

      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full gap-8 lg:gap-12 lg:px-20 lg:pt-32 px-4 grid md:grid-cols-2">
        <div className="col-span-1 flex flex-col gap-4">
          <p>Exceeding Expectations</p>
          <h1 className="text-4xl">Our Work Process</h1>
          <p>
            At Walkiya Ltd, we are committed to delivering the highest quality
            construction and general contracting services to our clients. To
            ensure that we consistently exceed our clients&apos; expectations, we
            have developed a thorough and efficient work process that allows us
            to deliver exceptional results on every project we undertake. our
            work process include:
          </p>
        </div>
        <div className="col-span-1 gap-4 grid grid-flow-row">
          <div className="col-span-1 flex gap-3">
            <h1 className="text-3xl font-semibold text-wk-blue text-opacity-60">
              01.
            </h1>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Initial consultation
              </h3>
              <p className="text-sm text-black opacity-60">
                We begin every project with an initial consultation to
                understand our clients&apos; needs and goals. This allows us to
                develop a plan that meets their requirements and budget.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex gap-3">
            <h1 className="text-3xl font-semibold text-wk-blue text-opacity-60">
              02.
            </h1>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Design and planning
              </h3>
              <p className="text-sm text-black opacity-60">
                Once we have a clear understanding of our clients&apos; needs, we
                begin the design and planning process. Our team of design and
                engineering professionals works closely with our clients to
                create a functional and aesthetically pleasing space that meets
                their needs.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex gap-3">
            <h1 className="text-3xl font-semibold text-wk-blue text-opacity-60">
              03.
            </h1>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Project execution
              </h3>
              <p className="text-sm text-black opacity-60">
                After the design and planning process is complete, we move on to
                the project execution phase where our team of skilled
                professionals is responsible for carrying out the construction
                work, using a range of techniques and materials to deliver the
                best possible results for our clients.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex gap-3">
            <h1 className="text-3xl font-semibold text-wk-blue text-opacity-60">
              04.
            </h1>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Maintenance and repair
              </h3>
              <p className="text-sm text-black opacity-60">
                In addition to our construction services, we also offer a range
                of maintenance and repair services to keep our clients&apos;
                properties in top condition. Our team is skilled in a wide range
                of maintenance and repair tasks, ensuring that any issues are
                addressed quickly and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full gap-4 lg:gap-6 lg:p-20 p-16 lg:pt-32 px-4 grid place-items-center text-center">
        <h1 className="text-3xl">
          Got a project? <br /> don&apos;t hesitate to say hello.
        </h1>
        <Link
          href="/contact"
          className="py-2 px-5 inline-block text-wk-blue bg-wk-blue bg-opacity-10 text-base rounded-lg hover:bg-opacity-100 hover:text-white transition ease-linear duration-300"
        >
          <div className="flex gap-2 items-center">
            <span>Lets build it</span>
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
    </section>
    </>
  );
}
