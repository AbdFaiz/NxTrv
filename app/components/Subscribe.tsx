"use client";

import Image from "next/image";

const Subscribe = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // nanti bisa kirim ke API / server action
    alert("Subscribed!");
  };

  return (
    <div id="subscribe" className="relative w-full py-24">
      <Image src={"/subscribe1.jpg"} alt="Komodo Island" fill className={"object-cover"} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-20 max-w-screen-md mx-auto text-center px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white">
          Get Your Travel Inspiration <br /> Straight to Your Inbox
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 bg-slate-100 rounded-full w-full sm:w-80 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 cursor-pointer transition"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-orange-100">
          Get travel stories & hidden destinations straight to your inbox.
        </p>
      </div>
    </div>
  );
}

export default Subscribe