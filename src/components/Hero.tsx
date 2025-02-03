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
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

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
        if (!fetchedProduct) {
          throw new Error("No product found.");
        }
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false); // Stop loading after the fetch is done
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

  // If loading, show skeleton loader
  if (loading) {
    return (
      <div className="max-width hero flex flex-col xl:flex-row items-center xl:justify-between xl:pt-20 px-6 sm:px-10">
        {/* Skeleton Loader for Text */}
        <div className="flex-1 text-center xl:text-left animate-pulse">
          <div className="bg-gray-300 h-8 w-3/4 mb-4 rounded"></div>
          <div className="bg-gray-300 h-6 w-1/2 mb-6 rounded"></div>
          <div className="bg-gray-300 h-10 w-1/3 rounded"></div>
        </div>

        {/* Skeleton Loader for Image */}
        <div className="hero__image-container mt-8 xl:mt-0 flex justify-center xl:justify-end flex-1">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 2xl:w-[629px] 2xl:h-[629px] bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    );
  }

  // If there's an error, display error message
  if (error) {
    return (
      <div className="max-width hero flex flex-col xl:flex-row items-center xl:justify-between xl:pt-20 px-6 sm:px-10">
        <div className="text-center xl:text-left text-red-600 font-semibold">
          {error}
        </div>
      </div>
    );
  }

  // If no product or image is loaded, return null or a fallback
  if (!product) return null;

  return (
    <div className="max-width hero flex flex-col xl:flex-row items-center xl:justify-between xl:pt-20 px-6 sm:px-10">
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
    </div>
  );
};

export default Hero;
