import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";

export const getProductsData = async () => {
  const res = await client.fetch(`*[_type=="product"[2]]{
    name,
    description,
    price,
    _id,
    image,
    stockLevel,
    discountPercentage
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

export default async function LatestProduct() {
  const data: IProduct[] = await getProductsData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((item) => {
          const discountedPrice = item.price - (item.price * item.discountPercentage) / 100;

          return (
            <div
              key={item._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
            >
              {item.image && (
                <div className="w-full h-60 relative">
                  <Image
                    src="/contact.png"
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
              <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-[#151875] font-bold mr-2">${discountedPrice.toFixed(2)}</span>
                <span className="text-[#FB2448] line-through">${item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
