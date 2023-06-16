import React, { useMemo } from "react";
import Image from "next/image";
// import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Sentimen Positif",
      number: "390",
      icon: "/assets/Icon/chart.png",
    },
    // {
    //   name: "Countdown",
    //   number: "20:50:10",
    //   icon: "/assets/Icon/clock.png",
    // },
    {
      name: "Instagram",
      number: "@andreas.susetyo",
      icon: "/assets/Icon/instagram.png",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full" style={{
      backgroundImage: "url('/assets/backgroundandreas.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center'
    }}>
      <div className="max-w-screen-xl mt-12 px-8 xl:px-16 mx-auto" id="about">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-xl lg:text-9xl xl:text-5xl font-medium text-black-600 leading-normal">
                Sam Andreas
              </h1>
              <p className="text-black-500 mt-4 mb-6 text-5xl">
                Nawak <span className="text-maroon-500 text-6xl">Milenial</span>
              </p>
              <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-maroon-500 hover:shadow-orange-md transition-all outline-none">
                Play Video
              </button>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  quality={100}
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        {/* <div className="relative w-full flex   ">
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-2 py-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10 mb-[-70px]">
            {listUser.map((listUsers, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-70 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <img src={listUsers.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg text-black-600 font-bold">
                      {listUsers.number}
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt- mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
