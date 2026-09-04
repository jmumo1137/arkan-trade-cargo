import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="arkan-container">

        {/* =====================================================
            NAVBAR
        ====================================================== */}
        <nav className="flex h-28 items-center justify-between">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              relative
              z-20
              flex
              items-center
              rounded-xl
              bg-white
              px-3
              py-2
              shadow-lg
              overflow-visible
            "
          >
            <img
              src={logo}
              alt="Arkan Trade Cargo & Freight Ltd"
              className="
                h-20
                w-auto
                origin-left
                scale-110
                object-contain
                transition-transform
                duration-300
                lg:h-24
                lg:scale-125
              "
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="
                  text-sm
                  font-medium
                  text-white/85
                  transition-colors
                  duration-300
                  hover:text-[#C9A227]
                "
              >
                {item.label}
              </Link>
            ))}

            {/* Solutions */}
            <Link
              to="/services"
              className="
                flex
                items-center
                gap-1
                text-sm
                font-medium
                text-white/85
                transition-colors
                duration-300
                hover:text-[#C9A227]
              "
            >
              Solutions
              <ChevronDown size={14} />
            </Link>

          </div>

          {/* =====================================================
              DESKTOP CONTACT + CTA
          ====================================================== */}
          <div className="hidden items-center gap-6 lg:flex">

            {/* Phone */}
            <a
              href="tel:+254714031701"
              className="
                flex
                items-center
                gap-2
                text-sm
                text-white/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <Phone
                size={15}
                className="text-[#C9A227]"
              />

              <span>+254 714 031 701</span>
            </a>

            {/* Quote Button */}
            <Link
              to="/quote"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#C9A227]
                px-6
                py-3
                text-sm
                font-bold
                text-[#071A2F]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#D8B24A]
              "
            >
              Request a Quote

              <ArrowRight size={16} />
            </Link>

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              rounded-lg
              p-2
              text-white
              transition
              hover:bg-white/5
              lg:hidden
            "
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </nav>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {mobileOpen && (
          <div
            className="
              relative
              z-30
              rounded-2xl
              border
              border-white/10
              bg-[#071A2F]
              p-4
              shadow-2xl
              lg:hidden
            "
          >

            <div className="flex flex-col">

              {/* Mobile Navigation Links */}
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white/80
                    transition
                    duration-300
                    hover:bg-white/5
                    hover:text-[#C9A227]
                  "
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Phone */}
              <a
                href="tel:+254714031701"
                onClick={closeMobileMenu}
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-white/10
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white/80
                  transition
                  hover:border-[#C9A227]/40
                  hover:text-[#C9A227]
                "
              >
                <Phone
                  size={15}
                  className="text-[#C9A227]"
                />

                +254 714 031 701
              </a>

              {/* Mobile Quote Button */}
              <Link
                to="/quote"
                onClick={closeMobileMenu}
                className="
                  mt-4
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#C9A227]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-[#071A2F]
                  transition-all
                  duration-300
                  hover:bg-[#D8B24A]
                "
              >
                Request a Quote

                <ArrowRight size={16} />
              </Link>

            </div>

          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
