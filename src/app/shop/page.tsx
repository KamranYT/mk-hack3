import SHOP from '@/components/Shop'
import React from 'react'

const Shop = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Hekto Shop
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Shop</span>
        </p>
      </div>
      <SHOP />
    </div>
  )
}

export default Shop