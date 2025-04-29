// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="bg-[#F7F4ED] border-y border-black">
//       <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center py-10 md:py-16 gap-8">
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left space-y-4">
//           {/* Optional Logo on small screens */}
//           <div className="md:hidden flex justify-center">
//             <Image
//               src="/image/medium.png"
//               alt="Medium"
//               width={150}
//               height={50}
//               className="mx-auto"
//             />
//           </div>
          
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif max-w-xl mx-auto md:mx-0">
//             <span className="underline decoration-black decoration-4">Medium</span>{" "}
//             is a place to write, read and connect
//           </h1>
//           <h2 className="text-base sm:text-lg text-gray-700">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, neque.
//           </h2>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 flex justify-center">
//           <Image
//             src="/image/herro.webp"
//             alt="Hero"
//             width={500}
//             height={300}
//             className="h-auto max-w-full md:h-64 lg:h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#F7F4ED] border-y">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-8 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          {/* Text and Left Image */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-lg">
            <Image
              className="mb-4 lg:mb-6"
              width={200}
              height={64}
              src={"/image/medium.png"}
              alt="Medium Logo"
              sizes="(max-width: 640px) 160px, 200px"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-md sm:max-w-lg font-serif leading-tight">
              <span className="underline decoration-black decoration-4">Medium</span> is a place to
              write, read, and connect
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, neque.
            </h2>
          </div>

          {/* Right Image */}
          <Image
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto"
            width={400}
            height={240}
            src={"/image/herro.webp"}
            alt="Hero Image"
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;