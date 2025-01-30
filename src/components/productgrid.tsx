import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import React from "react";

export const getProdctsData = async () => {
  const res =
    await client.fetch(`*[_type=="product" && _id in ["8ptia17TGb7SGzDviwYL8G", "8ptia17TGb7SGzDviwYZhs", "gbTY3B2TxF1zfilLOh7ZwD", "gbTY3B2TxF1zfilLOh7FG0"]]{
    name,
    description,
    price,
    _id,
    image,
    stockLevel
  }`);
  return res;
};
// *[_type=="product" && _id in["gbTY3B2TxF1zfilLOh7ZwD", "gbTY3B2TxF1zfilLOh7FG0"]]{
interface IProduct {
  name: string;
  description: string;
  _id: string;
  price: number;
  image: IImage;
  stockLevel: number;
}

export default async function ProductGrid() {
  const data: IProduct[] = await getProdctsData();

  return (
    <div className="max-width max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product._id}`} passHref>
              {/* Wrap the whole card with a Link */}
              <div className="cursor-pointer">
                {product.image && (
                  <div className="relative w-full h-0 pb-[75%]">
                    <Image
                      src={urlForImage(product.image).url()}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}
                <h2 className="text-lg font-semibold mt-4 text-[#FB2E86]">
                  {product.name}
                </h2>
                <h3 className="text-[#151875] mt-2 justify-center items-center">
                  ${product.price}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
