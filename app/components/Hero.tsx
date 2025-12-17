import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative hero min-h-screen max-w-screen-7xl mx-auto pt-28 pb-8 md:pt-0 md:pb-0"
    >
      <Image
        src={"/world-map.jpg"}
        alt="hero"
        fill
        className="object-cover opacity-50"
      />
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      {/* Content */}
      <div className="relative z-10 flex md:min-h-screen flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            Discover the World&apos;s{" "}
            <span className="text-orange-500">Hidden</span> Wonders
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-800 max-w-xl">
            Explore breathtaking destinations, unique cultures, and
            unforgettable experiences around the globe with NxTrv.
          </p>

          <button className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 transition-all text-slate-200 px-8 py-3 rounded-full text-sm font-semibold">
            Start Your Journey
          </button>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-xl">
            <div className="relative row-span-2 my-0 md:my-12 h-[320px] md:h-[480px]">
              <Image
                src="/hero1.jpg"
                alt="place 1"
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="relative h-[180px] md:h-[340px]">
              <Image
                src="/hero2.jpg"
                alt="place 2"
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="relative h-[130px] md:h-[240px]">
              <Image
                src="/hero3.jpg"
                alt="place 3"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
