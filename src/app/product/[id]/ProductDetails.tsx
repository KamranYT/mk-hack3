// File: app/product/[id]/ProductDetails.tsx (Client-Side)
"use client";

import { useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";
import { Product } from "@/types/product";

interface ProductDetailsProps {
  product: Product; // Updated to use Product type instead of any
}

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

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isInStock = product.stockLevel > 0;
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="w-full md:w-1/3">
          {product.image && (
            <div className="relative w-full h-64 md:h-96 mb-4">
              <Image
                src={urlForImage(product.image).url()}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-2xl font-bold text-red-500">
              {isNaN(Number(product.price))
                ? "0.00"
                : Number(product.price).toFixed(2)}{" "}
              {/* Check if price is a valid number */}
            </p>

            {product.price && (
              <p className="text-lg line-through text-gray-400">
                {isNaN(Number(product.price))
                  ? "0.00"
                  : Number(product.price).toFixed(2)}{" "}
                {/* Same check here */}
              </p>
            )}

            <span
              className={`px-3 py-1 rounded text-sm ${
                isInStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {isInStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="bg-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            Add to cart
          </button>

          {/* Additional Details */}
          <div className="mt-8">
            <p className="mb-2">
              <strong>Categories:</strong>{" "}
              {product.categories?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>Tags:</strong> {product.tags?.join(", ") || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="border-b flex gap-6 text-gray-600">
          <button
            className={`pb-2 ${activeTab === "description" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-600"}`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
          <button
            className={`pb-2 ${activeTab === "info" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-600"}`}
            onClick={() => handleTabClick("info")}
          >
            Additional Info
          </button>
          <button
            className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-600"}`}
            onClick={() => handleTabClick("reviews")}
          >
            Reviews
          </button>
          <button
            className={`pb-2 ${activeTab === "video" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-600"}`}
            onClick={() => handleTabClick("video")}
          >
            Video
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "description" && (
            <>
              <h3 className="text-lg font-bold mb-4">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </>
          )}

          {activeTab === "info" && (
            <>
              <h3 className="text-lg font-bold mb-4">Additional Info</h3>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>High-quality materials for durability</li>
                <li>Available in multiple colors</li>
                <li>Perfect for both home and office use</li>
              </ul>
            </>
          )}

          {activeTab === "reviews" && (
            <>
              <h3 className="text-lg font-bold mb-4">Reviews</h3>
              <p className="text-gray-700">No reviews yet!</p>
            </>
          )}

          {activeTab === "video" && (
            <>
              <h3 className="text-lg font-bold mb-4">Video</h3>
              <p className="text-gray-700">No video available yet.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
