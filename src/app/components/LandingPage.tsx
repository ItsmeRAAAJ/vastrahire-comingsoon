// app/page.tsx
"use client";

import Image from "next/image";
import { Search, User, ShoppingCart, ChevronLeft, ChevronRight, LogIn } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Dancing_Script } from "next/font/google";
import "../globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const products = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
  ];
  const swiperRef = useRef<SwiperType | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  const slides = [
    { id: 1, title: "Image Slide 1", description: "Tell your brand's story through images", img: "/wedding1.png" },
    { id: 2, title: "Image Slide 2", description: "Highlight your best collections", img: "/wedding2.jpg" },
    { id: 3, title: "Image Slide 3", description: "Engage your audience visually", img: "/wedding3.jpg" },
  ];

  const categories = [
    { title: "LEHENGAS", subtitle: "WEIGHTLESS", image: "/images/lehenga.jpg" },
    { title: "KURTAS", subtitle: "CLASSIC", image: "/images/kurta.jpg" },
    { title: "SAREES", subtitle: "STELLAR", image: "/images/saree.webp" },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="w-full bg-gray-800 text-white text-center text-xs sm:text-sm py-2 px-2">
        SIGN UP FOR 10% OFF YOUR FIRST PURCHASE
      </div>

      <div className="flex justify-center py-3">
        <Image src="/vastrahire2.png" alt="Vastrahire Logo" width={200} height={80} className="sm:w-[250px]" />
      </div>

      <div className="flex justify-between px-4 sm:px-8 py-4 shadow-md bg-black/10">
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#">WOMEN</a>
          <a href="#">MEN</a>
          <a href="#">KIDS</a>
          <a href="#">SHOES</a>
          <a href="#">JEWELLERY</a>
          <a href="#">MORE</a>
          <a href="#" className="bg-black py-[1px] px-2 rounded-xl text-white">Unlock Your Earning through us</a>
        </nav>
        <div className="flex gap-4 text-gray-700">
          <Search className="w-5 h-5 cursor-pointer" />
          {/* <User className="w-5 h-5 cursor-pointer" /> */}
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <span className="flex justify-center items-center cursor-pointer">Login &nbsp;<LogIn className="w-5 h-5"  /></span>
        </div>
      </div>

      <section className="relative">
        <div className="relative w-full  overflow-hidden bg-black/20">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-[280px] sm:h-[400px] md:h-[540px] rounded-lg"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image src={slide.img} alt={slide.title} fill className="object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 left-2 sm:left-5 -translate-y-1/2 z-20 bg-white/80 p-2 sm:p-3 rounded-full shadow-md hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-2 sm:right-5 -translate-y-1/2 z-20 bg-white/80 p-2 sm:p-3 rounded-full shadow-md hover:bg-white"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
          </button>
        </div>
      </section>

      <section className="w-full py-8 px-4">
        <h2 className="text-center text-black font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">NEW ARRIVALS</h2>

        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden mb-10 rounded-lg">
          <Image src="/newarrival.jpg" alt="New Arrivals Banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
            <h3 className={`${dancingScript.className} text-4xl sm:text-6xl md:text-8xl font-bold mb-2`}>
              New <span className="text-yellow-400">for Him</span>
            </h3>
            <p className="mb-4 text-sm sm:text-base">
              From classics to trendsetters – all new, all now
            </p>
            <button className="px-4 sm:px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-200"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>

          <div ref={scrollRef} className="overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-4 sm:gap-6 w-max px-2 sm:px-4">
              {products.map((item, idx) => (
                <div key={idx} className="relative min-w-[140px] sm:min-w-[200px] h-[200px] sm:h-[300px] rounded-lg overflow-hidden group">
                  <Image src={item} alt={`Item ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-gray-200"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 md:px-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer">
              <Image src={cat.image} alt={cat.title} fill className="object-contain group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-6 sm:pb-8 text-center">
                <div>
                  <p className="text-xs sm:text-sm text-white tracking-widest">{cat.subtitle}</p>
                  <h3 className={`${dancingScript.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white`}>
                    {cat.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
