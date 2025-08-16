"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Categories() {
    const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 24,
    minutes: 59,
    seconds: 35,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
    return (
        <div className="mt-15 border-2 bg-black h-90 w-270  flex gap-30 pb-95">
            <div>
                <p className="text-green-500 mt-10 ml-10"><strong>Categories</strong></p>
                <p className="text-white text-5xl ml-10 mt-8"><strong>Enhance Your <br /> Music Experience</strong></p>


             <div className="flex space-x-4 mt-3 ml-10">
          <div className="flex flex-col items-center bg-white text-black rounded-full w-17 h-17 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Days</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-17 h-17 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-17 h-17 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-17 h-17 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
                <button className="bg-green-400 text-white mt-5 w-30 rounded-0.25Rem ml-10 h-10">
                    Buy Now!
                </button>
            </div>
            <div className="mt-22">
                <Image
                    src="/Images/Jbl boonbox.png"
                    alt="Game pad"
                    width={400}
                    height={100}
                />

            </div>
        </div>
    )
}