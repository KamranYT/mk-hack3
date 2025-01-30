import React from 'react'
import ProductGrid from '@/components/GridDefaultProduct'
import ProductHeader from '@/components/GridDefault'
const Grid = () => {
  return (
    <div>
        {/* Banner Section */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#101750]">
          Shop Grid Default
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Products</span>
        </p>
      </div>
        <ProductHeader />
        <ProductGrid />
    </div>
  )
}

export default Grid