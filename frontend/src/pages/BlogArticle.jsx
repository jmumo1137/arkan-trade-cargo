import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Plane,
  Snowflake,
  Flower2,
  Leaf,
  PawPrint,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

const BlogArticle = () => {
  const { slug } = useParams();

  const articles = {
    "air-freight-time-sensitive-cargo": {
      category: "Air Cargo",
      title: "Why air freight matters for time-sensitive cargo",
      excerpt:
        "When timing matters, air freight can help businesses move valuable and time-sensitive cargo quickly between markets.",
      date: "August 2026",
      readTime: "5 min read",
      icon: Plane,

      heroImage:
        "https://images.pexels.com/photos/46148/aircraft-landing-airplane-landing-airplane-46148.jpeg?auto=compress&cs=tinysrgb&w=2200",

      intro:
        "For businesses moving fresh produce, chilled meat, flowers and other time-sensitive goods, transportation speed can have a direct impact on product quality and market opportunities.",

      sections: [
        {
          heading: "Why speed matters",
          paragraphs: [
            "Some cargo cannot afford to spend days in transit. Fresh and perishable products can lose quality when transportation takes longer than expected.",
            "Air freight provides a faster connection between Kenya and international markets, making it a practical option when delivery time is a priority.",
          ],
        },
        {
          heading: "When air freight makes sense",
          paragraphs: [
            "Air freight is particularly useful when the shipment is time-sensitive, high-value, relatively lightweight or needs to reach an international destination quickly.",
            "For exporters, choosing the right transportation method can help balance delivery speed, product quality and overall logistics requirements.",
          ],
        },
        {
          heading: "Planning your shipment",
          paragraphs: [
            "Successful air cargo movement requires more than simply booking space on an aircraft. Documentation, packaging, handling, customs procedures and destination requirements all need to be considered.",
            "Working with an experienced logistics partner can help coordinate these steps and reduce avoidable delays.",
          ],
        },
      ],

      keyPoints: [
        "Faster international transportation",
        "Suitable for time-sensitive cargo",
        "Useful for fresh and perishable products",
        "Requires proper documentation and handling",
      ],
    },

    "fresh-chilled-meat-kenya": {
      category: "Fresh Meat",
      title: "Moving fresh chilled meat from Kenya to international markets",
      excerpt:
        "Fresh chilled meat requires speed, careful coordination and attention to handling throughout the cargo journey.",
      date: "August 2026",
      readTime: "6 min read",
      icon: Snowflake,

      heroImage:
        "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=2200",

      intro:
        "Exporting fresh chilled meat requires careful planning because product quality depends on maintaining the right conditions throughout the logistics process.",

      sections: [
        {
          heading: "Speed and temperature control",
          paragraphs: [
            "Chilled meat needs efficient movement from the point of origin through handling, documentation, transportation and final delivery.",
            "Delays can create unnecessary risks, which is why exporters need a logistics process designed around the nature of the product.",
          ],
        },
        {
          heading: "Documentation matters",
          paragraphs: [
            "International meat shipments require appropriate documentation and compliance with the requirements of the destination market.",
            "Accurate paperwork helps support a smoother clearance process and reduces the possibility of avoidable delays.",
          ],
        },
        {
          heading: "Choosing the right freight solution",
          paragraphs: [
            "For international markets where delivery speed is important, air freight can provide an efficient transportation option for chilled meat.",
            "The right solution depends on the destination, shipment volume, timing and specific cargo requirements.",
          ],
        },
      ],

      keyPoints: [
        "Maintain appropriate handling conditions",
        "Prepare export documentation early",
        "Coordinate clearance requirements",
        "Choose transportation based on urgency and destination",
      ],
    },

    "kenyan-flowers-air-cargo": {
      category: "Flowers",
      title: "Getting Kenyan flowers ready for international air cargo",
      excerpt:
        "Flowers are highly time-sensitive. Proper preparation, documentation and coordinated air freight can help protect quality during transit.",
      date: "August 2026",
      readTime: "5 min read",
      icon: Flower2,

      heroImage:
        "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&w=2200",

      intro:
        "Kenya's flower industry depends heavily on efficient international logistics. From farm to destination, every stage needs to be carefully coordinated.",

      sections: [
        {
          heading: "Why timing matters for flowers",
          paragraphs: [
            "Fresh flowers are highly time-sensitive products. The longer they remain in transit, the greater the importance of proper handling and environmental control.",
            "Efficient air cargo can help exporters connect flowers with international buyers while maintaining product quality.",
          ],
        },
        {
          heading: "Preparation before export",
          paragraphs: [
            "Proper packaging, labeling, documentation and coordination before the shipment leaves the farm can make the export process more efficient.",
            "Exporters should also understand the requirements of their destination market before arranging transportation.",
          ],
        },
        {
          heading: "Coordinating the cargo journey",
          paragraphs: [
            "Flower exports involve several moving parts, including handling, airport processes, airline booking, customs and destination coordination.",
            "A coordinated logistics process helps keep the shipment moving according to schedule.",
          ],
        },
      ],

      keyPoints: [
        "Prepare flowers carefully before transportation",
        "Complete export documentation",
        "Book suitable air cargo capacity",
        "Coordinate airport and customs processes",
      ],
    },

    "herbs-vegetables-global-buyers": {
      category: "Agricultural Exports",
      title: "Moving herbs and vegetables to global buyers",
      excerpt:
        "Fresh herbs and vegetables require efficient coordination from farm and supplier through export handling and international transportation.",
      date: "July 2026",
      readTime: "5 min read",
      icon: Leaf,

      heroImage:
        "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=2200",

      intro:
        "For agricultural exporters, reaching international buyers requires more than producing quality products. Efficient logistics plays an important role in getting those products to market.",

      sections: [
        {
          heading: "From farm to international market",
          paragraphs: [
            "Fresh herbs and vegetables often need to move through several stages before reaching the final buyer.",
            "Coordinating collection, preparation, documentation, handling and transportation can help exporters maintain an efficient supply chain.",
          ],
        },
        {
          heading: "Managing time-sensitive produce",
          paragraphs: [
            "Fresh agricultural products can be affected by delays, making transportation planning especially important.",
            "Depending on the destination and urgency, air freight can provide a practical solution for international shipments.",
          ],
        },
        {
          heading: "Building reliable export processes",
          paragraphs: [
            "A consistent export process can help businesses manage recurring shipments more effectively.",
            "Documentation, packaging, cargo booking and customs coordination should all be considered before the shipment is dispatched.",
          ],
        },
      ],

      keyPoints: [
        "Plan the supply chain before dispatch",
        "Prepare export documentation",
        "Consider transportation time carefully",
        "Coordinate handling and cargo booking",
      ],
    },

    "international-pet-transport": {
      category: "Pets",
      title: "What to consider when transporting pets internationally",
      excerpt:
        "International pet transportation involves planning, documentation, handling requirements and coordination with the destination.",
      date: "July 2026",
      readTime: "6 min read",
      icon: PawPrint,

      heroImage:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=2200",

      intro:
        "Moving a pet internationally requires careful preparation. Travel requirements can vary depending on the destination, airline and type of animal.",

      sections: [
        {
          heading: "Start with destination requirements",
          paragraphs: [
            "Before arranging transportation, pet owners should understand the requirements of the destination country.",
            "These may include health documentation, identification, vaccinations and other entry requirements.",
          ],
        },
        {
          heading: "Airline and handling considerations",
          paragraphs: [
            "Airline policies can differ, so transportation arrangements should be made with the specific requirements of the journey in mind.",
            "Proper travel containers and careful handling are important parts of the process.",
          ],
        },
        {
          heading: "Plan ahead",
          paragraphs: [
            "International pet transportation should not be treated as a last-minute shipment.",
            "Early planning gives owners and logistics providers more time to confirm documentation, airline requirements and destination procedures.",
          ],
        },
      ],

      keyPoints: [
        "Check destination requirements early",
        "Confirm airline transportation policies",
        "Prepare required documentation",
        "Use an appropriate travel container",
      ],
    },

    "cargo-documentation": {
      category: "Customs",
      title: "Why accurate cargo documentation matters",
      excerpt:
        "Correct documentation helps reduce avoidable delays and supports a smoother import and export clearance process.",
      date: "June 2026",
      readTime: "4 min read",
      icon: PackageCheck,

      heroImage:
        "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=2200",

      intro:
        "Cargo documentation is an important part of international trade. Accurate paperwork helps customs authorities, carriers and other parties understand what is being shipped and how it should be handled.",

      sections: [
        {
          heading: "Why documentation is important",
          paragraphs: [
            "International shipments involve multiple parties and regulatory requirements. Documentation provides the information needed to process the shipment correctly.",
            "Incomplete or inaccurate information can contribute to delays, additional checks or clearance complications.",
          ],
        },
        {
          heading: "Common documentation considerations",
          paragraphs: [
            "Depending on the shipment, exporters and importers may need commercial invoices, packing information, transport documents, permits and other supporting documentation.",
            "The exact requirements can vary depending on the cargo and destination.",
          ],
        },
        {
          heading: "Prepare before the cargo moves",
          paragraphs: [
            "Documentation should be reviewed before cargo is dispatched rather than after it reaches the airport or destination.",
            "Early preparation gives businesses an opportunity to identify missing information and address issues before they become delays.",
          ],
        },
      ],

      keyPoints: [
        "Review documentation before dispatch",
        "Ensure shipment information is accurate",
        "Understand destination requirements",
        "Coordinate customs clearance early",
      ],
    },
  };

  const article = articles[slug];

  // ---------------------------------------------------------
  // ARTICLE NOT FOUND
  // ---------------------------------------------------------

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F7FA] px-6">
        <div className="max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#071A2F]">
            <PackageCheck
              size={34}
              className="text-[#D4AF37]"
            />
          </div>

          <h1 className="mt-7 text-4xl font-bold text-[#071A2F]">
            Article not found
          </h1>

          <p className="mt-4 leading-7 text-slate-500">
            The insight you're looking for may have been moved or
            the link may be incorrect.
          </p>

          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#071A2F] px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#04111F]"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  const Icon = article.icon;

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          ARTICLE HERO
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#04111F]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${article.heroImage}')`,
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#04111F]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04111F]/95 via-[#071A2F]/80 to-[#04111F]/50" />

        {/* Content */}
        <div className="relative z-10 arkan-container">

          <div className="flex min-h-[560px] items-end pb-20 pt-32">

            <div className="max-w-4xl">

              {/* Back */}
              <Link
                to="/blog"
                className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-[#D4AF37]"
              >
                <ArrowLeft size={16} />
                Back to Insights
              </Link>

              {/* Category */}
              <div className="mb-6 flex items-center gap-3">

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10">
                  <Icon
                    size={17}
                    className="text-[#D4AF37]"
                  />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  {article.category}
                </span>

              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              {/* Intro */}
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/45">

                <span className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  {article.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={14} />
                  {article.readTime}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <section className="arkan-container py-16 sm:py-20 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">

          {/* Main article */}
          <article className="max-w-3xl">

            {/* Opening */}
            <p className="text-lg font-medium leading-8 text-[#071A2F] sm:text-xl">
              {article.intro}
            </p>

            {/* Sections */}
            <div className="mt-12 space-y-12">

              {article.sections.map((section, index) => (

                <section key={section.heading}>

                  <div className="flex items-start gap-4">

                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10 text-xs font-bold text-[#A58418]">
                      {index + 1}
                    </span>

                    <div>

                      <h2 className="text-2xl font-bold text-[#071A2F] sm:text-3xl">
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-4">

                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-8 text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))}

                      </div>

                    </div>

                  </div>

                </section>

              ))}

            </div>

          </article>


          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071A2F]">
                  <Icon
                    size={18}
                    className="text-[#D4AF37]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                    Key Points
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071A2F]">
                    What to remember
                  </p>
                </div>

              </div>


              <div className="mt-7 space-y-4">

                {article.keyPoints.map((point) => (

                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#C9A227]"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {point}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* Quote CTA */}
            <div className="mt-6 rounded-2xl bg-[#071A2F] p-7">

              <Plane
                size={24}
                className="text-[#D4AF37]"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                Have cargo ready to move?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Talk to Arkan about your air, sea, road or
                customs requirements.
              </p>

              <Link
                to="/quote"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] transition-colors hover:text-white"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>

            </div>

          </aside>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-[#C9A227]">

        <div className="arkan-container">

          <div className="flex flex-col items-center justify-between gap-7 py-14 text-center md:flex-row md:text-left">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#071A2F]/65">
                Arkan Trade Cargo & Freight
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#071A2F] sm:text-3xl">
                Need help moving your cargo?
              </h2>

            </div>

            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#071A2F] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#04111F]"
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

export default BlogArticle;

