"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#edf9fa] px-4 pt-12 lg:px-10 lg:pt-24">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <div className="w-full border-b-[1px] border-b-[#000] md:w-[45%]" />
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logof.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-28 md:w-40"
            />
          </Link>
          <div className="w-full border-b-[1px] border-b-[#000] md:w-[45%]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:hidden md:flex-row md:justify-center md:gap-10">
          <div className="flex w-full flex-col items-start justify-start gap-8 md:ml-16 md:flex-row md:items-center md:justify-center md:gap-4">
            <div className="flex flex-col items-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Menu
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Contact
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Reserve
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-end justify-end gap-8 md:flex-row md:items-center md:justify-center md:gap-20">
            <div className="flex flex-col items-end gap-3 md:items-center">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#000]"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href={"https://g.co/kgs/G93d4R1"}
                  target="_blank"
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
                >
                  64 Derby Rd, Huyton, <br /> Liverpool L36 9YG, UK
                </Link>
                <Link
                  href={"mailto:info@elpueblohuyton.com"}
                  className="text-end font-open_sans text-sm font-[400] lowercase tracking-[2px] text-[#000] md:text-start"
                >
                  info@elpueblohuyton.com
                </Link>
                <Link
                  href={"tele:+01514808702"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
                >
                  0151 480 8702
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Opening hours
              </Link>
              <p className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start">
                Mon-Fri 9:30am-9pm <br />
                Sat 9:30am-10pm <br />
                Sun 9:30am-9pm
              </p>
            </div>
          </div>
        </div>
        {/* mobile screen */}
        <div className="hidden flex-row items-center justify-center gap-60 md:flex">
          <div className="flex flex-col items-start gap-3 md:items-start">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
            >
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
            >
              Contact
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
            >
              Reserve
            </Link>
          </div>
          <div className="flex flex-col items-end gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#000]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={"https://g.co/kgs/G93d4R1"}
                target="_blank"
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
              >
                64 Derby Rd, Huyton, <br /> Liverpool L36 9YG, UK
              </Link>
              <Link
                href={"mailto:info@elpueblohuyton.com"}
                className="text-end font-open_sans text-sm font-[400] lowercase tracking-[2px] text-[#000] md:text-start"
              >
                info@elpueblohuyton.com
              </Link>
              <Link
                href={"tele:+01514808702"}
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
              >
                0151 480 8702
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 md:items-start">
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000]"
            >
              Opening hours
            </Link>
            <p className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#000] md:text-start">
              Mon-Fri 9:30am-9pm <br />
              Sat 9:30am-10pm <br />
              Sun 9:30am-9pm
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/elpuebloliverpool/"}
            target="_blank"
            className="text-[#000]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://g.co/kgs/G93d4R1"}
            target="_blank"
            className="text-[#000]"
          >
            <Icons.google />
          </Link>
          <Link
            href={"https://www.facebook.com/elpuebloliverpool"}
            target="_blank"
            className="text-[#000]"
          >
            <Icons.facebook />
          </Link>
          <Link
            href={
              "https://www.tripadvisor.co.uk/Restaurant_Review-g1727851-d20104388-Reviews-El_Pueblo_Liverpool-Huyton_Merseyside_England.html"
            }
            target="_blank"
            className="text-[#000]"
          >
            <Icons.unknown />
          </Link>
          {/* <Link href={""} target="_blank" className="text-[#000]">
            <Icons.unknown />
          </Link>
          <Link href={""} target="_blank" className="text-[#000]">
            <Icons.facebook />
          </Link> */}
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="w-full border-b-[1px] border-b-[#000]" />
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#000] md:text-start">
              © 2025 El Pueblo , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#000] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
