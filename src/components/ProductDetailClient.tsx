import { client } from "@/lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  // Fetch the product data from Sanity based on the id
  const query = `*[_type == "product" && _id == $id][0] {
    name,
    description,
    price,
    originalPrice,
    _id,
    image,
    stockLevel,
    categories,
    tags
  }`;

  const product = await client.fetch(query, { id });

  if (!product) {
    notFound(); // Show 404 if the product doesn't exist
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        Home &gt; Pages &gt; Product Details
      </div>

      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {product.image && (
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={urlForImage(product.image).url()}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
          {/* Placeholder for additional images */}
          <div className="grid grid-cols-3 gap-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-20 border rounded-md"
              >
                <Image
                  src={urlForImage(img).url()}
                  alt={product.name}
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
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xl font-semibold text-red-500">
              ${product.price}
            </p>
            <p className="text-lg line-through text-gray-400">
              ${product.originalPrice}
            </p>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
              {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500">
            Add to Cart
          </button>

          {/* Additional Details */}
          <div className="mt-8">
            <p>
              <strong>Categories:</strong> {product.categories?.join(", ")}
            </p>
            <p>
              <strong>Tags:</strong> {product.tags?.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        <div className="border-b flex gap-6 text-gray-600">
          <button className="pb-2 border-b-2 border-blue-600 text-blue-600">
            Description
          </button>
          <button className="pb-2 hover:text-blue-600">Additional Info</button>
          <button className="pb-2 hover:text-blue-600">Reviews</button>
          <button className="pb-2 hover:text-blue-600">Video</button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Description</h3>
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
