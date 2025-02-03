import React from "react";
import Image from "next/image";

function Under() {
  return (
    <div className="flex justify-center items-center mt-6 px-4 md:px-6 lg:px-8">
      <Image
        src="/bg1under.png" // Replace with your new image path
        alt="Additional Image"
        width={904}
        height={200}
        className="w-full max-w-[904px] h-auto object-contain"
      />
    </div>
  );
}

export default Under;
