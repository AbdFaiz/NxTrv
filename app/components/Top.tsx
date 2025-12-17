"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { 
    id: 0, 
    src: "/top1.jpg", 
    title: "Antelope Canyon", 
    description: "Ngarai celah yang menakjubkan di Arizona, AS, terkenal dengan dinding batu pasir merah yang bergelombang dan pencahayaan alaminya." 
  },
  { 
    id: 1, 
    src: "/top2.jpg", 
    title: "Wat Rong Khun (White Temple)", 
    description: "Kuil Buddha kontemporer yang unik di Chiang Rai, Thailand, yang didominasi warna putih sebagai simbol kesucian." 
  },
  { 
    id: 2, 
    src: "/top3.jpg", 
    title: "Gerbang Torii Itsukushima", 
    description: "Gerbang Torii ikonik di Pulau Miyajima, Jepang, yang tampak mengapung di atas air saat air laut sedang pasang." 
  },
  { 
    id: 3, 
    src: "/top4.jpg", 
    title: "Lembah Verzasca (Swiss)", 
    description: "Pemandangan pegunungan yang tenang di Ticino, Swiss, menampilkan rumah batu tradisional (rustico) di tengah lembah hijau." 
  },
];

const Top = () => {
  const [active, setActive] = useState(0);

  return (
    <div id="top" className="flex flex-col w-full max-w-screen-7xl mx-auto px-8 py-16 bg-slate-100">
      <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-2">
        Top Destinations
      </h1>
      <p className="mb-6 text-base md:text-md text-slate-400">
            Explore breathtaking destinations, unique cultures, and
            unforgettable experiences around the globe with NxTrv.
          </p>
      <div className="flex h-[400px] w-full gap-4">
        {images.map((img, i) => (
          <div
            key={img.id}
            onClick={() => setActive(i)}
            className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
              active === i ? "flex-[4]" : "flex-[1]"
            }
                `}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 transition-all duration-500 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-slate-100">
              <h4
                className={`text-xl font-bold transition-all duration-500 ${
                  active === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {img.title}
              </h4>
              <p
                className={`text-sm transition-all duration-500 line-clamp-2 ${
                  active === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top