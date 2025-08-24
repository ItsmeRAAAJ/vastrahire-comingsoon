// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import "../globals.css";
import { Dancing_Script } from "next/font/google";
import axios from "axios";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WAITLIST_BACKEND_URL}/api/v1/waitlist/join`, { email });

      // Check for both 200 and 201 status codes (success)
      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        // Check if it's a duplicate email error (409)
        if (err.response?.status === 409) {
          setError("This email is already on our waitlist!");
        } else {
          setError(err.response?.data?.message || "Failed to subscribe. Please try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative flex flex-col items-center justify-between overflow-hidden">
      {/* Site Heading */}
      <div className="w-full text-center py-4 sm:py-6 flex justify-center items-center relative z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide">
            VASTRAHIRE
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mt-2">
            Your Fashion Rental Destination
          </p>
        </div>
      </div>

      {/* Background Images - Made smaller on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[80px] sm:auto-rows-[120px] md:auto-rows-[150px] lg:auto-rows-[180px] xl:auto-rows-[200px] gap-2 sm:gap-3 md:gap-4 w-full h-full p-3 sm:p-4 flex-1 overflow-hidden">
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
        <div className="relative w-full h-full col-span-3">
          <Image src="/watches.jpeg" alt="Jewelry" fill className="object-cover rounded-xl shadow-md" />
        </div>
      </div>

      {/* Coming Soon Overlay - Adjusted positioning */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 backdrop-blur-[2px] sm:backdrop-blur-[3px] z-20 py-8 sm:py-12 overflow-y-auto">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl w-[90%] animate-fadeIn flex flex-col items-center bg-black/40 backdrop-blur-sm">
          <Image
            src="/vastrahire.jpg"
            alt="VASTRAHIRE Logo"
            width={120}
            height={100}
            className="object-contain shadow-2xl mx-5 rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <h1 className={`${dancingScript.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-3 sm:mb-4 md:mb-5 tracking-wide mt-2`}>
            Coming <span className="text-amber-600">Soon</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed max-w-md md:max-w-lg lg:max-w-2xl">
            Your dream fashion rental platform is almost here!
            Rent <span className="font-semibold text-amber-500">all type of clothes</span>,
            stylish <span className="font-semibold text-amber-500">shoes</span>,
            and elegant <span className="font-semibold text-amber-500">jewelry</span> — all at your fingertips.
          </p>

          <p className="mt-3 sm:mt-4 md:mt-5 text-gray-300 font-medium text-base sm:text-lg md:text-xl">
            Launching soon <span className="font-bold text-amber-600">VASTRAHIRE</span> ✨
          </p>

          {/* Notify Form */}
          <div className="mt-4 sm:mt-5 md:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/90 
                focus:ring-2 focus:ring-amber-500 outline-none text-gray-900 text-sm sm:text-base"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl bg-amber-600 text-white font-semibold shadow-lg 
                hover:bg-amber-500 transition-transform hover:scale-105 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
              >
                {isLoading ? "Processing..." : "Notify Me"}
              </button>
            </form>
            {error && <p className="text-red-400 font-bold mt-2 text-sm">{error}</p>}
          </div>
        </div>
      </div>

      {submitted && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
          {/* dark backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* popup box */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xs sm:max-w-sm md:max-w-md w-full text-center animate-fadeInUp">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-600 hover:text-black text-lg sm:text-xl"
            >
              ✕
            </button>

            <Image
              src="/vastrahire.jpg"
              alt="VASTRAHIRE Logo"
              width={80}
              height={70}
              className="object-contain mx-auto rounded-full shadow-lg w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />

            <h2 className={`${dancingScript.className} text-xl sm:text-2xl md:text-3xl font-bold text-amber-600 mt-3 sm:mt-4`}>
              You have joined the exclusive offer list 🎉
            </h2>
            <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base md:text-lg italic">
              You&apos;ll be notified soon through email about our launch and exclusive offers.
            </p>
            <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base md:text-lg">
              Welcome to <span className="font-bold text-amber-600">VASTRAHIRE</span> family!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}