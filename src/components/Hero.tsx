"use client";

import Image from "next/image";
import { CustomButton } from "./CustomButton";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero flex flex-col xl:flex-row items-center xl: justify-between xl:pt-20 px-6 sm:px-10">
      {/* Text Section */}
      <div className="flex-1 text-center xl:text-left">
        <h1 className="hero__title text-2xl sm:text-4xl xl:text-5xl font-bold mb-4">
          <span className="text-pink-600 font-medium text-base sm:text-lg xl:text-xl">
            Best Furniture For Your Castle...
          </span>
          <br />
          New Furniture Collection Trends in 2020
        </h1>

        <p className="hero__subtitle text-gray-600 text-sm sm:text-base xl:text-lg mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        </p>

        <CustomButton
          title="Shop Now"
          containerStyles="bg-pink-500 text-white mt-3 sm:mt-5 py-3 px-6 rounded-md hover:bg-pink-600 transition-all duration-300"
          handleClick={handleScroll}
        />
      </div>

      {/* Image Section */}
      <div className="hero__image-container mt-8 xl:mt-0 flex justify-center xl:justify-end flex-1">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[629px] xl:h-[629px]">
          <Image
            src="/sofa.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
