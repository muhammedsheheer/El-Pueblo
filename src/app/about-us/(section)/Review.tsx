"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { motion } from "framer-motion";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] pb-8 md:px-0 lg:pb-0">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:gap-8 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.h1
              className="pb-6 text-center font-poppins text-3xl font-[400] uppercase tracking-[3.2px] text-[#616161] md:pb-16 md:text-7xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              what our customers say
            </motion.h1>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center p-4 md:p-0">
          {/* <div className="absolute left-0 top-0 hidden md:block">
            <h1
              className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
              style={{
                background:
                  "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SDK{" "}
            </h1>
          </div> */}
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent>
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className={`ml-4 flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none md:ml-0 md:basis-1/4 ${
                        index % 2 === 0 ? "bg-[#ECF8F9]" : "bg-transparent"
                      }`}
                    >
                      <div
                        className={`flex h-[350px] flex-col gap-6 border px-6 py-8 ${
                          index % 2 === 0
                            ? "border-[#ECF8F9] bg-[#ECF8F9]"
                            : "border-[#CFAC6A] bg-transparent"
                        }`}
                      >
                        <div className="mt-8 flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#C9AB81]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <p
                            className={`font-cormorant line-clamp-6 text-center text-sm font-[500] uppercase md:px-4 lg:leading-[120%] ${
                              index % 2 === 0
                                ? "text-[#3D97B3]"
                                : "text-[#C9AB81]"
                            } `}
                          >
                            {review.text.text}
                          </p>
                          <p
                            className={`font-cormorant text-center text-sm font-[500] uppercase leading-[120%] md:mt-4 ${
                              index % 2 === 0
                                ? "text-[#3D97B3]"
                                : "text-[#C9AB81]"
                            } `}
                          >
                            {review.authorAttribution.displayName}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#CFAC6A] text-[#CFAC6A] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#CFAC6A] text-[#CFAC6A] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
