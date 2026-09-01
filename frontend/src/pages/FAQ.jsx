
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What freight services does Arkan provide?",
      answer:
        "Arkan Trade Cargo & Freight Solutions provides air freight, sea freight, road freight, customs clearance, import and export documentation, cargo consolidation, warehousing, cargo insurance, courier services, and specialized handling for perishable cargo.",
    },
    {
      question: "Do you handle perishable cargo?",
      answer:
        "Yes. We support the movement of perishable products such as flowers, fruits, herbs, and meat. Handling requirements can be discussed with our team so the appropriate logistics solution can be arranged.",
    },
    {
      question: "Can you arrange customs clearance?",
      answer:
        "Yes. Our customs clearance services help businesses navigate import and export procedures and documentation requirements. Share your shipment details with us and our team can advise on the appropriate process.",
    },
    {
      question: "Which countries do you ship to?",
      answer:
        "We support international cargo movements from Kenya to global destinations through our freight and logistics network. The available routing and transportation method will depend on the cargo, destination, timing, and shipment requirements.",
    },
    {
      question: "Can I request a freight quotation online?",
      answer:
        "Yes. You can use our Request a Quote page to provide information about your cargo, origin, destination, preferred transport mode, weight, volume, and other requirements. Our team can then review the shipment details.",
    },
    {
      question: "What information do I need when requesting a quote?",
      answer:
        "Useful information includes the type of cargo, origin, destination, preferred transportation method, approximate weight or volume, preferred shipment date, and any special handling or documentation requirements.",
    },
    {
      question: "Do you transport goods by air and sea?",
      answer:
        "Yes. We provide both air freight and sea freight solutions. Air freight can be suitable when speed is important, while sea freight can be appropriate for larger or less time-sensitive shipments.",
    },
    {
      question: "Can you help with export documentation?",
      answer:
        "Yes. We assist with export documentation as part of our logistics services. Documentation requirements can vary depending on the commodity, destination, and applicable regulations.",
    },
    {
      question: "How do I contact Arkan for shipment support?",
      answer:
        "You can contact our team by phone, email, WhatsApp, or through the contact form on this website. For a specific shipment, the Request a Quote page is the best place to provide detailed cargo information.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071A2F]">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#C9A227]/10" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-white/5" />


        <div className="arkan-container relative">

          <div className="flex min-h-[500px] items-center justify-center py-28">

            <div className="mx-auto max-w-4xl text-center">

              {/* Eyebrow */}
              <div className="mb-6 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Frequently Asked Questions
                </span>

                <span className="h-px w-10 bg-[#C9A227]" />

              </div>


              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">

                Answers to your
                <span className="block text-[#D4AF37]">
                  logistics questions.
                </span>

              </h1>


              {/* Description */}
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Find answers to common questions about our freight,
                customs, cargo handling and logistics services.
              </p>

            </div>

          </div>

        </div>


        {/* Gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />

      </section>


      {/* =====================================================
          FAQ CONTENT
      ====================================================== */}
      <section className="arkan-container py-16 sm:py-20 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">


          {/* =================================================
              INTRODUCTION
          ================================================== */}
          <aside className="lg:col-span-4">

            <div className="lg:sticky lg:top-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Need More Information?
              </p>


              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A2F] sm:text-4xl">
                We're here to help you move with confidence.
              </h2>


              <p className="mt-5 text-sm leading-7 text-slate-500">
                Every shipment is different. If you cannot find the
                information you are looking for, our team can discuss
                your specific cargo and logistics requirements with you.
              </p>


              {/* Contact Card */}
              <div className="mt-9 rounded-2xl bg-[#071A2F] p-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A227]">

                  <MessageCircle
                    size={21}
                    className="text-[#071A2F]"
                  />

                </div>


                <h3 className="mt-5 text-lg font-bold text-white">
                  Have another question?
                </h3>


                <p className="mt-2 text-sm leading-6 text-white/55">
                  Talk to our team about your shipment, route,
                  documentation, or cargo requirements.
                </p>


                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] transition-colors hover:text-white"
                >
                  Contact our team
                  <ArrowRight size={16} />
                </Link>

              </div>


              {/* Quote CTA */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-7">

                <p className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                  Ready to ship?
                </p>


                <h3 className="mt-3 text-xl font-bold text-[#071A2F]">
                  Request a quotation.
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tell us about your cargo and we'll help determine
                  the right logistics solution.
                </p>


                <Link
                  to="/quote"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#071A2F] transition-colors hover:text-[#C9A227]"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </aside>


          {/* =================================================
              QUESTIONS
          ================================================== */}
          <div className="lg:col-span-8">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

              {faqs.map((faq, index) => {

                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-slate-200 last:border-b-0"
                  >

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-[#F8FAFC] sm:px-8"
                      aria-expanded={isOpen}
                    >

                      <span className="text-sm font-bold leading-6 text-[#071A2F] sm:text-base">
                        {faq.question}
                      </span>


                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#C9A227] bg-[#C9A227] text-[#071A2F]"
                            : "border-slate-200 bg-white text-[#071A2F]"
                        }`}
                      >

                        <ChevronDown
                          size={17}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />

                      </span>

                    </button>


                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="px-6 pb-6 sm:px-8">

                          <p className="max-w-2xl text-sm leading-7 text-slate-500">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#071A2F]">

        <div className="arkan-container py-16 sm:py-20">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Let's Move Your Cargo
              </p>


              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Have a shipment in mind?
              </h2>


              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                Tell us what you're moving, where it's going and
                what you need. Our team can help you find the right
                logistics solution.
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

export default FAQ;

