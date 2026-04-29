"use client";

import { useState } from "react";
import EnquireModal from "./EnquireModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="home" className="bg-[#e9eef5] px-5 pb-8 pt-4 md:bg-white md:px-6 md:py-10">
        <div className="mx-auto grid max-w-7xl items-center rounded-none bg-[#e9eef5] md:rounded-3xl md:p-12 md:grid-cols-2">

          {/* IMAGE FIRST ON MOBILE */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <img
              src="/assets/hero.png"
              alt="Hero"
              className="w-full max-w-[430px] object-contain md:w-[570px] md:translate-x-8"
            />
          </div>

          {/* TEXT BELOW ON MOBILE */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="mt-6 text-[30px] font-extrabold leading-tight md:mt-0 md:text-[56px] md:leading-[1.1]">
              Next-Gen <span className="text-blue-600">Expertise</span> For Your{" "}
              <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="mt-6 text-lg font-medium md:text-2xl">
              Cultivate high-performance teams through expert learning.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 text-left text-lg font-semibold md:flex md:flex-wrap md:gap-8">
              {["Tailored Solutions", "Industry Insights", "Expert Guidance", "Measurable Impact"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-600 text-green-600">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white shadow-lg md:w-auto md:px-8"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <EnquireModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}