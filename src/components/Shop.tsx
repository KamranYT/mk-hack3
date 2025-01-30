"use client";

import { client } from "@/lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { allProdcts } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";

const SHOP = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProdcts);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading after fetching data
      }
    }
    fetchProduct();
  }, []);

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
    <div className="max-width max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {loading
          ? // Skeleton Loader
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 animate-pulse"
              >
                <div className="w-full h-60 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              </div>
            ))
          : // Product Cards
            product.map((item) => {
              const discountedPrice =
                item.price - (item.price * item.discountPercentage) / 100;
              return (
                <div
                  key={item._id}
                  className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
                >
                  <Link href={`/product/${item._id}`} passHref>
                    {item.image && (
                      <div className="w-full h-60 relative">
                        <Image
                          src={urlForImage(item.image).url()}
                          alt={item.name}
                          width={300}
                          height={200}
                          objectFit="cover"
                          className="rounded-md px-8 py-2  "
                        />
                      </div>
                    )}
                    <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
                    <div className="flex items-center mt-2">
                      <span className="text-[#151875] font-bold mr-2">
                        ${discountedPrice.toFixed(2)}
                      </span>
                      <span className="text-[#FB2448] line-through">
                        ${item.price}
                      </span>
                    </div>
                    <button
                      className="bg-[#FB2E86] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#D92E5B] transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-[#FF3E6C]/50"
                      onClick={(e) => handleAddToCart(e, item)}
                    >
                      Add to Cart
                    </button>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SHOP;
