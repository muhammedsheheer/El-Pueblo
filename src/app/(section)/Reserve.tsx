import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#001d24]">
      <div className="z-50 flex flex-col md:flex-row">
        <div className="z-50 flex w-full flex-col items-center justify-center bg-[#3d97b3] py-12 md:w-[45%] md:py-36">
          <div className="flex flex-col items-start justify-start gap-5 px-4 md:gap-8 md:px-0">
            <h1 className="font-poppins text-4xl font-[400] uppercase text-[#fff] md:text-5xl">
              Reserve a <br /> table at <br /> el pueblo
            </h1>
            <p className="max-w-[400px] font-poppins text-sm font-[300] uppercase text-[#fff] md:text-base">
              We would love to welcome you to El Pueblo! reserve your table
              easily to ensure the best dining experience. Whether it`s an
              intimate dinner, a gathering with friends, or a family
              celebration, we’re here to make your visit memorable.
            </p>
            <div>
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#C5DAE8] px-6 py-6 uppercase text-black hover:bg-[#bedaec] md:px-7 md:py-7">
                  <ArrowRight />
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="relative z-50 w-full overflow-hidden px-8 pt-6 md:w-[55%] md:px-60 md:pt-20">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={"/images/home/reservation/bg.png"}
              alt="background"
              width={1024}
              height={564}
              className="z-0 h-full w-full"
            />
          </div>
          <motion.img
            src="/images/home/reservation/image.png"
            alt="image"
            className="z-50 h-full w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div> */}
        <div className="relative z-50 w-full overflow-hidden px-8 pt-6 md:w-[55%] md:px-60 md:pt-20">
          {/* Background image behind the content */}
          <Image
            src="/images/home/reservation/bg.png"
            alt="background"
            fill
            className="absolute inset-0 z-0 object-cover"
          />

          {/* Foreground animated image */}
          <motion.img
            src="/images/home/reservation/image.png"
            alt="image"
            className="relative z-10 h-full w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
