import React from 'react'
import Image from 'next/image'

const BlogSidebar = () => {
  return (
    <div>
          <div className="w-[1/3]  xl:max-w-sm lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mt-5 pt-5">
            <a href="#">
              <Image
                className="rounded-t-lg w-full"
                src="/image/post3.webp"
                alt=""
                width={400}
                height={400}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
    </div>
  )
}

export default BlogSidebar