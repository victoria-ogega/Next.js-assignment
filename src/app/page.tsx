import Sales from "./sales";
import Products from "./Products";
import { Browse } from "./BrowseCategories";
import Categories from "./Categories";
import Selling from "./Selling-products";
import Newarrivals from "./NewArrivals";
import Footer from "./shared-components";
import { Hero } from "@/Herosection";
import { Header } from "./shared-components/pages";
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