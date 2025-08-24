// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import "../globals.css";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"], 
});

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    console.log("User subscribed with email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center overflow-hidden">
      {/* Site Heading */}
      <div className="w-full text-center py-6 flex justify-center items-center relative z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide">
            VASTRAHIRE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mt-2">
            Your Fashion Rental Destination
          </p>
        </div>
      </div>

      {/* Background Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 sm:gap-4 w-full h-full p-3 sm:p-4">
        <div className="relative w-full h-full col-span-2">
          <Image src="/shoes.jpg" alt="Shoes" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full row-span-2">
          <Image src="/bridal.jpeg" alt="Bridal" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/kurta.jpg" alt="Kurta" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full col-span-2 row-span-2">
          <Image src="/1.jpg" alt="Dress" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full col-span-2">
          <Image src="/jewel.jpeg" alt="Jewelry" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/accessories.jpeg" alt="Accessories" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full col-span-2">
          <Image src="/jewel3.jpeg" alt="Shoes" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/blazer.jpeg" alt="Accessories" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full col-span-3 row-span-2">
          <Image src="/blazer2.jpeg" alt="Jewelry" fill className="object-cover rounded-xl shadow-md" />
        </div>
        <div className="relative w-full h-full col-span-3 ">
          <Image src="/watches.jpeg" alt="Jewelry" fill className="object-cover rounded-xl shadow-md" />
        </div>
      </div>

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[5px] z-20">
        <div className="p-6 sm:p-8 md:p-12 md:py-16 rounded-3xl text-center max-w-3xl animate-fadeIn flex flex-col  items-center">
          <Image src="/vastrahire.jpg" alt="VASTRAHIRE Logo" width={180} height={150} className="object-contain shadow-2xl mx-5 rounded-full" />
          <h1 className={`${dancingScript.className} text-3xl sm:text-4xl md:text-9xl font-extrabold text-white mb-4 md:mb-6 tracking-wide`}>
            Coming <span className="text-[#3e000c]">Soon</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Your dream fashion rental platform is almost here!
            Rent <span className="font-semibold text-[#3e000c]">all type of clothes</span>, 
            stylish <span className="font-semibold text-[#3e000c]">shoes</span>, 
            and elegant <span className="font-semibold text-[#3e000c]">jewelry</span> — all at your fingertips.
          </p>

          <p className="mt-4 md:mt-6 text-gray-300 font-medium text-lg md:text-xl">
            Launching soon <span className="font-bold text-[#3e000c]">VASTRAHIRE</span> ✨
          </p>

          {/* Notify Form */}
          <div className="mt-6 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white/90 
                focus:ring-2 focus:ring-[#3e000c] outline-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#3e000c] text-[#ffecd1] font-semibold shadow-lg 
                hover:bg-[#ffe3d1] hover:text-[#3e000c] transition-transform hover:scale-105 cursor-pointer"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          {/* dark backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          
          {/* popup box */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-[90%] text-center animate-fadeInUp">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <Image
              src="/vastrahire.jpg"
              alt="VASTRAHIRE Logo"
              width={120}
              height={100}
              className="object-contain mx-auto rounded-full shadow-lg"
            />

            <h2 className={`${dancingScript.className} text-2xl sm:text-3xl font-bold text-[#3e000c] mt-4`}>
              You have joined the exclusive offer list 🎉
            </h2>
            <p className="mt-3 text-gray-700 text-lg italic">
              You'll be notified soon through email about our launch and exclusive offers.
            </p>
            <p className="mt-3 text-gray-700 text-lg">
              Welcome to <span className="font-bold">VASTRAHIRE</span> family!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
