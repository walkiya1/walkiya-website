import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [mobileHidden, setMobileHidden] = useState(true);

  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobileNav = () => {
    setMobileHidden(false);
    document.querySelector("body")?.classList.add("overflow-hidden");
  };
  const closeMobileNav = () => {
    setMobileHidden(true);
    document.querySelector("body")?.classList.remove("overflow-hidden");
  };

  if (router.events && router.events.on) {
    // hide the loader when route changes complete
    router.events.on("routeChangeComplete", () => {
      closeMobileNav();
    });

    // hide the loader when route changes fail
    router.events.on("routeChangeError", () => {
      closeMobileNav();
    });
  }

  return (
    <header
      className={`fixed w-full top-0 left-0 z-[500] ${
        scroll > 0 ? "py-0 bg-white" : "sm:py-6"
      } transition-all duration-500`}
    >
      <div className="dsk:max-w-7xl mr-auto ml-auto self-start w-full">
        <nav className="sm:px-16 h-[80px] px-5 items-center grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-3">
          <div className="col-span-1">
            <span className="lg:hidden">
              <Link
                className="inline-flex items-center justify-center text-white"
                href="/"
              >
                <Image
                  className="sm:w-16 h-full"
                  src="/icn/app_icon_64.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
            </span>
            <span className="hidden lg:flex">
              <Link
                className="inline-flex items-center justify-center py-2 px-6 font-semibold text-white"
                href="/"
              >
                <Image
                  className="h-full"
                  src="/icn/app_icon_64.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
            </span>
          </div>
          <div className="hidden lg:col-span-3 xl:col-span-1 lg:flex justify-center">
            <ul className="flex items-center px-4 w-fit">
              <li>
                <Link
                  className={`py-4 px-6 text-center inline-block ${
                    currentRoute === "" && "text-wk-blue font-semibold"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`py-4 px-6 text-center inline-block ${
                    currentRoute === "about" && "text-wk-blue font-semibold"
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`py-4 px-6 text-center inline-block ${
                    currentRoute === "services" && "text-wk-blue font-semibold"
                  }`}
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`py-4 px-6 text-center inline-block ${
                    currentRoute === "projects" && "text-wk-blue font-semibold"
                  }`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center min-w-fit justify-end">
            <div className="hidden lg:flex lg:mr-2 transition-all">
              <Link
                className="mr-auto py-2 px-5 text-white bg-wk-blue text-base rounded-lg"
                href="/contact"
              >
                Contact us
              </Link>
            </div>
            <div className="lg:hidden" onClick={openMobileNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full lg:hidden ${
          mobileHidden ? "-z-10 pointer-events-none" : "z-10"
        } transition-all duration-500`}
      >
        <div
          className={`w-full h-full ml-auto transition-all duration-300 ease-in-out flex flex-col bg-white ${
            mobileHidden === false ? "-translate-x-0" : "-translate-x-full"
          } ${scroll > 0 ? "py-0" : "sm:py-6 bg-white"}`}
        >
          <div className="h-[80px] px-5 items-center grid justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-10 md:h-10"
              onClick={closeMobileNav}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="p-5 flex-1">
            <div className="justify-between h-full flex flex-col">
              <div className="col-span-1">
                <ul>
                  <li
                    className={`text-xl font-medium py-3 flex gap-4 transition-all ease-in-out duration-500 ${
                      currentRoute === "" && "text-wk-blue font-semibold"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 ${
                        currentRoute === ""
                          ? "translate-x-0 opacity-100 w-6"
                          : "-translate-x-5 opacity-0 w-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={`text-xl font-medium py-3 flex gap-4 transition-all ease-in-out duration-500 ${
                      currentRoute === "about" && "text-wk-blue font-semibold"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 ${
                        currentRoute === "about"
                          ? "translate-x-0 opacity-100 w-6"
                          : "-translate-x-5 opacity-0 w-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                    <Link href="/about">About us</Link>
                  </li>
                  <li
                    className={`text-xl font-medium py-3 flex gap-4 transition-all ease-in-out duration-500 ${
                      currentRoute === "services" &&
                      "text-wk-blue font-semibold"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 ${
                        currentRoute === "services"
                          ? "translate-x-0 opacity-100 w-6"
                          : "-translate-x-5 opacity-0 w-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                    <Link href="/services">Services</Link>
                  </li>
                  <li
                    className={`text-xl font-medium py-3 flex gap-4 transition-all ease-in-out duration-500 ${
                      currentRoute === "projects" &&
                      "text-wk-blue font-semibold"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 ${
                        currentRoute === "projects"
                          ? "translate-x-0 opacity-100 w-6"
                          : "-translate-x-5 opacity-0 w-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li
                    className={`text-xl font-medium py-3 flex gap-4 transition-all ease-in-out duration-500 ${
                      currentRoute === "contact" && "text-wk-blue font-semibold"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-6 ${
                        currentRoute === "contact"
                          ? "translate-x-0 opacity-100 w-6"
                          : "-translate-x-5 opacity-0 w-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <span className="text-sm">
                  © 2022, Walkiya Limited. <br />
                  All right reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
