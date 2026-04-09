"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Hammad Naeem",
    text: `"I'm Absolutely Loving ! The Variety Of Food Is Impressive, The Atmosphere Is Great, And The Quality Is Top-Notch. Plus, The Prices Are Perfect For The Value You Get. Highly Recommend!"`,
    stars: 5,
  },
  {
    name: "Sara Ahmed",
    text: `"Amazing food and great service! The chicken fillet is absolutely delicious. Will definitely come back again and again!"`,
    stars: 5,
  },
  {
    name: "Ali Hassan",
    text: `"Best fast food in Pakistan hands down. The gochu wings are unreal. Highly recommend to everyone!"`,
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="relative bg-white py-10 md:py-20 overflow-hidden">
      {/* Left decorative quote element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 sm:w-20 md:w-36 lg:w-44 pointer-events-none select-none">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/4c62c91999ecb5795be4931f22128c820c8554b8?width=302"
          alt=""
          width={151}
          height={230}
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>

      {/* Right decorative quote element */}
      <div className="absolute right-0 bottom-6 md:bottom-16 w-12 sm:w-16 md:w-28 lg:w-36 pointer-events-none select-none">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/a31fc5a606ccb50bc80c4f540e46a7c734996afe?width=278"
          alt=""
          width={139}
          height={139}
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>

      {/* Blurred decorative dot - top right area */}
      <div
        className="absolute right-16 sm:right-28 md:right-36 top-8 md:top-16 w-8 h-8 md:w-16 md:h-16 pointer-events-none select-none opacity-80"
        aria-hidden="true"
      >
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/955be010a5386c20ce2a26f77b92a1bd324c3973?width=142"
          alt=""
          width={71}
          height={71}
          className="w-full h-auto blur-[10px] md:blur-[14px]"
        />
      </div>

      {/* Blurred decorative dot - bottom left area */}
      <div
        className="absolute left-20 sm:left-32 md:left-52 bottom-6 md:bottom-10 w-8 h-8 md:w-16 md:h-16 pointer-events-none select-none opacity-80"
        aria-hidden="true"
      >
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/955be010a5386c20ce2a26f77b92a1bd324c3973?width=142"
          alt=""
          width={71}
          height={71}
          className="w-full h-auto blur-[10px] md:blur-[14px]"
        />
      </div>

      {/* Review content */}
      <div className="relative z-10 max-w-2xl mx-auto px-10 sm:px-14 md:px-8 flex flex-col items-center text-center gap-3 md:gap-6">
        {/* Reviewer name */}
        <h3 className="font-fredoka text-2xl sm:text-3xl md:text-4xl text-black capitalize leading-tight">
          {review.name}
        </h3>

        {/* Star rating */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src="https://api.builder.io/api/v1/image/assets/TEMP/e359725f35f75f5c0d15bbba944b1bee063ef682?width=144"
              alt={i < review.stars ? "filled star" : "empty star"}
              width={52}
              height={52}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 ${i >= review.stars ? "opacity-30" : ""}`}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="font-fredoka text-black text-xs sm:text-sm md:text-base lg:text-lg leading-6 md:leading-8 capitalize max-w-xs sm:max-w-sm md:max-w-[688px]">
          {review.text}
        </p>

        {/* Carousel dots */}
        <div className="flex items-center gap-3 md:gap-4 mt-1 md:mt-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-200 ${
                i === active
                  ? "bg-[#F4BD18] rounded-[7px_4px_4px_7px]"
                  : "bg-[#DBD8C9] rounded-[3px_5px_7px_3px]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
