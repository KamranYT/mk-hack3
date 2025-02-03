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

// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { Image as IImage } from "sanity";
// import { urlForImage } from "@/sanity/lib/image";

// export const getProductsData = async () => {
//   const res =
//     await client.fetch(`*[_type=="product" && _id in ["gbTY3B2TxF1zfilLOh7ZwD", "gbTY3B2TxF1zfilLOh5rug", "BsnR1UsX7CpO8CtReEvVng", "BsnR1UsX7CpO8CtReEvGF2"]]{
//     name,
//     description,
//     price,
//     _id,
//     image,
//     stockLevel
//   }`);
//   return res;
// };

// interface IProduct {
//   name: string;
//   description: string;
//   _id: string;
//   price: number;
//   discountPercentage: number;
//   image: IImage;
// }

// // export default async function LatestProduct() {

// export default async function TopCategories() {
//   const data: IProduct[] = await getProductsData();

//   return (
//     <section className="py-16 px-4 ">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold text-center text-[#151875] mb-10">
//         Top Categories
//       </h1>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
//         {data.map((item) => (
//           <div
//             key={item._id}
//             className="flex flex-col items-center justify-center"
//           >
//             {/* Circular Box with Shadow */}
//             <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full flex items-center justify-center relative shadow-lg">
//               <Image
//                 src={urlForImage(item.image).url()}
//                 alt={item.description}
//                 width={150}
//                 height={150}
//                 className="object-contain"
//               />
//             </div>
//             {/* Title and Price */}
//             <h2 className="text-lg font-semibold text-[#151875] mt-4">
//               {item.name}
//             </h2>
//             <p className="text-sm text-[#151875] mt-1">${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
  image: IImage;
}

export default function TopCategories() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    getProductsData().then((res) => setData(res));
  }, []);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };

  return (
    <section className="py-12 px-4">
      {/* Heading */}
      <h1 className="text-[#151875] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
        Top Categories
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {data.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleProductClick(item._id)}
          >
            {/* Circular Box */}
            <div
              className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-[#F6F7FB] rounded-full flex items-center justify-center relative shadow-md transition-all duration-300 ${
                selectedProductId === item._id ? "scale-110 shadow-2xl" : ""
              }`}
            >
              <Image
                src={urlForImage(item.image).url()}
                alt={item.description}
                width={160}
                height={160}
                className="object-contain transition-all duration-300"
              />
              {selectedProductId === item._id && (
                <button
                  onClick={closeModal}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-green-600 transition"
                >
                  <Link href={`/product/${item._id}`}>View Detail</Link>
                </button>
              )}
            </div>

            {/* Title and Price */}
            <h2 className="text-lg sm:text-xl font-semibold text-[#151875] mt-4 text-center">
              {item.name}
            </h2>
            <p className="text-sm text-[#151875] mt-1">${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
