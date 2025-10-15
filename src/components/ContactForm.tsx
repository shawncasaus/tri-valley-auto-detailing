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
        setAvailability([{ day: "", start: "", end: "" }]); // Reset to default slot
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
      className="relative min-h-screen w-full bg-black flex justify-center items-center py-4 sm:py-12"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/contact-background.jpg"
            alt=""
            fill
            loading="lazy"
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
      </div>

      <div className="relative z-10 px-2 sm:px-4 lg:px-8 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-offwhite p-3 sm:p-6 lg:p-8 rounded-xl shadow-md space-y-3 sm:space-y-6 border-2 min-h-[90vh] sm:min-h-auto flex flex-col justify-center"
            role="form"
            aria-labelledby="contact-heading"
            noValidate
          >
            <h2 id="contact-heading" className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-primary mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 sm:p-3 rounded-2xl bg-white shadow-lg w-full text-base"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  aria-describedby="firstName-error"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  required
                  placeholder="Last Name"
                  className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 sm:p-3 rounded-2xl bg-white shadow-lg w-full text-base"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  aria-describedby="lastName-error"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 sm:p-3 rounded-2xl bg-white shadow-lg w-full text-base"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-describedby="email-error"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-3 sm:p-3 rounded-2xl bg-white shadow-lg w-full text-base"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  aria-describedby="phone-error"
                />
              </div>
            </div>

            <fieldset className="space-y-4">
              <legend className="font-medium text-sm text-primary mt-4 mb-2">
                Location of vehicle for detail
              </legend>

              <div>
                <label htmlFor="street" className="sr-only">Street Address</label>
                <input
                  id="street"
                  required
                  type="text"
                  placeholder="Street Address"
                  className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                  value={form.street}
                  onChange={(e) => setForm({ ...form, street: e.target.value })}
                  aria-describedby="street-error"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="sr-only">City</label>
                  <input
                    id="city"
                    required
                    type="text"
                    placeholder="City"
                    className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    aria-describedby="city-error"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="sr-only">State</label>
                  <input
                    id="state"
                    required
                    type="text"
                    placeholder="State"
                    className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    aria-describedby="state-error"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="zip" className="sr-only">ZIP / Postal Code</label>
                <input
                  id="zip"
                  required
                  type="text"
                  placeholder="ZIP / Postal Code"
                  className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl bg-white shadow-lg"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  aria-describedby="zip-error"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-medium text-sm text-primary mt-4 mb-2">
                Availability
              </legend>
              <div role="group" aria-label="Available time slots">
                {availability.map((slot, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center relative bg-white border-primary p-4 rounded-0 shadow-lg"
                  >
                    <div>
                      <label htmlFor={`day-${index}`} className="sr-only">Day of week</label>
                      <select
                        id={`day-${index}`}
                        required
                        className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl shadow-lg w-full"
                        value={slot.day}
                        onChange={(e) => updateSlot(index, "day", e.target.value)}
                        aria-label={`Availability slot ${index + 1} - Day`}
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
                    </div>
                    <div>
                      <label htmlFor={`start-${index}`} className="sr-only">Start time</label>
                      <input
                        id={`start-${index}`}
                        required
                        type="time"
                        className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl shadow-lg w-full"
                        value={slot.start}
                        onChange={(e) => updateSlot(index, "start", e.target.value)}
                        aria-label={`Availability slot ${index + 1} - Start time`}
                      />
                    </div>
                    <div>
                      <label htmlFor={`end-${index}`} className="sr-only">End time</label>
                      <input
                        id={`end-${index}`}
                        required
                        type="time"
                        className="border-primary border-focus-secondary focus:ring-0 focus:outline-none p-2 rounded-xl shadow-lg w-full"
                        value={slot.end}
                        onChange={(e) => updateSlot(index, "end", e.target.value)}
                        aria-label={`Availability slot ${index + 1} - End time`}
                      />
                    </div>

                    {availability.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeAvailabilitySlot(index)}
                        className="absolute -top-2 -right-2 text-red-500 text-sm bg-white rounded-full px-2 py-0.5 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        aria-label={`Remove availability slot ${index + 1}`}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addAvailabilitySlot}
                className="text-green-500 text-sm bg-white rounded-full px-2 py-0.5 shadow-lg m-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Add another availability slot"
              >
                +
              </button>
            </fieldset>

            <div>
              <label htmlFor="vehicle" className="sr-only">Vehicle Make and Model</label>
              <input
                id="vehicle"
                type="text"
                placeholder="Vehicle Make and Model"
                className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none bg-white p-3 rounded-2xl shadow-lg"
                value={form.vehicle}
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                aria-describedby="vehicle-error"
              />
            </div>

            <div>
              <label htmlFor="description" className="sr-only">Service Description</label>
              <textarea
                id="description"
                required
                placeholder="Describe the service you're looking for"
                className="w-full border-primary border-focus-secondary focus:ring-0 focus:outline-none bg-white p-3 rounded-2xl shadow-lg min-h-[140px]"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                aria-describedby="description-error"
              />
            </div>

            <div className="flex justify-left">
              <button 
                type="submit" 
                className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto min-h-[44px] text-base sm:text-lg py-3 sm:py-2"
                aria-describedby="submit-status"
              >
                Send Message
              </button>
            </div>

            {status && (
              <div 
                id="submit-status"
                role="status"
                aria-live="polite"
                className={`text-sm text-center p-3 rounded-lg ${
                  status.includes("Thank you") || status.includes("successfully") 
                    ? "text-green-600 bg-green-50 border border-green-200" 
                    : status.includes("Sending") 
                    ? "text-blue-600 bg-blue-50 border border-blue-200"
                    : "text-red-600 bg-red-50 border border-red-200"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
