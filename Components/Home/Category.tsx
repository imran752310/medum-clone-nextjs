import Image from "next/image";

const categories = [
  {
    title: "Articles",
    image: "/image/post1.jpg",
  },
  {
    title: "Programming",
    image: "/image/post2.jpg",
  },
  {
    title: "AI",
    image: "/image/post3.webp",
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="lg:w-[85%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:text-left md:max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold">Categories</h2>
          <p className="mt-4 text-gray-600">
            Explore a wide range of topics — from programming to artificial intelligence
            and more. Find the content that inspires and informs.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-4 px-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
