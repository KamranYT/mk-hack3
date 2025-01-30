"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { Search } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: { asset: { url: string } };
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{_id, name, price, "image": image{asset->{url}}}`;
      const data = await client.fetch(query);
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  // Filter products based on search input
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchQuery, products]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Input */}
      <div className="flex border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-pink-500 px-4 flex items-center justify-center">
          <Search className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-full max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="flex items-center p-2 border-b hover:bg-gray-100"
              >
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div className="ml-3">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-500">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
