// import Image from "next/image";

// const SofaFeature: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-10 p-10 bg-[#F1F0FF] lg:flex-row lg:p-16 xl:w-[1920px] xl:h-[580px]">
//       <div className="flex items-center justify-center flex-shrink-0">
//         <div className="w-[300px] h-[300px] bg-[#F5E1FC] rounded-full flex items-center justify-center sm:w-[400px] sm:h-[400px] lg:w-[481px] lg:h-[449px]">
//           <Image
//             src="/sofa1.png"
//             width={250}
//             height={250}
//             alt="Sofa"
//             className="w-[250px] h-[250px] object-contain sm:w-[350px] sm:h-[350px] lg:w-[558px] lg:h-[550px]"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center max-w-lg text-center lg:items-center lg:text-center">
//         <h2 className="text-[#151875] text-2xl font-bold mb-4 sm:text-3xl">
//           Unique Features Of Latest & Trending Products
//         </h2>
//         <p className="text-[#ACABC3] mb-4 text-sm sm:text-base">
//           All frames constructed with hardwood solids and laminates
//         </p>
//         <p className="text-[#ACABC3] mb-4 text-sm sm:text-base">
//           Reinforced with double wood dowels, glue, screw-nails corner blocks
//           and machine nails
//         </p>
//         <p className="text-[#ACABC3] mb-6 text-sm sm:text-base">
//           Arms, backs and seats are structurally reinforced
//         </p>
//         <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-10">
//           <button className="bg-[#F52B70] text-white px-6 py-3 rounded-lg transition w-32 sm:w-40">
//             Shop Now
//           </button>
//           <h1 className="text-[#151875] font-bold tracking-wider text-sm sm:text-base lg:text-lg">
//             B&B Italia Sofa <br /> 32$
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SofaFeature;

import Image from "next/image";

const SofaFeature: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 bg-[#F1F0FF]">
      <div className="relative flex-shrink-0">
        <div className="xl:w-[481px] xl:h-[449px] w-[250px] h-[240px] bg-[#F5E1FC] rounded-full flex items-center justify-center lg:w-[481px] lg:h-[449px]">
          <Image
            src="/sofa1.png"
            width={200}
            height={200}
            alt="Sofa"
            className="xl:w-[558px] xl:h-[550px] w-[200px] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col max-w-lg text-left">
        <h2 className="text-[#151875] text-3xl font-bold mb-4">
          Unique Features Of leatest & Trending Products
        </h2>
        <p className="text-[#ACABC3] mb-4">
          All frames constructed with hardwood solids and laminates
        </p>
        <p className="text-[#ACABC3] mb-4">
          Reinforced with double wood dowels, glue, screw-nails corner blocks
          and machine nails
        </p>
        <p className="text-[#ACABC3] mb-6">
          Arms, backs and seats are structrally reinforced
        </p>
        <div className="flex gap-10">
          <button className="bg-[#F52B70] text-white w-40  px-6 py-3 rounded-lg transition">
            Shop Now
          </button>
          <h1 className="text-[#151875] font-bold tracking-wider">
            B&B Italia Sofa <br /> 32$
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SofaFeature;

// "use client";

// import { client } from "@/lib/sanityClient";
// import { urlForImage } from "@/sanity/lib/image";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Product } from "@/types/product";
// import Swal from "sweetalert2";
// import { addToCart } from "@/app/actions/actions";

// const SofaFeature = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const index = 2;

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const query = `*[_type == "product"][${index}] {
//             _id,
//             name,
//             price,
//             discountPercentage,
//             image,
//             description
//           }`;

//         const fetchedProduct: Product = await client.fetch(query);
//         setProduct(fetchedProduct);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProduct();
//   }, [index]);

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.name} added to cart`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//     addToCart(product);
//   };

//   return (
//     <div className="max-width hero flex flex-col xl:flex-row items-center xl:justify-between xl:pt-20 px-6 sm:px-10">
//       {loading ? (
//         // Skeleton Loader (Matching Layout)
//         <div className="flex flex-col xl:flex-row items-center w-full">
//           Left (Text Skeleton)
//           <div className="flex-1 space-y-4 text-center xl:text-left">
//             <div className="h-4 bg-gray-300 rounded-full w-40 mb-2 animate-pulse"></div>
//             <div className="h-8 bg-gray-300 rounded-md w-72 sm:w-96 animate-pulse"></div>
//             <div className="h-3 bg-gray-300 rounded-md w-60 animate-pulse"></div>
//             <div className="h-3 bg-gray-300 rounded-md w-48 animate-pulse"></div>

//             {/* // Button Skeleton  */}
//             <div className="h-10 w-36 bg-gray-300 rounded-md animate-pulse"></div>
//           </div>
//           {/* // Right (Image Skeleton)  */}
//           <div className="flex-1 flex justify-center xl:justify-end mt-8 xl:mt-0">
//             <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 2xl:w-[629px] 2xl:h-[629px] bg-gray-300 rounded-lg animate-pulse"></div>
//           </div>
//         </div>
//       ) : (
//         product && (
//           <>
//             {/* // Text Content  */}
//             <div className="flex-1 text-center xl:text-left">
//               <h1 className="hero__title text-2xl sm:text-4xl xl:text-5xl font-bold mb-4">
//                 <span className="text-pink-600 font-medium text-base sm:text-lg xl:text-xl">
//                   Best Furniture For Your Castle...
//                 </span>
//                 <br />
//                 New Furniture Collection Trends in 2020
//               </h1>

//               <p className="hero__subtitle text-gray-600 text-sm sm:text-base xl:text-lg mb-6">
//                 {product.description}
//               </p>

//               <button
//                 className="bg-[#FB2E86] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#D92E5B] transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-[#FF3E6C]/50"
//                 onClick={(e) => handleAddToCart(e, product)}
//               >
//                 Shop Now
//               </button>
//             </div>

//             {/* // Image  */}
//             {product.image && (
//               <div className="hero__image-container mt-8 xl:mt-0 flex justify-center xl:justify-end flex-1">
//                 <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 2xl:w-[629px] 2xl:h-[629px]">
//                   <Image
//                     src={urlForImage(product.image).url()}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             )}
//           </>
//         )
//       )}
//     </div>
//   );
// };

// export default SofaFeature;
