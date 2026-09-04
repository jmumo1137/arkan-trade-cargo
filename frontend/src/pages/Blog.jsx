import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Plane,
  Snowflake,
  Flower2,
  Leaf,
  PawPrint,
  PackageCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      category: "Air Cargo",
      title: "Why air freight matters for time-sensitive cargo",
      excerpt:
        "When timing matters, air freight can help businesses move valuable and time-sensitive cargo quickly between markets.",
      date: "August 2026",
      readTime: "5 min read",
      icon: Plane,
      slug: "/blog/air-freight-time-sensitive-cargo",
    },
    {
      category: "Fresh Meat",
      title: "Moving fresh chilled meat from Kenya to international markets",
      excerpt:
        "Fresh chilled meat requires speed, careful coordination and attention to handling throughout the cargo journey.",
      date: "August 2026",
      readTime: "6 min read",
      icon: Snowflake,
      slug: "/blog/fresh-chilled-meat-kenya",
    },
    {
      category: "Flowers",
      title: "Getting Kenyan flowers ready for international air cargo",
      excerpt:
        "Flowers are highly time-sensitive. Proper preparation, documentation and coordinated air freight can help protect quality during transit.",
      date: "August 2026",
      readTime: "5 min read",
      icon: Flower2,
      slug: "/blog/kenyan-flowers-air-cargo",
    },
    {
      category: "Agricultural Exports",
      title: "Moving herbs and vegetables to global buyers",
      excerpt:
        "Fresh herbs and vegetables require efficient coordination from farm and supplier through export handling and international transportation.",
      date: "July 2026",
      readTime: "5 min read",
      icon: Leaf,
      slug: "/blog/herbs-vegetables-global-buyers",
    },
    {
      category: "Pets",
      title: "What to consider when transporting pets internationally",
      excerpt:
        "International pet transportation involves planning, documentation, handling requirements and coordination with the destination.",
      date: "July 2026",
      readTime: "6 min read",
      icon: PawPrint,
      slug: "/blog/international-pet-transport",
    },
    {
      category: "Customs",
      title: "Why accurate cargo documentation matters",
      excerpt:
        "Correct documentation helps reduce avoidable delays and supports a smoother import and export clearance process.",
      date: "June 2026",
      readTime: "4 min read",
      icon: PackageCheck,
      slug: "/blog/cargo-documentation",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}
      <section className="relative min-h-[600px] overflow-hidden bg-[#04111F]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/46148/aircraft-landing-airplane-landing-airplane-46148.jpeg?auto=compress&cs=tinysrgb&w=2200')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#04111F]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04111F]/95 via-[#071A2F]/75 to-[#04111F]/45" />

        {/* Hero Content */}
        <div className="relative z-10 arkan-container">

          <div className="flex min-h-[600px] items-center py-28">

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                  Arkan Insights
                </span>

              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Knowledge that
                <span className="block text-[#D4AF37]">
                  keeps cargo moving.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Practical insights into air cargo, fresh exports,
                international trade, customs and the logistics
                behind moving goods from Kenya to the world.
              </p>

              {/* Focus Indicators */}
              <div className="mt-10 flex flex-wrap gap-3">

                {[
                  "Air Cargo",
                  "Fresh Meat",
                  "Flowers",
                  "Agricultural Exports",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          FEATURED INSIGHT
      ===================================================== */}
      <section className="arkan-container py-16 sm:py-20 lg:py-24">

        <div className="overflow-hidden rounded-3xl bg-[#071A2F]">

          <div className="grid lg:grid-cols-2">

            {/* Visual */}
            <div className="relative min-h-[380px] overflow-hidden">

              <img
                src="https://images.pexels.com/photos/11146455/pexels-photo-11146455.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Cargo aircraft at an airport"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04111F]/90 via-[#04111F]/25 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#04111F]/70 px-4 py-2.5 backdrop-blur-md">

                  <Plane
                    size={15}
                    className="text-[#D4AF37]"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Featured Insight
                  </span>

                </div>

              </div>

            </div>


            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <div className="flex items-center gap-3">

                <span className="rounded-full border border-[#C9A227]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  Air Cargo
                </span>

                <span className="text-xs text-white/35">
                  Featured
                </span>

              </div>

              <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Why air freight matters when your cargo needs to move fast
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                For fresh produce, chilled meat, flowers and other
                time-sensitive shipments, every hour can matter.
                Understanding when air freight is the right option
                can help businesses protect product quality and
                reach international markets efficiently.
              </p>

              {/* Meta */}
              <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-white/40">

                <span className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  August 2026
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={14} />
                  5 min read
                </span>

              </div>

              {/* Correct Article Link */}
              <Link
                to="/blog/air-freight-time-sensitive-cargo"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#D4AF37] transition-colors hover:text-white"
              >
                Read the insight
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INSIGHTS GRID
      ===================================================== */}
      <section className="arkan-container pb-20 sm:pb-24 lg:pb-28">

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Latest Insights
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-[1.1] text-[#071A2F] sm:text-5xl">
              Insights for
              <span className="text-[#C9A227]">
                {" "}better cargo movement.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 lg:text-right">
            Explore practical information about air cargo,
            agricultural exports, international trade and
            logistics coordination.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => {

            const Icon = article.icon;

            return (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227]/50 hover:shadow-xl"
              >

                {/* Card Visual */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#071A2F]">

                  {/* Decorative Circle */}
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#C9A227]/15 transition-transform duration-700 group-hover:scale-125" />

                  <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/5" />

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[#C9A227]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C9A227]">

                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#071A2F]"
                    />

                  </div>

                  {/* Category */}
                  <span className="absolute bottom-5 left-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                    {article.category}
                  </span>

                </div>


                {/* Card Content */}
                <div className="flex flex-1 flex-col p-7">

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-[10px] font-medium uppercase tracking-wider text-slate-400">

                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={12} />
                      {article.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={12} />
                      {article.readTime}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold leading-tight text-[#071A2F] transition-colors duration-300 group-hover:text-[#C9A227]">
                    {article.title}
                  </h3>


                  {/* Excerpt */}
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
                    {article.excerpt}
                  </p>


                  {/* Correct Dynamic Article Link */}
                  <Link
                    to={article.slug}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#071A2F] transition-colors hover:text-[#C9A227]"
                  >
                    Read more
                    <ArrowRight size={15} />
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          CARGO KNOWLEDGE CTA
      ===================================================== */}
      <section className="bg-[#C9A227]">

        <div className="arkan-container">

          <div className="flex flex-col items-center justify-between gap-8 py-16 text-center md:flex-row md:text-left">

            <div>

              <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">

                <Plane
                  size={18}
                  className="text-[#071A2F]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#071A2F]/70">
                  Need Cargo Support?
                </span>

              </div>

              <h2 className="text-3xl font-bold text-[#071A2F] sm:text-4xl">
                Have cargo ready to move?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#071A2F]/70">
                Whether you're shipping fresh meat, flowers,
                agricultural products, pets or general cargo,
                talk to Arkan about your shipment.
              </p>

            </div>


            {/* Quote Link */}
            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#071A2F] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#04111F]"
            >
              Request a Quote

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A227] text-[#071A2F]">
                <ArrowRight size={15} />
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Blog;

