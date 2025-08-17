"use client"
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description:string
  colors?: string[];
}



const products: Products[] = [
{
  id: 1,
    name: "Red gaming pad",
    image: "/Images/red gamingpad.png",
    description:"HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,  
},
{
  id: 2,
    name: "Keyboard",
    image: "/Images/keyboard.png",
    description:"AK-900 Wired Keyboard",
    price: 960,
    rating: 4,  
},
{
  id: 3,
    name: "Television",
    image: "/Images/television.png",
    description:"IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,  
},
{
  id: 4,
    name: "chair",
    image: "/Images/chair.png",
    description:"S-Series Comfort Chair",
    price: 375,
    rating: 5,  
},

]



const Sales: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    

  return (
    <section className="py-12 text-center  border-b-2 border-gray-300">
      <div className="display: flex mb-4">

        <div>
        <div className="mb-8 flex items-center">
          <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
         <span className="text-red-600 font-semibold">Today&#39;s</span>

         <div>
          
         </div>
        </div>
      
        </div>
      </div>
      <div className="flex gap-20">
<h2 className="text-3xl font-bold mb-8 ">Flash Sales</h2>
<div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Days</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</div>
                        </div>
                        <div className="text-red-800 text-2xl">:</div>
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Hours</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</div>
                        </div>
                        <div className="text-red-800 text-2xl">:</div>
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Minutes</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        </div>
                        <div className="text-red-800 text-2xl">:</div>
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Seconds</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        </div>
                    </div>
      </div>

  
                




      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 w-250">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 relative group"
          >
            <div>
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded"
                width={500}
                height={0}
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
          </div>
        ))}
      </div>
      <button className="bg-red-600 text-white w-38 h-10 mt-5 rounded-md mb-10">
        View All Products
      </button>
      
    </section>
  );
};
export default Sales;


