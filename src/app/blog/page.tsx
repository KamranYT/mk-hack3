import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  imageUrl: string;
  title: string;
  content?: string;
  excerpt: string;
  category: string;
  date: string;
}

const blogData: Blog[] = [
  {
    id: "1",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "Aug 22, 2023",
    category: "Self Fashion",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repellat exercitationem vel! Velit doloribus illum ex ipsam voluptatem cupiditate, voluptate autem nesciunt quibusdam cum, exercitationem pariatur vitae non consequuntur laborum.",
    imageUrl: "/blog1.png",
  },
  {
    id: "2",
    title: "Aenean vitae in aliquam ultrices lectus.",
    date: "Aug 20, 2023",
    category: "Self Fashion",
    excerpt: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    imageUrl: "/blog2.png",
  },
  {
    id: "3",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "Aug 20, 2023",
    category: "Self Fashion",
    excerpt: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    imageUrl: "/blog3.png",
  },
];

export default function BlogPage() {
  const blogs = blogData;

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold text-gray-500">
          No blogs available.
        </h1>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Blog Page
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages <span className="text-[#FB2E86]">. Blog Page</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 mt-8">
        {/* Blog Content Section */}
        <div className="lg:w-3/4 flex flex-col items-center">
          {blogs.map((blog: Blog) => (
            <div
              key={blog.id}
              className="mb-12 w-full sm:w-[400px] lg:w-[500px] flex flex-col items-center text-center"
            >
              {/* Blog Image */}
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={500}
                height={300}
                className="rounded-md object-cover"
              />
              {/* Blog Details */}
              <div className="mt-4">
                <div className="text-sm text-[#151875]">
                  {blog.category} • {blog.date}
                </div>
                <h2 className="text-2xl font-bold mt-2">{blog.title}</h2>
                <p className="mt-2 text-gray-700">{blog.excerpt}</p>
                <Link href={`/blog/${blog.id}`}>
                  <span className="text-blue-500 mt-4 block cursor-pointer hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="lg:w-1/4 space-y-8">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Self Fashion (12)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Fitness (8)
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {blogs.slice(0, Math.min(blogs.length, 3)).map((blog: Blog) => (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <span className="text-gray-600 hover:text-blue-500 cursor-pointer">
                      {blog.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
