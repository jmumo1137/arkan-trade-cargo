
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071A2F] shadow-lg">
      <div className="arkan-container relative">

        <nav className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Arkan Trade Cargo & Freight Ltd"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-white/85 transition-colors duration-300 hover:text-[#C9A227]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+254714031701"
              className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <Phone size={15} className="text-[#C9A227]" />
              +254 714 031 701
            </a>

            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-full border border-[#C9A227] bg-[#C9A227] px-6 py-3 text-sm font-bold text-[#071A2F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-[#D4AF37] hover:shadow-[0_0_15px_rgba(201,162,39,0.35)]"
            >
              Request a Quote
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X size={27} /> : <Menu size={27} />}
          </button>

        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl border border-white/10 bg-[#071A2F] p-4 shadow-2xl lg:hidden">

            <div className="flex flex-col">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-[#C9A227]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/quote"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 font-bold text-[#071A2F] transition hover:bg-[#D8B24A]"
              >
                Request a Quote
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
