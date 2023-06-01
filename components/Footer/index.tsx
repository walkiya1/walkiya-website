import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="sm:border-t pt-10 lg:pt-0">
      <div className="dsk:max-w-7xl lg:flex-row grid lg:grid-cols-3 mr-auto ml-auto self-start w-full lg:px-5 sm:px-16 p-4">
        <div className="col-span-1 dsk:p-12 lg:py-12 py-6 lg:pr-12 grid gap-4 md:gap-0">
          <Image
            src="/image/footer-logo.svg"
            width={300}
            height={120}
            alt="walkiya logo"
            className="w-full sm:w-auto"
          />{" "}
          <div className="grid">
            <p className="text-sm">
              We create meaningful impact through commitment to making a
              positive difference in the world around us.
            </p>
          </div>
        </div>
        <div className="lg:py-6 col-span-auto lg:col-span-2">
          <div className="col-span-1 dsk:p-12 lg:py-12 lg:pl-12 flex lg:grid-col-3 justify-between flex-wrap">
            <div className="grid self-start gap-4 py-6 px-2 sm:p-0">
              <p className="text-wk-blue min-w-[80px] sm:min-w-0">Company</p>
              <div className="grid gap-4">
                <Link href="/" className="text-sm">
                  Projects
                </Link>
                <Link href="/" className="text-sm">
                  Team
                </Link>
                <Link href="/" className="text-sm">
                  Partners
                </Link>
                <Link href="/" className="text-sm">
                  Jobs
                </Link>
              </div>
            </div>
            <div className="grid self-start gap-4 py-6 px-2 sm:p-0">
              <p className="text-wk-blue min-w-[80px] sm:min-w-0">Services</p>
              <div className="grid gap-4">
                <Link href="/" className="text-sm">
                  Construction
                </Link>
                <Link href="/" className="text-sm">
                  ICT
                </Link>
                <Link href="/" className="text-sm">
                  Library Development
                </Link>
              </div>
            </div>
            <div className="grid self-start gap-4 pt-6 px-2 sm:p-0">
              <p className="text-wk-blue min-w-[80px] sm:min-w-0">About</p>
              <div className="grid gap-4">
                <Link href="/" className="text-sm">
                  Our Story
                </Link>
                <Link href="/#anniversary" className="text-sm">
                  10<sup>th</sup> Anniversary
                </Link>
                <Link href="/about/team" className="text-sm">
                  Team
                </Link>
              </div>
            </div>
            <div className="grid self-start gap-4 pt-6 px-2 sm:p-0">
              <p className="text-wk-blue min-w-[80px] sm:min-w-0">More</p>
              <div className="grid gap-4">
                <Link href="/privacy-policy" className="text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm">
                  Terms and conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center py-6">
        <p className="sm:text-sm text-xs max-w-[90%] sm:block hidden mr-auto ml-auto text-neutral-400 font-light leading-loose">
          Copyright © {currentYear}, Walkiya Limited. All Rights Reserved.
        </p>
        <p className="sm:text-sm text-xs max-w-[90%] sm:hidden block mr-auto ml-auto text-neutral-400 font-light leading-loose">
          Copyright © {currentYear}, Walkiya Limited. <br /> All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
