import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      category: "Logistics",
      title: "Understanding the right freight solution for your cargo",
      excerpt:
        "Choosing between air, sea, and road freight depends on factors such as cargo type, urgency, destination, and shipment volume.",
      date: "August 2026",
      readTime: "5 min read",
    },
    {
      category: "Exports",
      title: "Preparing agricultural products for international markets",
      excerpt:
        "From flowers and fruits to herbs and meat, proper preparation and documentation can help Kenyan exporters move cargo more efficiently.",
      date: "August 2026",
      readTime: "6 min read",
    },
    {
      category: "Customs",
      title: "Why accurate documentation matters in international trade",
      excerpt:
        "Good documentation helps reduce delays and supports a smoother customs clearance process for importers and exporters.",
      date: "July 2026",
      readTime: "4 min read",
    },
    {
      category: "Air Freight",
      title: "When air freight makes sense for your business",
      excerpt:
        "Air freight can be an effective option when speed, product value, or shipment sensitivity makes transit time especially important.",
      date: "July 2026",
      readTime: "5 min read",
    },
    {
      category: "Sea Freight",
      title: "A practical introduction to sea freight",
      excerpt:
        "For larger shipments and international cargo movements, sea freight can provide an efficient solution for businesses planning ahead.",
      date: "June 2026",
      readTime: "6 min read",
    },
    {
      category: "Perishables",
      title: "Moving perishable cargo with greater care",
      excerpt:
        "Perishable products require careful coordination, appropriate handling, and attention to timing throughout the logistics process.",
      date: "June 2026",
      readTime: "5 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071A2F]">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#C9A227]/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/5" />


        <div className="arkan-container relative">

          <div className="flex min-h-[500px] items-center justify-center py-28">

            <div className="mx-auto max-w-4xl text-center">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Arkan Insights
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />

              </div>


              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">

                Insights for a
                <span className="block text-[#D4AF37]">
                  connected world.
                </span>

              </h1>


              {/* Description */}
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Practical insights, ideas, and information about
                freight, international trade, customs, exports,
                and logistics.
              </p>

            </div>

          </div>

        </div>


        {/* Gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}
      <section className="arkan-container py-16 sm:py-20 lg:py-24">

        <div className="grid overflow-hidden rounded-3xl bg-[#071A2F] lg:grid-cols-2">

          {/* Visual */}
          <div className="relative min-h-[350px] overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2B4A] to-[#04111F]" />

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-[#C9A227]/20" />

            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/5" />


            <div className="relative flex h-full min-h-[350px] items-center justify-center p-10">

              <div className="text-center">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  Featured Insight
                </p>

                <div className="mt-6 text-7xl font-bold text-white/10 sm:text-8xl">
                  LOGISTICS
                </div>

              </div>

            </div>

          </div>


          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

            <div className="flex items-center gap-3">

              <span className="rounded-full border border-[#C9A227]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                Logistics
              </span>

              <span className="text-xs text-white/35">
                Featured
              </span>

            </div>


            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Understanding the right freight solution for your cargo
            </h2>


            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
              Choosing the right transportation method is an important
              part of any shipment. Understanding the differences between
              air, sea, and road freight can help businesses plan more
              effectively.
            </p>


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


            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#D4AF37] transition-colors hover:text-white"
            >
              Read the insight
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLES
      ====================================================== */}
      <section className="arkan-container pb-16 sm:pb-20 lg:pb-24">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Latest Insights
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#071A2F] sm:text-4xl">
              Knowledge that moves business forward.
            </h2>

          </div>


          <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
            Explore practical information about international freight,
            exports, customs, and cargo management.
          </p>

        </div>


        {/* Article grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Card visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#071A2F]">

                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#C9A227]/15" />

                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/5" />


                <span className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  {article.category}
                </span>

              </div>


              {/* Card content */}
              <div className="flex flex-1 flex-col p-6">

                <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-wider text-slate-400">

                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    {article.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={12} />
                    {article.readTime}
                  </span>

                </div>


                <h3 className="mt-4 text-xl font-bold leading-tight text-[#071A2F] transition-colors group-hover:text-[#C9A227]">
                  {article.title}
                </h3>


                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                  {article.excerpt}
                </p>


                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#071A2F] transition-colors hover:text-[#C9A227]"
                >
                  Read more
                  <ArrowRight size={15} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#071A2F]">

        <div className="arkan-container py-16 sm:py-20">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Need Logistics Support?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let's talk about your shipment.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                Have questions about freight, customs, exports,
                or cargo handling? Our team is ready to help.
              </p>

            </div>


            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B24A]"
            >
              Request a Quote

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#071A2F] text-[#C9A227]">

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
