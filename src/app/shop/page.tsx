import Image from "next/image";

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "/latest1.png" },
  { id: 2, name: "Product 2", price: "$25", image: "/latest1.png" },
  { id: 3, name: "Product 3", price: "$30", image: "/latest1.png" },
  { id: 4, name: "Product 4", price: "$35", image: "/latest1.png" },
  { id: 5, name: "Product 5", price: "$40", image: "/latest1.png" },
  { id: 6, name: "Product 6", price: "$45", image: "/latest1.png" },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center my-6">Our Shop</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Product Image with fixed width and height */}
            <div className="relative w-[270px] h-64"> {/* Fixed height */}
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full" /* Ensures full coverage */
              />
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Add to Cart ..
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;


