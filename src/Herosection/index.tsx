
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";

function Hero(){
    return(
      
<div className="flex">
      <div>
         <ul>
              {[
                "Woman's Fashion",
                "Men's Fashion",
                "Electronics",
                "Home & lifestyle",
                "Medicine",
                "Sports & outdoor",
                "Baby's & Toys",
                "Groceries & pets",
                "Health & Beauty",
              ].map((link) => (
                <li key={link} className=" mb-2 text-sm">
                  <a
                    href={`/${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>   
        </div>



        <div className="">
<div className=" mt-10 bg-black w-200 pt-5 pb-7">
          <p className="text-white pl-30 pt-10"> < FaApple className="absolute left-103 top-52 text-white text-5xl "></FaApple>iphone 14 Series</p>
          <br></br>
          <h1 className="text-white pl-15 text-4xl "><strong>Up to 10%
            <br></br>off Voucher</strong></h1>
          <br></br>
          <p className="underline text-white pl-15 flex gap-3">Shop Now <FaArrowRight className="text-white mt-1"></FaArrowRight></p>
        </div>
      </div>
        </div>
    )

}
export default Hero