// pages/centeredPage.tsx
"use client";

import React from "react";
import Link from "next/link";


const centeredPage = () => {
  return (
    <div
      className="lg:w-[1420px] xl:h-[462px] md:w-[10px] bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/bg1.png')", // Replace with your background image path
      }}
    >
      {/* Text Content */}
      <div className="text-center bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-5xl font-bold text-[35px] text-[#151875] mb-4">
          Get Latest Update By <hr />Subscribe
          
          Our Newsletter
        </h1>

        <Link href="/shop">
          <button className="bg-[#FB2E86] text-white px-6 py-3 mt-9 hover:bg-pink-700 transition-all duration-300">
            Shop Now
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default centeredPage;

