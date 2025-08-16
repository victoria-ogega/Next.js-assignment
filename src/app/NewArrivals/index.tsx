import Image from "next/image";
export default function Newarrivals(){
    return (
        <div className="w-250">
            <div className="mb-5">
            <div className="mb-8 flex items-center">
        <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
        <span className="text-red-600 font-semibold">Featured</span>
      </div>
      <h2 className="text-3xl font-bold mb-8">New Arrival</h2>
      <div className="grid grid-cols-3 gap-6 place-items-center justify-center">
        </div>
                <div className="flex gap-5">
                    <div className="">
                        <div className="">
                        <Image className="m-3" src="/Images/play-station.png"  alt="services" width={630} height={40} />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                        <Image className="m-3" src="/Images/woman.png"  alt="services" width={650} height={30} />
                        </div>
                        <div className=" flex">
                        <Image className="m-3" src="/Images/3 speaker.png"  alt="services" width={230} height={20} />
                        <Image className="m-3" src="/Images/gucci perfume.png"  alt="services" width={230} height={20} />
                        </div>
                    </div>
                </div>
                </div>


 <div className="flex justify-between items-center gap-6 py-10">
      <div className="flex flex-col items-center text-center max-w-xs">
        <Image
          className="mb-3"
          src="/Images/truck.png"
          alt="Delivery Icon"
          width={50}
          height={30}
        />
        <h4 className="font-bold mb-2">FREE AND FAST DELIVERY</h4>
        <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <Image
          className="mb-3"
          src="/Images/music.png"
          alt="Customer Service Icon"
          width={50}
          height={30}
        />
        <h4 className="font-bold mb-2">24/7 CUSTOMER SERVICE</h4>
        <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <Image
          className="mb-3"
          src="/Images/check.png"
          alt="Money Back Icon"
          width={50}
          height={30}
        />
        <h4 className="font-bold mb-2">MONEY BACK GUARANTEE</h4>
        <p className="text-gray-500 text-sm">We return money within 30 days</p>
      </div>
    </div>


            </div>
    );
}


