import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaHandsClapping, FaHeartCirclePlus } from "react-icons/fa6";
import { IoIosSearch, IoLogoInstagram } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import BlogSidebar from "./BlogSidebar";

const Blog = () => {
  return (
    <div className="w-[90%] mx-auto my-20 px-4 md:px-6">
      {/* Blog Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">The Medium Blog</h1>
      </div>

      {/* Blog Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300 py-4 mb-8">
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <Link href="" className="border-r pr-4">Product</Link>
          <Link href="" className="border-r px-4">NewsLatest</Link>
          <Link href="" className="px-4">Newsletter</Link>
        </div>
        <div className="flex justify-start md:justify-end items-center gap-3 mt-4 md:mt-0">
          <div className="hidden md:flex gap-2 text-gray-500">
            <IoIosSearch size={22} />
            <FaFacebook size={21} />
            <IoLogoInstagram size={25} />
          </div>
          <button className="border text-xs text-green-600 px-3 py-1 rounded-full border-green-600 hover:bg-green-600 hover:text-white transition">
            Follow
          </button>
        </div>
      </div>

      {/* Blog Content & Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Blog Posts */}
        <div className="w-full lg:w-2/3">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border-b border-gray-300 pb-8 mb-8">
              {/* Author Info */}
              <div className="flex items-center gap-2 mb-4">
                <Image src="/image/post1.jpg" alt="Author" width={30} height={30} className="rounded-full" />
                <h3 className="text-sm font-medium">Dev Simplified by Neha Gupta</h3>
              </div>

              {/* Post Body */}
              <Link href="#" className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    Why Companies Are Saying Goodbye to Next.js?
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <div className="flex gap-5">
                      <p>Apr 2</p>
                      <p className="flex items-center gap-1"><FaHandsClapping /> 1.5K</p>
                      <p className="flex items-center gap-1"><TbMessageCircleFilled /> 84</p>
                    </div>
                    <div className="flex gap-4">
                      <CiCircleMinus />
                      <FaHeartCirclePlus />
                      <BsThreeDots />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[40%]">
                  <Image
                    src="/image/post1.jpg"
                    alt="Blog Post"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;
