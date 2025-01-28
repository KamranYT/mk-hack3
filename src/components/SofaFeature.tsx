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
//           Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails
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



// // import Image from "next/image";
// // import { client } from "@/sanity/lib/client";
// // import { Image as IImage } from "sanity";
// // import { urlForImage } from "@/sanity/lib/image";

// // // Fetching a single product by index and wrapping it in an array
// // export const getProductsData = async () => {
// //   const res = await client.fetch(`*[_type=="product"][2]{
// //     name,
// //     description,
// //     price,
// //     _id,
// //     image,
// //     stockLevel
// //   }`);
// //   return [res]; // Wrap in an array
// // };

// // interface IProduct {
// //   name: string;
// //   description: string;
// //   _id: string;
// //   price: number;
// //   discountPercentage: number;
// //   image: IImage;
// // }

// // export default async function TopCategories() {
// //   const data: IProduct[] = await getProductsData();

// //   return (
// //     <section className="py-16 px-4">
// //       {/* Heading */}
// //       <h1 className="text-4xl font-bold text-center text-[#151875] mb-10">
// //         Top Categories
// //       </h1>

// //       {/* Grid Section */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
// //         {data.map((item) => (
// //           <div
// //             key={item._id}
// //             className="flex flex-col items-center justify-center"
// //           >
// //             {/* Circular Box with Shadow */}
// //             <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full flex items-center justify-center relative shadow-lg">
// //               <Image
// //                 src={urlForImage(item.image).url()}
// //                 alt={item.description}
// //                 width={150}
// //                 height={150}
// //                 className="object-contain"
// //               />
// //             </div>
// //             {/* Title and Price */}
// //             <h2 className="text-lg font-semibold text-[#151875] mt-4">
// //               {item.name}
// //             </h2>
// //             <p className="text-sm text-[#151875] mt-1">${item.price}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

import Image from "next/image";

const SofaFeature: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 bg-[#F1F0FF]">
      <div className="relative flex-shrink-0">
        <div className="xl:w-[481px] xl:h-[449px] w-[250px] h-[240px] bg-[#F5E1FC] rounded-full flex items-center justify-center lg:w-[481px] lg:h-[449px]">
          <Image src="/sofa1.png" width={200} height={200} alt="Sofa" className="xl:w-[558px] xl:h-[550px] w-[200px] object-contain" />
        </div>
      </div>
      <div className="flex flex-col max-w-lg text-left">
        <h2 className="text-[#151875] text-3xl font-bold mb-4">Unique Features Of leatest & Trending Products</h2>
        <p className="text-[#ACABC3] mb-4">All frames constructed with hardwood solids and laminates</p>
        <p className="text-[#ACABC3] mb-4">Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails</p>
        <p className="text-[#ACABC3] mb-6">Arms, backs and seats are structrally reinforced</p>
        <div className="flex gap-10">
        <button className="bg-[#F52B70] text-white w-40  px-6 py-3 rounded-lg transition">Shop Now</button>
        <h1 className="text-[#151875] font-bold tracking-wider">B&B Italia Sofa <br /> 32$</h1>
        </div>
      
      </div>
    </div>
  );
};
  export default SofaFeature