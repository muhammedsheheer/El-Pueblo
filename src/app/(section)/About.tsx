import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="relative flex h-full w-full bg-[#001d24] px-4 pb-20 pt-12 md:px-16 md:pb-60 md:pt-16">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/about/bg.png"}
          alt="background"
          width={1024}
          height={564}
          className="h-auto w-full md:h-[1100px] md:w-[1100px]"
        />
      </div>
      <div className="z-50 flex w-full flex-col gap-8 md:gap-14">
        <div>
          <h1 className="text-center font-times_new_roman text-5xl font-[400] uppercase text-[#FEFFFF] md:text-[15vw] md:tracking-[8px]">
            EL PUEBLO
          </h1>
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-8 px-0 md:flex-row md:px-8">
          <motion.div
            className="flex flex-col gap-4 md:mt-8 md:gap-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="max-w-[450px] font-poppins text-sm font-[300] uppercase text-[#d7d7d7] md:mt-8 md:text-xl">
              El Pueblo is a Basque-influenced Spanish tapas bar and restaurant
              nestled in the heart of Huyton Village. Established in 2019, our
              mission is to bring a slice of Spain to the local community by
              offering authentic flavours, savory small plates, and a warm,
              inviting atmosphere
            </p>
            <div>
              <Link href={"/menu"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#C5DAE8] px-6 py-6 uppercase text-black hover:bg-[#bedaec] md:px-7 md:py-7">
                  <ArrowRight />
                  Order Now
                </Button>
              </Link>
            </div>
          </motion.div>
          <div>
            <motion.img
              src="/images/home/about/image.png"
              alt="image"
              className="h-auto w-full"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="md:mt-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="max-w-[450px] font-poppins text-sm font-[300] uppercase text-[#d7d7d7] md:text-xl">
              El Pueblo is a Basque-influenced Spanish tapas bar and restaurant
              nestled in the heart of Huyton Village. Established in 2019, our
              mission is to bring a slice of Spain to the local community by
              offering authentic flavours, savory small plates, and a warm,
              inviting atmosphere
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
