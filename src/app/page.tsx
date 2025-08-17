import Sales from "../Home/sales";
import Products from "../Home/Products";
import { Browse } from "../Home/BrowseCategories";
import Categories from "../Home/Categories";
import Selling from "../Home/Selling-products";
import Newarrivals from "../Home/NewArrivals";
import Footer from "../shared-components";
import { Hero } from "@/Home/Herosection";
import { Header } from "../shared-components/page";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <Hero />
      <Sales />
      <Browse />
      <Selling />
      <Categories />
      <Products />
      <Newarrivals />
      <Footer />
    </div>
  );
}