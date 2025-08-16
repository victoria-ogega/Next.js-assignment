
// function homepage() {
//   return (
//     <div>
//       <div className="flex gap-55 bg-black text-white p-3">
//         <p className="pl-89">Summer sale for all swim suits and free express delivery - OFF 50%!  <strong className="underline">ShopNow</strong></p>

//         <p>English</p>
//       </div>
//       <header className="flex gap-45 mt-5 border-b-2 border-gray-200 p-2 ">

//         <h1 className="pl-25 text-lg mt-1"> <strong>Exclusive</strong></h1>

//         <div className="flex gap-6 mt-2">
//           <p className="underline">Home</p>
//           <p> Contact</p>
//           <p>About us</p>
//           <p>Sign up</p>
//         </div>
//         <div className="flex gap-15">
//           <MdSearch className="absolute left-266 top-1/7  text-gray-500 text-2xl" />
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             className=" rounded-md p-2 text-gray-800 bg-gray-100 w-65 pl-4"

//           />
//           <div className="flex gap-3 mt-3 ">
//             <CiHeart className="text-2xl"></CiHeart>
//             <IoCartOutline className="text-2xl"></IoCartOutline>
//           </div>
//         </div>
//       </header>
//       <div className="flex gap-10 ">
//         <div className=" pl-27 pt-10 w-80 border-r-2 border-gray-300">
//           <p className="flex gap-13 ">Woman's Fashion <MdArrowForwardIos className="mt-1"></MdArrowForwardIos ></p>
//           <p className="flex gap-18 ">Men's Fashion <MdArrowForwardIos className="mt-1"></MdArrowForwardIos></p>
//           <p>Electronics</p>
//           <p>Home & lifestyle</p>
//           <p>Medicine</p>
//           <p>Sports & outdoor</p>
//           <p>Baby's & TOys</p>
//           <p>Groceries & pets</p>
//           <p>Health & Beauty</p>
//         </div>

        


//       <div className="flex gap-33 mt-30">
//         <p className="text-2xl ml-25"><strong>Flash Sales</strong></p>
//         <div className="flex gap-113">
//           <div className="flex gap-5">
//             <div className="flex">
//               <p>Days <br></br> <strong className="text-2xl">03</strong> </p>
//               <p className="text-2xl text-red-900 mt-6">:</p>
//             </div>

//             <div className="flex">
//               <p>Hours <br></br> <strong className="text-2xl">23</strong> </p>
//               <p className="text-2xl text-red-900 mt-6">:</p>
//             </div>

//             <div className="flex">
//               <p>Minutes <br></br> <strong className="text-2xl">19</strong> </p>
//               <p className="text-2xl text-red-900 mt-6">:</p>
//             </div>
//             <div className="flex">
//               <p>Seconds <br></br> <strong className="text-2xl">56</strong> </p>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <FaArrowLeft className="mt-8 text-2xl p-1 bg-gray-300 rounded-md"></FaArrowLeft>
//             <FaArrowRight className="mt-8 text-2xl p-1 bg-gray-300 rounded-md"></FaArrowRight>
//           </div>
//         </div>

//       </div>
//       <div className="flex gap-20 ml-30 mt-5 ">
//         <div>
//           {/* Picture box */}
//           <div className="pl-10 pt-2 w-50 h-40 bg-gray-100">

//             <div className="flex gap-20  ">
//               <p className="bg-red-700 pl-2 w-11 h-6 rounded-md text-white text-sm">-40%</p>
//               <div>
//                 <CiHeart className="text-xl"></CiHeart>
//                 <IoEyeOutline className="text-xl"></IoEyeOutline>
//               </div>

//             </div>

//          




//       </div>
//       <div className="mt-5 border-b-2 border-gray-200 h-25">
//         <button className="bg-red-500 p-2 mt-5 rounded-md text-white ml-150 text-sm">
//           View All Products
//         </button>
//       </div>
//       <p className="text-red-500 mt-15 ml-30"><strong>Categories</strong></p>

//       <div className="border-b-2 border-gray-200 h-60">
//         <div className="flex ml-30 gap-170 mt-5">
//           <p><strong className="text-3xl">Browse By Category</strong></p>
//           <div className="flex mt-3 gap-4">
//             <FaArrowLeft className="text-2xl p-1 bg-gray-300 rounded-md"></FaArrowLeft>
//             <FaArrowRight className="text-2xl p-1 bg-gray-300 rounded-md" ></FaArrowRight>

//           </div>
//         </div>
//         {/* icons container */}
//         <div className="flex mt-10 gap-4   ">

//           <div className="border-2 border-gray-100 ml-30 w-40 pl-9 pt-3 h-30">
//             <IoIosPhonePortrait className="text-7xl"></IoIosPhonePortrait>
//             <p className="pl-2">Phones</p>
//           </div>

//           <div className="border-2 border-gray-100 w-40 pl-10 pt-2 h-30">
//             <HiOutlineComputerDesktop className="text-7xl"></HiOutlineComputerDesktop>
//             <p className="pl-1">Computers</p>
//           </div>

//           <div className="border-2 border-gray-100 w-40 p-2 h-30 pl-10">
//             <BsSmartwatch className="text-7xl"></BsSmartwatch >
//             <p>Smart watch</p>
//           </div>
//           <div className="border-2 border-gray-100 w-40 pl-10 h-30">
//             <CiCamera className="text-7xl"></CiCamera >
//             <p className="pl-1">Camera</p>
//           </div>
//           <div className="border-2 border-gray-100 w-40 pl-10 h-30">
//             <PiHeadphones className="text-7xl"></PiHeadphones>
//             <p className="pl-0">Headphones</p>
//           </div>
//           <div className="border-2 border-gray-100 w-40 pl-10 h-30">
//             <MdOutlineVideogameAsset className="text-7xl"></MdOutlineVideogameAsset>
//             <p>Gaming</p>
//           </div>


//         </div>



import Sales from "./sales";      
import Products from "./Products";
import { Browse } from "./BrowseCategories";
import Categories from "./Categories";
import Selling from "./Selling-products";
import Newarrivals from "./NewArrivals";
import Footer from "./shared-components";
import Hero from "@/Herosection";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to my portfolio
        </h1>
        <div className="flex flex-col items-center justify-center">
        </div>
        <Hero/>
        <Sales/>
         <Browse/>
         <Selling/>
         <Categories/>
        <Products/>
        <Newarrivals/>
        <Footer/>
    </div>
  );
}