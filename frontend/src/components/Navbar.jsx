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
        ===================================================== */}
        <nav className="flex h-24 items-center justify-between lg:h-28">

          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Arkan Trade Cargo & Freight Ltd"
              className="h-16 w-auto object-contain lg:h-20"
            />
          </Link>


          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <div className="hidden items-center gap-7 lg:flex">

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

          </div>


          {/* =====================================================
              DESKTOP RIGHT SIDE
          ===================================================== */}
          <div className="hidden items-center gap-6 lg:flex">

            {/* Phone */}
            <a
              href="tel:+254714031701"
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
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

              <span>
                +254 714 031 701
              </span>
            </a>


            {/* Quote CTA */}
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
                shadow-lg
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
          ===================================================== */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              rounded-lg
              p-2
              text-white
              transition
              hover:bg-white/10
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
        ===================================================== */}
        {mobileOpen && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#071A2F]/95
              p-4
              shadow-2xl
              backdrop-blur-md
              lg:hidden
            "
          >

            <div className="flex flex-col">

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
                    text-white/85
                    transition-all
                    duration-200
                    hover:bg-white/5
                    hover:text-[#C9A227]
                  "
                >
                  {item.label}
                </Link>
              ))}


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

