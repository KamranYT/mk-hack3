// "use client";

// import Image from "next/image";
// import { CustomButton } from "./CustomButton";

// function Hero() {
//   const handleScroll = () => {
//     const nextSection = document.getElementById("discover");
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="max-width hero flex flex-col xl:flex-row items-center xl: justify-between xl:pt-20 px-6 sm:px-10">
//       {/* Text Section */}
//       <div className="flex-1 text-center xl:text-left">
//         <h1 className="hero__title text-2xl sm:text-4xl xl:text-5xl font-bold mb-4">
//           <span className="text-pink-600 font-medium text-base sm:text-lg xl:text-xl">
//             Best Furniture For Your Castle...
//           </span>
//           <br />
//           New Furniture Collection Trends in 2020
//         </h1>

//         <p className="hero__subtitle text-gray-600 text-sm sm:text-base xl:text-lg mb-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//         </p>

//         <CustomButton
//           title="Shop Now"
//           containerStyles="bg-pink-500 text-white mt-3 sm:mt-5 py-3 px-6 rounded-md hover:bg-pink-600 transition-all duration-300"
//           handleClick={handleScroll}
//         />
//       </div>

//       {/* Image Section */}
//       <div className="hero__image-container mt-8 xl:mt-0 flex justify-center xl:justify-end flex-1">
//         <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[629px] xl:h-[629px]">
//           <Image
//             src="/sofa.png"
//             alt="hero"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
"use client";

import { client } from "@/lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

const Hero = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const index = 0;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const query = `*[_type == "product"][${index}] {
          _id,
          name,
          price,
          discountPercentage,
          image,
          description
        }`;

        const fetchedProduct: Product = await client.fetch(query);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [index]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="max-width hero flex flex-col xl:flex-row items-center xl:justify-between xl:pt-20 px-6 sm:px-10">
      {loading ? (
        // Skeleton Loader (Matching Layout)
        <div className="flex flex-col xl:flex-row items-center w-full">
          {/* Left (Text Skeleton) */}
          <div className="flex-1 space-y-4 text-center xl:text-left">
            <div className="h-4 bg-gray-300 rounded-full w-40 mb-2 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded-md w-72 sm:w-96 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-md w-60 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-md w-48 animate-pulse"></div>

            {/* Button Skeleton */}
            <div className="h-10 w-36 bg-gray-300 rounded-md animate-pulse"></div>
          </div>

          {/* Right (Image Skeleton) */}
          <div className="flex-1 flex justify-center xl:justify-end mt-8 xl:mt-0">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 2xl:w-[629px] 2xl:h-[629px] bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      ) : (
        product && (
          <>
            {/* Text Content */}
            <div className="flex-1 text-center xl:text-left">
              <h1 className="hero__title text-2xl sm:text-4xl xl:text-5xl font-bold mb-4">
                <span className="text-pink-600 font-medium text-base sm:text-lg xl:text-xl">
                  Best Furniture For Your Castle...
                </span>
                <br />
                New Furniture Collection Trends in 2020
              </h1>

              <p className="hero__subtitle text-gray-600 text-sm sm:text-base xl:text-lg mb-6">
                {product.description}
              </p>

              <button
                className="bg-[#FB2E86] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#D92E5B] transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-[#FF3E6C]/50"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Shop Now
              </button>
            </div>

            {/* Image */}
            {product.image && (
              <div className="hero__image-container mt-8 xl:mt-0 flex justify-center xl:justify-end flex-1">
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 2xl:w-[629px] 2xl:h-[629px]">
                  <Image
                    src={urlForImage(product.image).url()}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Hero;
