"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "bayer",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.",
    },
    {
      name: "reliance",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision.",
    },
    {
      name: "adp",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey.",
    },
  ];

  // 👇 ONLY 2 SLIDES
  const slides = [
    [testimonials[0], testimonials[1]],
    [testimonials[1], testimonials[2]],
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Testimonials from{" "}
          <span className="text-blue-600">Our Partners</span>
        </h2>
        <p className="mt-3 text-lg">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((pair, i) => (
            <div key={i} className="min-w-full flex gap-6">
              {pair.map((item, j) => (
                <div
                  key={j}
                  className="w-1/2 rounded-xl border p-10 shadow-sm"
                >
                  <img
                    src={`/assets/${item.name}.png`}
                    className="h-12 w-20 object-contain"
                  />
                  <p className="mt-6 text-lg text-gray-700">
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ONLY 2 DOTS */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              index === i ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}