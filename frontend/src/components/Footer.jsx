
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#04111F] text-white">

      {/* =====================================================
          FOOTER CTA
      ====================================================== */}

      <section className="border-b border-white/10">

        <div className="arkan-container py-16 sm:py-20">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Let's Move Your Cargo
                </span>

              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have a shipment to move?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                Talk to Arkan about your freight, customs,
                import or export requirements.
              </p>

            </div>


            <Link
              to="/quote"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37]"
            >
              Request a Quote

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="arkan-container py-16 sm:py-20">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">


          {/* =================================================
              BRAND
          ================================================== */}

          <div className="lg:col-span-5">

            <Link
              to="/"
              className="inline-block"
            >
              <img
                src={logo}
                alt="Arkan Trade Cargo & Freight Solutions"
                className="h-16 w-auto object-contain sm:h-20"
              />
            </Link>


            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Connecting Kenyan businesses to international
              markets through dependable freight, customs
              and cargo solutions.
            </p>


            {/* SOCIAL PLACEHOLDERS */}

            <div className="mt-7 flex items-center gap-3">

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/30">
                f
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/30">
                IG
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/30">
                in
              </span>

            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================== */}

          <div className="lg:col-span-2">

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Company
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                to="/"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/industries"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Industries
              </Link>

              <Link
                to="/blog"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Insights
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Contact
              </Link>

            </nav>

          </div>


          {/* =================================================
              SOLUTIONS
          ================================================== */}

          <div className="lg:col-span-2">

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Solutions
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                to="/services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Air Freight
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Sea Freight
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Road Freight
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Customs Clearance
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Import & Export
              </Link>

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div className="lg:col-span-3">

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact
            </h3>


            <div className="mt-6 space-y-6">


              {/* OFFICE */}

              <Link
                to="/contact"
                className="flex gap-3 group"
              >

                <MapPin
                  size={17}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/55 transition-colors group-hover:text-white">
                    JKIA
                    <br />
                    Nairobi, Kenya
                  </p>

                </div>

              </Link>


              {/* PHONE */}

              <div className="flex gap-3">

                <Phone
                  size={17}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Phone
                  </p>

                  <a
                    href="tel:+254714031701"
                    className="mt-1 block text-sm text-white/55 transition-colors hover:text-white"
                  >
                    +254 714 031 701
                  </a>

                </div>

              </div>


              {/* EMAIL */}

              <div className="flex gap-3">

                <Mail
                  size={17}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Email
                  </p>

                  <a
                    href="mailto:arkancargoandfreight@gmail.com"
                    className="mt-1 block break-all text-sm text-white/55 transition-colors hover:text-white"
                  >
                    arkancargoandfreight@gmail.com
                  </a>

                </div>

              </div>


              {/* FAQ */}

              <Link
                to="/faq"
                className="inline-flex text-sm font-semibold text-white/50 transition-colors hover:text-[#D4AF37]"
              >
                Frequently Asked Questions →
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

<div className="border-t border-white/10">
  <div className="arkan-container flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

    {/* Copyright */}
    <div className="flex flex-col gap-1">
      <p className="text-xs text-white/40">
        © {new Date().getFullYear()} Arkan Trade Cargo & Freight Solutions.
      </p>

      <p className="text-[11px] text-white/20">
        Connecting Kenya to the World.
      </p>
    </div>

    {/* Footer Links */}
    <div className="flex items-center gap-6">
      <Link
        to="/faq"
        className="group relative text-xs font-medium text-white/40 transition-colors duration-300 hover:text-white"
      >
        FAQs
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
      </Link>

      <Link
        to="/contact"
        className="group relative text-xs font-medium text-white/40 transition-colors duration-300 hover:text-white"
      >
        Contact
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
      </Link>
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;

