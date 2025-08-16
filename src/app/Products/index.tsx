import { MdSearch } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import { IoEyeOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  isNew?: boolean;
  description:string
  colors?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Dog Food",
    image: "/dogFood.png",
    description:"Breed Dry Dog Food",
    price: 100,
    rating: 5,
   
  },
  { id: 2,
    name: "CANON Camera",
    image: "/camera.png",
    description:"CANON EOS Camera",
    price: 360,
    rating: 4,
   
 },

  { 
    id: 3, 
    name: " Asus laptop",
     image: "/asuslaptop.png",
     description:"ASUS FHD Gaming Laptop", 
     price: 700,
      rating: 5,
 
 },
  {
    id: 4,
    name: "Skincare",
    image: "/3_bottles.png",
    description:"Curology Product Set",
    price: 500,
    rating: 5,
   
  },
  {
    id: 5,
    name: "Electric toy-car",
    image: "/red-car.png",
    description:"Kid's Electric Car",
    price: 960,
    rating: 4,
    isNew: true,
    colors: ["#FF0000", "#000000"],
  },
  {
    id: 6,
    name: "Sport Shoes",
    image: "/yellow-shoes.png",
    description:"Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    colors: ["#FFFF00", "#000000"],
  },
  {
    id: 7,
    name: "Game pad",
    image: "/gamepad.png",
    description:"GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4,
    isNew: true,
    colors: ["#FF0000", "#000000"],
  },
  {
    id: 8,
    name: "Green acket",
    image: "/greenjacket.png",
    description:"Quilted Satin Jacket</strong",
    price: 660,
    rating: 4,
    colors: ["#004D40", "#FF0000"],
  },
];


const Products: React.FC = () => {
  return (
    <section className=" py-12 text-center  ">
      <div className="display: flex mb-4">
        <div>
        <div className="mb-8 flex items-center">
          <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
          <span className="text-red-600 font-semibold">Our Products</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
        </div>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 w-250">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 relative group"
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2 ">
                <button className="bg-white p-2 rounded-full shadow">
                 {< CiHeart></CiHeart>}
                </button>
                <button className="bg-white p-2 rounded-full shadow ">
                 {<IoEyeOutline ></IoEyeOutline>}
                </button>
              </div>
            </div>
            <p className="text-sm mt-2">{product.description}</p>
          <div className="flex items-center ml-16 space-x-4">
            <br></br>
          <p className="text-red-500 font-bold mt-3">${product.price}</p>
            <div className="text-yellow-600">
              {"★".repeat(Math.floor(product.rating)) }
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
          </div>
            {product.colors && (
              <div className="flex gap-2 mt-2 ml-15">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="mt-10 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
        View All Products
      </button>
    </section>
  );
};
export default Products;
