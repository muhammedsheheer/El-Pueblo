import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#000208] py-8 md:py-20">
      <div className="absolute left-0 top-0">
        <Image
          src={"/images/home/menu/bg.png"}
          alt="background"
          width={1024}
          height={564}
          className="z-0 h-auto w-full"
        />
      </div>
      <div className="z-50 flex flex-col gap-8 px-4 md:gap-14 md:px-28">
        <div>
          <h1 className="text-center font-poppins text-4xl font-[400] uppercase tracking-[3px] text-[#FFFFFF] md:text-5xl">
            el PUEBLO menu
          </h1>
        </div>
        <div className="z-50 flex w-full flex-row gap-2 md:gap-24">
          <div className="z-50 flex w-full flex-col items-center justify-center gap-6 md:w-[33%] md:gap-8">
            <motion.img
              src="/images/home/menu/1.png"
              alt="1"
              className="z-50 h-[150px] w-full md:h-[450px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="hidden md:block">
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-transparent px-6 py-5 font-poppins uppercase text-[#fff] ring-[1px] ring-[#fff] hover:bg-[#fff] hover:text-black">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%] md:gap-8">
            <motion.img
              src="/images/home/menu/2.png"
              alt="2"
              className="h-[150px] w-full md:h-[450px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="hidden md:block">
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-transparent px-6 py-5 font-poppins uppercase text-[#fff] ring-[1px] ring-[#fff] hover:bg-[#fff] hover:text-black">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%] md:gap-8">
            <motion.img
              src="/images/home/menu/3.png"
              alt="3"
              className="h-[150px] w-full md:h-[450px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="hidden md:block">
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-transparent px-6 py-5 font-poppins uppercase text-[#fff] ring-[1px] ring-[#fff] hover:bg-[#fff] hover:text-black">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Link href={"/menu"}>
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-transparent px-6 py-5 font-poppins text-xs uppercase text-[#fff] ring-[1px] ring-[#fff] hover:bg-[#fff] hover:text-black">
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
