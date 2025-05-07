import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000208] px-4 py-8 md:px-20 md:py-10">
      <div className="flex flex-col gap-6 md:gap-8">
        <motion.h6
          className="text-center font-poppins text-4xl font-[400] uppercase tracking-[3px] text-[#FFFFFF] md:text-5xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          el pueblo
        </motion.h6>
        {/* big screen */}
        <div className="hidden flex-row gap-4 md:flex">
          <div className="flex w-[33%] flex-col gap-4">
            <motion.img
              src="/images/home/gallery/1.png"
              alt="1"
              className="z-50 h-[200px] w-full md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.img
              src="/images/home/gallery/2.png"
              alt="2"
              className="z-50 h-[200px] w-full md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex w-[33%] flex-col gap-4">
            <motion.img
              src="/images/home/gallery/3.png"
              alt="3"
              className="z-50 h-[200px] w-full md:h-[804px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex w-[33%] flex-col gap-4">
            <motion.img
              src="/images/home/gallery/4.png"
              alt="4"
              className="z-50 h-[200px] w-full md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.img
              src="/images/home/gallery/5.png"
              alt="5"
              className="z-50 h-[200px] w-full md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
        {/* mobile screen */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          <motion.img
            src="/images/home/gallery/1.png"
            alt="1"
            className="z-50 h-[200px] w-full md:h-[350px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/2.png"
            alt="2"
            className="z-50 h-[200px] w-full md:h-[350px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/4.png"
            alt="4"
            className="z-50 h-[200px] w-full md:h-[350px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/5.png"
            alt="5"
            className="z-50 h-[200px] w-full md:h-[350px]"
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

export default Gallery;
