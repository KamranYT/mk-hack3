"use client";

import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Vel elit euismod",
    image: "/productGrid/chair1.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 2,
    name: "Ultricies condimentum imperdiet",
    image: "/productGrid/chair2.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 3,
    name: "Vitae suspendisse sed",
    image: "/productGrid/chair3.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 4,
    name: "Sed at fermentum",
    image: "/productGrid/bag.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    image: "/productGrid/watch1.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    image: "/productGrid/watch2.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    image: "/productGrid/headphone.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    image: "/productGrid/chair.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 9,
    name: "Pellentesque condimentum ac",
    image: "/productGrid/watch3.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 10,
    name: "Cras scelerisque velit",
    image: "/productGrid/camera.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 11,
    name: "Lectus vulputate faucibus",
    image: "/productGrid/headphone2.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
  {
    id: 12,
    name: "Purus risus, ut",
    image: "/productGrid/bag.png",
    price: "$26.00",
    discountPrice: "$40.00",
  },
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Handle Add to Cart
  // const handleAddToCart = (e: React.MouseEvent, product: any) => {
  //   e.stopPropagation(); // Prevent triggering parent onClick
  //   Swal.fire({
  //     position: "top-right",
  //     icon: "success",
  //     title: `${product.name} added to cart`,
  //     showConfirmButton: false,
  //     timer: 1000,
  //   });
  //   addToCart(product);
  // };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-[1171px] mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[270px] h-[280px] bg-white shadow-md rounded-lg flex flex-col items-center p-4 relative cursor-pointer"
          onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
        >
          {/* Action Buttons (Show when selected) */}
          <div
            className={`absolute left-3 top-1/3 transform -translate-y-1/2 space-y-2 transition-opacity duration-300 ${
              selectedProduct === product.id ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* 🛒 Add to Cart Button */}
            <button
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center"
              // onClick={(e) => handleAddToCart(e, product)}
            >
              <ShoppingCart className="w-5 h-5 text-purple-600" />
            </button>

            {/* 👁 View Button */}
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center">
              <Eye className="w-5 h-5 text-purple-600" />
            </button>

            {/* ❤️ Wishlist Button */}
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          {/* Product Image */}
          <div className="w-[140px] h-[140px] relative">
            <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
          </div>

          {/* Product Title */}
          <h3 className="text-sm text-center font-semibold mt-4 text-blue-900">
            {product.name}
          </h3>

          {/* Colored Dots */}
          <div className="flex space-x-2 mt-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
          </div>

          {/* Product Price */}
          <p className="text-gray-500 text-sm mt-2">
            <span className="text-black font-semibold">{product.price}</span>{" "}
            <span className="line-through text-red-500">{product.discountPrice}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
