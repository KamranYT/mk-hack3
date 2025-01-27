import React from 'react'
import Image from 'next/image'
function Under() {
  return (
    <>
        {/* Additional Image */}
<div className="mt-6 ">
<Image
  src="/bg1under.png" // Replace with your new image path
  alt="Additional Image"
  width={904} // Adjust the width of the image
  height={200} // Adjust the height of the image
  className="object-contain"
/>
    </div>
    </>
  )
}
export default Under;
