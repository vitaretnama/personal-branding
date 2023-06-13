
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Program from "./Program";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
    className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
    id="program"
  >
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <div className="flex flex-col w-full my-16" id="program">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
          >
            Program Kerja <span className="text-red-500">Sam Andreas</span>
          </motion.h3>
          {/* <motion.p
            variants={scrollAnimation}
            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
          >
            These are the stories of our customers who have joined us with
            great pleasure when using this crazy feature.
          </motion.p> */}
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <Program/>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  </div>
  );
};

export default Feature;
