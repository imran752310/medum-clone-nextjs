import Categories from "@/Components/Home/Category";
import Hero from "../Components/Home/Hero";
import Blog from "@/Components/Home/Blogs";
import Newsletter from "@/Components/Home/Search";


export default function Home() {
  return (
   <div>
    <Hero />
    <Categories />
    <Blog />
    <Newsletter />
   </div>
  );
}
