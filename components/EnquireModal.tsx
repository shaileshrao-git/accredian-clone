"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function EnquireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Lead submitted successfully!");
        onClose();
      } else {
        alert("❌ Something went wrong");
      }
    } catch (err) {
      alert("❌ Error submitting form");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white">

        {/* LEFT IMAGE */}
        <div className="hidden w-1/2 md:block">
          <img
            src="/assets/course4.png"
            alt="popup"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full p-6 md:w-1/2 md:p-8">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-gray-500"
          >
            <X size={26} />
          </button>

          <h2 className="mb-6 text-2xl font-semibold">Enquire Now</h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full border-b pb-2 outline-none"
              required
            />

            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border-b pb-2 outline-none"
              required
            />

            <input
              name="phone"
              onChange={handleChange}
              placeholder="Enter Phone"
              className="w-full border-b pb-2 outline-none"
              required
            />

            <input
              name="company"
              onChange={handleChange}
              placeholder="Enter Company Name"
              className="w-full border-b pb-2 outline-none"
            />

            {/* DOMAIN */}
            <select
              name="domain"
              onChange={handleChange}
              className="w-full border-b pb-2 outline-none"
            >
              <option value="">Select Domain</option>
              <option>AI & Data</option>
              <option>Leadership</option>
              <option>Cloud</option>
              <option>Cybersecurity</option>
            </select>

            <input
              name="candidates"
              onChange={handleChange}
              placeholder="No. of Candidates"
              className="w-full border-b pb-2 outline-none"
            />

            {/* MODE */}
            <select
              name="mode"
              onChange={handleChange}
              className="w-full border-b pb-2 outline-none"
            >
              <option value="">Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>

            <input
              name="location"
              onChange={handleChange}
              placeholder="Location"
              className="w-full border-b pb-2 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white font-semibold"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}