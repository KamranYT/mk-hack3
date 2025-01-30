import { client } from "@/lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  // Fetch the product data from Sanity based on the id
  const query = `*[_type == "product" && _id == $id][0]`;

  const product = await client.fetch(query, { id });

  if (!product) {
    notFound(); // Show 404 if the product doesn't exist
  }

  const isInStock = product.stockLevel > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Product Details
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Product Details</span>
        </p>
      </nav>

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

          {/* Additional Images (Placeholder logic for now) */}
          <div className="grid grid-cols-3 gap-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-20 border rounded-md overflow-hidden"
              >
                <Image
                  src={urlForImage(img).url()}
                  alt={`Additional view ${index + 1} of ${product.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-2xl font-bold text-red-500">
              ${parseFloat(product.price).toFixed(2) || "0.00"}
            </p>
            {product.originalPrice && (
              <p className="text-lg line-through text-gray-400">
                ${parseFloat(product.originalPrice).toFixed(2) || "0.00"}
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
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
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
          <button className="pb-2 border-b-2 border-blue-600 text-blue-600">
            Description
          </button>
          <button className="pb-2 hover:text-blue-600">Additional Info</button>
          <button className="pb-2 hover:text-blue-600">Reviews</button>
          <button className="pb-2 hover:text-blue-600">Video</button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Description</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula eros vel enim scelerisque, ut vehicula justo fringilla.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>High-quality materials for durability</li>
            <li>Available in multiple colors</li>
            <li>Perfect for both home and office use</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// export default async function ProductDetails({
//     params,
// }:{
//     params: Promise<{slug: string}>
// }){
//     const slug = (await params).slug
//     return
//     <div>my</div>
// }
