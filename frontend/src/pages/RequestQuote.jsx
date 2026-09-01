import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe2,
  Package,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

const RequestQuote = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    cargoType: "",
    shipmentMode: "",
    origin: "",
    destination: "",
    weight: "",
    volume: "",
    shipmentDate: "",
    handling: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend integration will be added later.
    console.log("Quote Request:", formData);

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071A2F]">

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#C9A227]/10" />

        <div className="arkan-container relative py-20 sm:py-24 lg:py-28">

          <Link
            to="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Home
          </Link>


          <div className="mx-auto max-w-4xl justify-center gap-3">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Request a Quote
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Tell us about
              <span className="block text-[#D4AF37]">
                your shipment.
              </span>
            </h1>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Provide a few details about your cargo and requirements.
              Our team can then understand your shipment and determine
              the right logistics solution.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM AREA
      ====================================================== */}
      <section className="arkan-container py-16 sm:py-20 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">


          {/* =================================================
              LEFT INFORMATION
          ================================================== */}
          <aside className="lg:col-span-4">

            <div className="lg:sticky lg:top-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Shipment Information
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                Let's understand what you're moving.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                The more information you provide, the better we can
                understand your requirements and prepare an appropriate
                logistics solution.
              </p>


              {/* Feature 1 */}
              <div className="mt-10 space-y-6">

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071A2F]">

                    <Package
                      size={18}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-bold text-[#071A2F]">
                      Cargo details
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Tell us what you're shipping and its approximate
                      size and weight.
                    </p>

                  </div>

                </div>


                {/* Feature 2 */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071A2F]">

                    <Globe2
                      size={18}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-bold text-[#071A2F]">
                      Origin & destination
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Let us know where the shipment is coming from
                      and where it needs to go.
                    </p>

                  </div>

                </div>


                {/* Feature 3 */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071A2F]">

                    <FileText
                      size={18}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-bold text-[#071A2F]">
                      Shipment requirements
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Include handling requirements or other
                      information relevant to the shipment.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </aside>


          {/* =================================================
              FORM
          ================================================== */}
          <div className="lg:col-span-8">

            {submitted ? (

              /* ============================================
                 SUCCESS STATE
              ============================================= */
              <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#071A2F]">

                  <CheckCircle2
                    size={30}
                    className="text-[#D4AF37]"
                  />

                </div>


                <h2 className="mt-7 text-3xl font-bold text-[#071A2F]">
                  Request received.
                </h2>


                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                  Thank you for contacting Arkan Trade Cargo &
                  Freight Solutions. Your shipment information has
                  been captured for review.
                </p>


                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold text-[#071A2F] underline underline-offset-4"
                >
                  Submit another request
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
              >

                {/* =========================================
                    STEP 01 — CONTACT DETAILS
                ========================================== */}
                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071A2F] text-xs font-bold text-[#D4AF37]">
                      01
                    </span>

                    <h2 className="text-xl font-bold text-[#071A2F]">
                      Your details
                    </h2>

                  </div>


                  <div className="mt-7 grid gap-5 sm:grid-cols-2">

                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />

                    <Input
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />

                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                    />

                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254..."
                    />

                  </div>

                </div>


                <div className="my-10 h-px bg-slate-200" />


                {/* =========================================
                    STEP 02 — CARGO DETAILS
                ========================================== */}
                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071A2F] text-xs font-bold text-[#D4AF37]">
                      02
                    </span>

                    <h2 className="text-xl font-bold text-[#071A2F]">
                      Cargo details
                    </h2>

                  </div>


                  <div className="mt-7 grid gap-5 sm:grid-cols-2">

                    <Select
                      label="Cargo Type"
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                      options={[
                        "Flowers",
                        "Fruits",
                        "Herbs",
                        "Meat",
                        "General Cargo",
                        "Other",
                      ]}
                    />


                    <Select
                      label="Shipment Mode"
                      name="shipmentMode"
                      value={formData.shipmentMode}
                      onChange={handleChange}
                      required
                      options={[
                        "Air Freight",
                        "Sea Freight",
                        "Road Freight",
                        "Not Sure",
                      ]}
                    />


                    <Input
                      label="Weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="e.g. 500 KG"
                    />


                    <Input
                      label="Volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      placeholder="e.g. 2 CBM"
                    />

                  </div>

                </div>


                <div className="my-10 h-px bg-slate-200" />


                {/* =========================================
                    STEP 03 — SHIPMENT ROUTE
                ========================================== */}
                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071A2F] text-xs font-bold text-[#D4AF37]">
                      03
                    </span>

                    <h2 className="text-xl font-bold text-[#071A2F]">
                      Shipment route
                    </h2>

                  </div>


                  <div className="mt-7 grid gap-5 sm:grid-cols-2">

                    <Input
                      label="Origin"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Nairobi, Kenya"
                    />

                    <Input
                      label="Destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Dubai, UAE"
                    />

                    <Input
                      label="Preferred Shipment Date"
                      name="shipmentDate"
                      type="date"
                      value={formData.shipmentDate}
                      onChange={handleChange}
                    />

                  </div>

                </div>


                <div className="my-10 h-px bg-slate-200" />


                {/* =========================================
                    STEP 04 — REQUIREMENTS
                ========================================== */}
                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071A2F] text-xs font-bold text-[#D4AF37]">
                      04
                    </span>

                    <h2 className="text-xl font-bold text-[#071A2F]">
                      Additional requirements
                    </h2>

                  </div>


                  <div className="mt-7">

                    <label
                      htmlFor="handling"
                      className="text-xs font-bold text-[#071A2F]"
                    >
                      Special Handling Requirements
                    </label>

                    <textarea
                      id="handling"
                      name="handling"
                      value={formData.handling}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Temperature control, fragile cargo, perishables, documentation requirements, etc."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#071A2F] outline-none transition-all placeholder:text-slate-400 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/10"
                    />

                  </div>


                  <div className="mt-5">

                    <label
                      htmlFor="message"
                      className="text-xs font-bold text-[#071A2F]"
                    >
                      Additional Information
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us anything else we should know about your shipment."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#071A2F] outline-none transition-all placeholder:text-slate-400 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/10"
                    />

                  </div>

                </div>


                {/* =========================================
                    SUBMIT
                ========================================== */}
                <div className="mt-10 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">

                  <p className="max-w-md text-xs leading-5 text-slate-400">
                    By submitting this form, you are requesting a
                    quotation. Final pricing will depend on shipment
                    details and applicable logistics requirements.
                  </p>


                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#071A2F] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0B243F]"
                  >

                    Submit Quote Request

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C9A227] text-[#071A2F]">

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                    </span>

                  </button>

                </div>

              </form>

            )}

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   INPUT COMPONENT
========================================================= */

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-xs font-bold text-[#071A2F]"
      >

        {label}

        {required && (
          <span className="ml-1 text-[#C9A227]">
            *
          </span>
        )}

      </label>


      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#071A2F] outline-none transition-all placeholder:text-slate-400 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/10"
      />

    </div>
  );
};


/* =========================================================
   SELECT COMPONENT
========================================================= */

const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-xs font-bold text-[#071A2F]"
      >

        {label}

        {required && (
          <span className="ml-1 text-[#C9A227]">
            *
          </span>
        )}

      </label>


      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#071A2F] outline-none transition-all focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/10"
      >

        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
};


export default RequestQuote;