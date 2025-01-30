"use client";

import { useState } from "react";

const ProductHeader = () => {
  const [sort, setSort] = useState("best-match");
  const [view, setView] = useState("grid");

  return (
    <div className="w-full max-w-[1171px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 mb-6">
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Ecommerce Accessories & Fashion Items
        </h2>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-center mt-4 md:mt-0">
          {/* Per Page */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">Per Page:</span>
            <select className="border p-1 rounded-md text-sm">
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">Sort By:</span>
            <select
              className="border p-1 rounded-md text-sm"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="best-match">Best Match</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">View:</span>
            <button
              className={`p-2 border rounded-md ${
                view === "grid" ? "bg-gray-200" : ""
              }`}
              onClick={() => setView("grid")}
            >
              🔲
            </button>
            <button
              className={`p-2 border rounded-md ${
                view === "list" ? "bg-gray-200" : ""
              }`}
              onClick={() => setView("list")}
            >
              📄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
