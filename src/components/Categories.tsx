// "use client";

// import React from "react";
// import Image from "next/image";

// const categories = [
//   {
//     id: 1,
//     title: "Mini LCV Chair",
//     price: "$56.00",
//     image: "/top3.png", // Replace with your correct image path
//   },
//   {
//     id: 2,
//     title: "Elegant Table",
//     price: "$70.00",
//     image: "/top2.png", // Replace with your correct image path
//   },
//   {
//     id: 3,
//     title: "Modern Sofa",
//     price: "$120.00",
//     image: "/top1.png", // Replace with your correct image path
//   },
//   {
//     id: 4,
//     title: "Stylish Lamp",
//     price: "$45.00",
//     image: "/top3.png", // Replace with your correct image path
//   },
// ];

// const TopCategories = () => {
//   return (
//     <section className="py-16 px-4 ">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold text-center text-[#151875] mb-10">
//         Top Categories
//       </h1>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="flex flex-col items-center justify-center"
//           >
//             {/* Circular Box with Shadow */}
//             <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full flex items-center justify-center relative shadow-lg border-8 hover:border-[#7E33E0]">
//               <Image
//                 src={category.image}
//                 alt={category.title}
//                 width={150}
//                 height={150}
//                 className="object-contain"
//               />
//             </div>
//             {/* Title and Price */}
//             <h2 className="text-lg font-semibold text-[#151875] mt-4">
//               {category.title}
//             </h2>
//             <p className="text-sm text-blue-500 mt-1">{category.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TopCategories;

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const getProductsData = async () => {
  const res = await client.fetch(`*[_type=="product" && _id in ["gbTY3B2TxF1zfilLOh7ZwD", "gbTY3B2TxF1zfilLOh5rug", "BsnR1UsX7CpO8CtReEvVng", "BsnR1UsX7CpO8CtReEvGF2"]]{
    name,
    description,
    price,
    _id,
    image,
    stockLevel
  }`);
  return res;
};

interface IProduct {
  name: string;
  description: string;
  _id: string;
  price: number;
  discountPercentage: number;
  image: IImage;
}

// export default async function LatestProduct() {
  
export default async function TopCategories() {
    const data: IProduct[] = await getProductsData();

      return (
        <section className="py-16 px-4 ">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-[#151875] mb-10">
            Top Categories
          </h1>
    
          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {data.map((item) => (
              <div
                key={item._id}
                className="flex flex-col items-center justify-center"
              >
                {/* Circular Box with Shadow */}
                <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full flex items-center justify-center relative shadow-lg">
                  <Image
                    src={urlForImage(item.image).url()}
                    alt={item.description}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                {/* Title and Price */}
                <h2 className="text-lg font-semibold text-[#151875] mt-4">
                  {item.name}
                </h2>
                <p className="text-sm text-[#151875] mt-1">${item.price}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">Latest Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {data.map((item) => {
//           const discountedPrice = item.price - (item.price * item.discountPercentage) / 100;

//           return (
//             <div
//               key={item._id}
//               className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//             >
//               {item.image && (
//                 <div className="w-full h-60 relative">
//                   <Image
//                     src={urlForImage(item.image).url()}
//                     alt={item.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-md"
//                   />
//                 </div>
//               )}
//               <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
//               <div className="flex items-center mt-2">
//                 <span className="text-[#151875] font-bold mr-2">${discountedPrice.toFixed(2)}</span>
//                 <span className="text-[#FB2448] line-through">${item.price}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
