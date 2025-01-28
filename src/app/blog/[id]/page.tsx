import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
  category: string;
  date: string;
}

// Static data for blogs
const blogData: Blog[] = [
  {
    id: "1",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "Aug 22, 2023",
    category: "Self Fashion",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repellat exercitationem vel! Velit doloribus illum ex ipsam voluptatem cupiditate, voluptate autem nesciunt quibusdam cum, exercitationem pariatur vitae non consequuntur laborum.",
    imageUrl: "/blog1.png",
  },
  {
    id: "2",
    title: "Aenean vitae in aliquam ultrices lectus.",
    date: "Aug 20, 2023",
    category: "Self Fashion",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/blog2.png",
  },
  {
    id: "3",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "Aug 20, 2023",
    category: "Self Fashion",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/blog3.png",
  },
];

// Fetch a single blog by ID from the static data
function getBlogData(id: string): Blog | undefined {
  return blogData.find((blog) => blog.id === id);
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params;
  const blog = getBlogData(id)

  if (!blog) {
    notFound();
  }

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-8 text-start px-4 sm:px-8 lg:px-64">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101750]">
          Single Blog
        </h1>
        <p className="text-sm mt-2 text-black">
          Home . Pages{" "}
          <span className="text-[#FB2E86]">. Single Blog</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-64 mt-8 items-start justify-center">
        {/* Blog Content */}
        <div className="lg:w-3/5 flex flex-col items-center text-center">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={500}
            height={300}
            className="w-full lg:w-[500px] rounded-md object-cover mb-8"
          />
          <div className="text-sm text-gray-500 mb-4">
            {blog.category} • {blog.date}
          </div>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg text-gray-700 leading-7 mb-6">{blog.content}</p>

          <Link href="/blog">
            <span className="text-blue-500 cursor-pointer hover:underline">
              ← Back to Blogs
            </span>
          </Link>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-2/5 flex flex-col items-center text-center space-y-8">
          {/* Search */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Categories */}
          <div className="w-full">
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
          <div className="w-full">
            <h3 className="font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {blogData.slice(0, Math.min(blogData.length, 3)).map((recentBlog) => (
                <li key={recentBlog.id}>
                  <Link href={`/blog/${recentBlog.id}`}>
                    <span className="text-gray-600 hover:text-blue-500 cursor-pointer">
                      {recentBlog.title}
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
