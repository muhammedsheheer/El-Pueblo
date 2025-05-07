"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <motion.h2
          className="text-center font-times_new_roman text-5xl text-[#fff] md:left-[15%] md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          The El Pueblo
          <br />
          Story
        </motion.h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="max-w-[500px] text-center font-times_new_roman text-5xl text-[#fff] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-poppins font-light leading-[160%] text-[#9C9E9F] md:text-start">
              What began as a simple vision—to reimagine the dining
              experience—has blossomed into <strong>El Pueblo</strong>, a
              culinary destination where flavour takes centre stage. Born from a
              deep-rooted passion for excellence, El Pueblo was founded with the
              desire to create dishes that transcend the ordinary and become
              memorable experiences.
              <br />
              From modest beginnings to becoming a cherished haven for food
              lovers, our unwavering commitment to quality, creativity, and warm
              hospitality has shaped every step of our journey. Every ingredient
              is carefully sourced, every dish crafted with precision, and every
              bite tells a story of taste and tradition.
              <br />
              At <strong>El Pueblo</strong>, we don’t merely serve meals—we
              create lasting moments. As we continue to grow, our mission
              remains clear: to fuse culinary artistry with bold, unforgettable
              flavour and offer a dining experience like no other.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
