import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="relative flex h-full w-full bg-[#001d24] px-4 py-1 md:px-20 md:py-8">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="z-50 flex w-full flex-row gap-1">
        <div className="w-full md:w-[25%]">
          {" "}
          <motion.img
            src="/images/home/story/1.png"
            alt="1"
            className="h-[300px] w-full object-cover md:h-[750px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-[50%]">
          {" "}
          <motion.img
            src="/images/home/story/2.png"
            alt="2"
            className="h-[200px] w-full object-cover md:h-[500px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <h1 className="font-times_new_roman text-center text-2xl font-[400] uppercase text-[#CACBCB] md:text-9xl">
            PUEBLO <br />
            archives
          </h1>
        </div>
        <div className="w-full md:w-[25%]">
          {" "}
          <motion.img
            src="/images/home/story/3.png"
            alt="3"
            className="h-[300px] w-full object-cover md:h-[750px]"
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

export default Story;
