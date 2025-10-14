"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    vehicle: "",
    description: "",
  });

  type AvailabilitySlot = {
    day: string;
    start: string;
    end: string;
  };

  const [status, setStatus] = useState("");
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([{ day: "", start: "", end: "" }]);

  const updateSlot = (
    index: number,
    field: keyof AvailabilitySlot,
    value: string,
  ) => {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  };

  const addAvailabilitySlot = () => {
    setAvailability([...availability, { day: "", start: "", end: "" }]);
  };

  const removeAvailabilitySlot = (index: number) => {
    setAvailability(availability.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, availability }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "Message sent successfully!");
        // Reset form on successful submission
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          vehicle: "",
          description: "",
        });
        setAvailability([]);
      } else {
        setStatus(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-black flex justify-center items-center py-12"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/contact-background.jpg"
            alt="Contact background"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="max-w-2xl mx-auto flex align-bottom">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-offwhite p-8 rounded-xl shadow-md space-y-6 border-2"
          >
            <h3 className="text-4xl font-bold text-center text-primary mb-4">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="First Name"
                className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 rounded-2xl bg-white shadow-lg"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 rounded-2xl bg-white shadow-lg"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                required
                placeholder="Email"
                className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 rounded-2xl bg-white shadow-lg"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 rounded-2xl bg-white shadow-lg"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="space-y-4">
              <label className="font-medium text-sm text-primary mt-4 mb-2">
                Location of vehicle for detail
              </label>

              <input
                required
                type="text"
                placeholder="Street Address"
                className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                value={form.street}
                onChange={(e) => setForm({ ...form, street: e.target.value })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="City"
                  className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
                <input
                  required
                  type="text"
                  placeholder="State"
                  className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                />
              </div>
              <input
                required
                type="text"
                placeholder="ZIP / Postal Code"
                className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
              />
            </div>

            <div className="space-y-4">
              <label className="font-medium text-gray-700font-medium text-sm text-primary mt-4 mb-2">
                Availability
              </label>
              {availability.map((slot, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center relative bg-white border-primary p-4 rounded-0 shadow-lg"
                >
                  <select
                    required
                    className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl shadow-lg"
                    value={slot.day}
                    onChange={(e) => updateSlot(index, "day", e.target.value)}
                  >
                    <option value="">Day</option>
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="time"
                    className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl shadow-lg"
                    value={slot.start}
                    onChange={(e) => updateSlot(index, "start", e.target.value)}
                  />
                  <input
                    required
                    type="time"
                    className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl shadow-lg"
                    value={slot.end}
                    onChange={(e) => updateSlot(index, "end", e.target.value)}
                  />

                  {availability.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeAvailabilitySlot(index)}
                      className="absolute -top-2 -right-2 text-red-500 text-sm bg-white rounded-full px-2 py-0.5 shadow-lg"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addAvailabilitySlot}
                className="text-green-500 text-sm bg-white rounded-full px-2 py-0.5 shadow-lg m-2"
              >
                +
              </button>
            </div>

            <input
              type="text"
              placeholder="Vehicle Make and Model"
              className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none bg-white p-3 rounded-2xl shadow-lg"
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
            />

            <textarea
              required
              placeholder="Describe the service you're looking for"
              className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none bg-white p-3 rounded-2xl shadow-lg min-h-[140px]"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <div className="flex justify-left">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>

            {status && (
              <p className={`text-sm text-center p-3 rounded-lg ${
                status.includes("Thank you") || status.includes("successfully") 
                  ? "text-green-600 bg-green-50 border border-green-200" 
                  : status.includes("Sending") 
                  ? "text-blue-600 bg-blue-50 border border-blue-200"
                  : "text-red-600 bg-red-50 border border-red-200"
              }`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
