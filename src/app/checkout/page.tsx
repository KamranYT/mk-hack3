import React from "react";
import Checkout from "@/components/CheckOut";
const CheckOut = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64 w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Shopping Cart
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Shopping Cart</span>
        </p>
      </div>
      <Checkout />
    </div>
  );
};

export default CheckOut;
