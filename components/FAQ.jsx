"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqData = {
    "About the Course": [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian offers customized corporate training programs across technology, data, leadership, AI, product, operations, and business-focused domains.",
      },
      {
        q: "What domain specializations are available?",
        a: "Available domains include Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations, Digital Enterprise, and Fintech.",
      },
    ],
    "About the Delivery": [
      {
        q: "How are the training programs delivered?",
        a: "Programs can be delivered online, offline, or in a blended format depending on the organization’s requirements.",
      },
      {
        q: "Can the training schedule be customized?",
        a: "Yes, training schedules can be customized based on team availability, learning goals, and business needs.",
      },
    ],
    Miscellaneous: [
      {
        q: "Can Accredian customize programs for our company?",
        a: "Yes, Accredian can customize learning paths based on skill gaps, business objectives, and employee roles.",
      },
      {
        q: "How can we enquire about a program?",
        a: "You can click the Enquire Now button and submit your details. An advisor will contact you.",
      },
    ],
  };

  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="px-6 py-20">
      <h2 className="mx-auto max-w-6xl text-4xl font-extrabold md:text-5xl">
        Frequently Asked <span className="text-[#1a73e8]">Questions</span>
      </h2>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-[300px_1fr]">
        {/* LEFT TABS */}
        <div className="space-y-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`w-full rounded-lg border p-6 text-xl font-bold shadow ${
                activeTab === tab
                  ? "text-[#1a73e8] border-blue-200"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT QUESTIONS */}
        <div className="space-y-8">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="border-b pb-5">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left text-xl font-bold"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="rounded-lg bg-[#1a73e8] px-8 py-4 text-xl font-bold text-white">
          Enquire Now
        </button>
      </div>
    </section>
  );
}