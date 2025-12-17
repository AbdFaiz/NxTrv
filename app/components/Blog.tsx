"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Ancient Wonders: The Pyramids of Giza",
    excerpt:
      "Berdiri di hadapan sejarah kuno Mesir. Pemandangan Piramida Agung yang ikonik, dibingkai oleh formasi batuan alami yang menakjubkan di bawah langit biru yang cerah.",
    image: "/blog1.jpg",
    date: "Dec 12, 2025",
  },
  {
    id: 2,
    title: "Misty Mornings in the Swiss Alps",
    excerpt: "Menikmati ketenangan desa pegunungan di Swiss (seperti Grindelwald) di mana kabut lembut menyelimuti lembah hijau yang subur dan pondok-pondok kayu tradisional.",
    image: "/blog2.jpg",
    date: "Dec 10, 2025",
  },
  {
    id: 3,
    title: "Mount Fuji Framed in Colors",
    excerpt: "Keindahan ikon Jepang, Gunung Fuji, yang puncaknya tertutup salju, terlihat sempurna di antara dedaunan musim gugur dan musim semi yang kontras.",
    image: "/blog3.jpg",
    date: "Dec 8, 2025",
  },
  {
    id: 4,
    title: "Golden Hour at the Taj Mahal",
    excerpt: "Pesona arsitektur Mughal di Agra, India. Menatap keagungan marmer putih Taj Mahal yang bermandikan cahaya hangat saat matahari terbit atau terbenam.",
    image: "/blog4.jpg",
    date: "Dec 6, 2025",
  },
];

const Article = () => {
  const featured = posts[0];
  const others = posts.slice(1);

  return (
    <div id="article" className="w-full max-w-screen-7xl mx-auto px-8 py-16">
      <div className="flex justify-between">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-8">
          Latest Stories
        </h1>
        <Link
          href="/article"
          className="text-md px-8 py-2 h-fit rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 transition-all duration-200"
        >
          Other
        </Link>
      </div>

      {/* Featured Post */}
      <div className="group cursor-pointer grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-slate-500 mb-2">{featured.date}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 group-hover:underline">
            {featured.title}
          </h2>
          <p className="text-slate-600 mb-6">{featured.excerpt}</p>
          <button className="w-fit px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer">
            Read more
          </button>
        </div>
      </div>

      {/* Other Posts */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((post) => (
          <article
            key={post.id}
            className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-500"
              />
            </div>

            <div className="p-4">
              <span className="text-xs text-slate-400">{post.date}</span>
              <h3 className="mt-2 font-semibold text-slate-800 group-hover:text-orange-500 group-hover:underline transition">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2 truncate text-ellipsis">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Article