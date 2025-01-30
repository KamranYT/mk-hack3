import React from "react";
import Image from "next/image";

const LatestBlog = () => {
  const blogs = [
    {
      title: "Top essentional Trends in 2021",
      code: "More off this less semelande lied much",
      description: "over tighty hell circa horse taped mighty",
      image: "/blog1.png", // Replace with actual image paths
    },
    {
      title: "Top essentional Trends in 2021",
      code: "More off this less semelande lied much",
      description: "over tighty hell circa horse taped mighty",
      image: "/blog2.png",
    },
    {
      title: "Smart Home Gadgets",
      code: "More off this less semelande lied much",
      description: "over tighty hell circa horse taped mighty",
      image: "/blog3.png",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-width max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Latest Blog
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} // Optional height for consistent card size
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={350}
                  height={360}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.code}</p>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              </div>
              <button className="underline xl:hover:text-pink-600 xl:mt-10">
                ReadMore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
