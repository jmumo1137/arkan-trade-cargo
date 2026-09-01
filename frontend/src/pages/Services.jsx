import {
  ArrowRight,
  Plane,
  Ship,
  Truck,
  FileCheck2,
  PackageCheck,
  Snowflake,
  Warehouse,
  ShieldCheck,
  Boxes,
  Globe2,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description:
        "Fast and dependable air cargo solutions for time-sensitive shipments, exports, imports and international cargo movement.",
      features: [
        "Air cargo booking",
        "International air freight",
        "Export cargo coordination",
        "Import cargo handling",
      ],
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description:
        "Cost-effective ocean freight solutions for businesses moving larger volumes of cargo across international markets.",
      features: [
        "Full container solutions",
        "Consolidated cargo",
        "Import coordination",
        "Port and documentation support",
      ],
    },
    {
      icon: Truck,
      title: "Road Freight",
      description:
        "Reliable inland transportation connecting ports, airports, warehouses, suppliers and final destinations.",
      features: [
        "Local transportation",
        "Cross-border movement",
        "Cargo collection",
        "Last-mile coordination",
      ],
    },
    {
      icon: FileCheck2,
      title: "Customs Clearance",
      description:
        "Professional customs coordination designed to help businesses navigate import and export clearance requirements efficiently.",
      features: [
        "Import clearance",
        "Export clearance",
        "Customs documentation",
        "Regulatory coordination",
      ],
    },
    {
      icon: PackageCheck,
      title: "Export Documentation",
      description:
        "Documentation support for exporters preparing cargo for local, regional and international markets.",
      features: [
        "Export documentation",
        "Shipping documentation",
        "Cargo declarations",
        "Documentation coordination",
      ],
    },
    {
      icon: Snowflake,
      title: "Perishable Cargo",
      description:
        "Specialized logistics coordination for temperature-sensitive and time-critical products including flowers, fruits, herbs and meat.",
      features: [
        "Temperature-sensitive cargo",
        "Fresh produce",
        "Flower exports",
        "Time-critical shipments",
      ],
    },
    {
      icon: Boxes,
      title: "Cargo Consolidation",
      description:
        "Consolidation solutions that help businesses combine smaller shipments for efficient international cargo movement.",
      features: [
        "LCL cargo",
        "Shipment consolidation",
        "Cargo coordination",
        "International forwarding",
      ],
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description:
        "Cargo storage and handling solutions that help businesses manage goods before onward transportation.",
      features: [
        "Cargo storage",
        "Goods handling",
        "Inventory coordination",
        "Distribution support",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cargo Insurance",
      description:
        "Cargo protection solutions designed to help businesses manage risks associated with goods in transit.",
      features: [
        "Transit risk support",
        "Insurance coordination",
        "Cargo documentation",
        "Shipment protection",
      ],
    },
    {
      icon: Globe2,
      title: "International Logistics",
      description:
        "Coordinated logistics solutions connecting Kenyan businesses with suppliers, buyers and markets around the world.",
      features: [
        "Global cargo coordination",
        "Import logistics",
        "Export logistics",
        "International forwarding",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Courier Services",
      description:
        "Convenient courier and document movement solutions for businesses requiring reliable delivery and collection.",
      features: [
        "Document delivery",
        "Parcel coordination",
        "Business courier",
        "Delivery support",
      ],
    },
    {
      icon: Truck,
      title: "End-to-End Logistics",
      description:
        "Integrated logistics coordination bringing freight, customs, documentation, transportation and delivery together.",
      features: [
        "Door-to-door coordination",
        "Multi-modal freight",
        "Shipment tracking support",
        "Complete logistics management",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Tell Us What You Need",
      text: "Share your cargo details, origin, destination, timeline, and any specific handling requirements.",
    },
    {
      number: "02",
      title: "We Plan Your Shipment",
      text: "Our team identifies the appropriate freight option and coordinates the required documentation and logistics.",
    },
    {
      number: "03",
      title: "Cargo Moves",
      text: "We coordinate the shipment through the relevant transport and clearance stages toward its destination.",
    },
    {
      number: "04",
      title: "Delivery & Support",
      text: "We remain available throughout the logistics process to help keep your shipment moving efficiently.",
    },
  ];

  return (
    <main className="bg-[#F5F7FA] text-[#172033]">

      {/* =====================================================
          SERVICES HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#04111F]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#04111F]/85" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04111F]/80 via-[#071A2F]/70 to-[#04111F]" />

        <div className="relative z-10 arkan-container">

          <div className="flex min-h-[520px] items-center justify-center py-32 text-center">

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Our Services
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />

              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Logistics Solutions
                <span className="block text-[#D4AF37]">
                  That Keep Business Moving.
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                From air and sea freight to customs clearance, road
                transportation and specialized cargo handling, we provide
                coordinated logistics solutions built around your shipment.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B24A]"
                >
                  Request a Quote
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#D4AF37]"
                >
                  Talk to Our Team
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="arkan-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
              One logistics partner.
              <span className="text-[#C9A227]">
                {" "}Multiple solutions.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              Every shipment has different requirements. Our role is to
              coordinate the right combination of freight, documentation,
              customs, transportation and cargo handling services to help
              your goods move efficiently.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}
      <section className="bg-[#F5F7FA] py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl"
                >

                  {/* Icon */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#071A2F] transition-colors duration-300 group-hover:bg-[#C9A227]">

                    <Icon
                      size={23}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#071A2F]"
                    />

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-[#071A2F]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 border-t border-[#E2E8F0] pt-5">

                    <ul className="space-y-3">

                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-[#172033]"
                        >

                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#C9A227]"
                          />

                          <span>{feature}</span>

                        </li>
                      ))}

                    </ul>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-[#071A2F] py-20 lg:py-28">

        <div className="arkan-container">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              A simpler way to
              <span className="text-[#D4AF37]">
                {" "}move cargo.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              We make the logistics process easier by coordinating the
              important stages of your shipment from planning to delivery.
            </p>

          </div>


          {/* Process */}
          <div className="relative mt-16">

            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative"
                >

                  {/* Number */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227] bg-[#071A2F] text-sm font-bold text-[#D4AF37]">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIALIZED CARGO
      ===================================================== */}
      <section className="bg-white py-20 lg:py-28">

        <div className="arkan-container">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">

              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=85"
                alt="Cargo containers at a logistics facility"
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Specialized Cargo
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                Handling cargo that
                <span className="text-[#C9A227]">
                  {" "}needs extra care.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-[#64748B]">
                Certain products require speed, careful coordination, and
                specialized handling. We support businesses moving
                temperature-sensitive and time-critical cargo across
                international markets.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Flowers and horticultural products",
                  "Fresh fruits and vegetables",
                  "Meat and other perishables",
                  "Time-sensitive commercial cargo",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA]">

                      <CheckCircle2
                        size={17}
                        className="text-[#C9A227]"
                      />

                    </div>

                    <span className="text-sm font-semibold text-[#172033]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <Link
                to="/quote"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#071A2F] transition-colors hover:text-[#C9A227]"
              >
                Discuss your cargo requirements
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#C9A227]">

        <div className="arkan-container">

          <div className="flex flex-col items-center justify-between gap-8 py-16 text-center md:flex-row md:text-left">

            <div>

              <h2 className="text-3xl font-bold text-[#071A2F] sm:text-4xl">
                Have cargo ready to move?
              </h2>

              <p className="mt-2 max-w-xl text-[#071A2F]/70">
                Tell us what you are shipping and where it needs to go.
                We will help you determine the right logistics solution.
              </p>

            </div>

            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#071A2F] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#04111F]"
            >
              Request a Quote
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Services;

