"use client";

import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "Australia",
    avatar: "/user1.jpg",
    rating: 5,
    review:
      "NxTrv made my trip unforgettable. Everything was well organized and smooth!",
  },
  {
    id: 2,
    name: "David Kim",
    country: "South Korea",
    avatar: "/user2.jpg",
    rating: 5,
    review:
      "Amazing destinations and great recommendations. Highly recommended!",
  },
  {
    id: 3,
    name: "Maria Lopez",
    country: "Spain",
    avatar: "/user3.jpg",
    rating: 4,
    review:
      "Loved the experience! The hidden spots were truly breathtaking.",
  },
];

const Review = () => {
  return (
    <div id="review" className="w-full max-w-screen-7xl mx-auto px-6 md:px-12 py-20">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800">
          Traveler Reviews
        </h2>
        <p className="mt-2 text-slate-500 max-w-xl">
          What travelers say about their journey with NxTrv
        </p>
      </div>

      {/* Reviews */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] md:min-w-[360px] bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            {/* User */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={item.avatar}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-slate-800">
                  {item.name}
                </h4>
                <span className="text-sm text-slate-500">
                  {item.country}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mb-3">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i} className="text-orange-400 text-lg">★</span>
              ))}
            </div>

            {/* Review */}
            <p className="text-slate-600 text-sm leading-relaxed">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review