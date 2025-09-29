"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const contactInfoData = [
  {
    icon: Phone,
    label: "Give us a call",
    content: "+234 810 071 6967",
    href: "tel:+2348100716967",
  },
  {
    icon: Mail,
    label: "Send us an email",
    content: "office@covenantmfb.com.ng",
    href: "mailto:office@covenantmfb.com.ng",
  },
  {
    icon: MapPin,
    label: "Head Office Branch",
    content: (
      <>
        Covenant Microfinance Bank Ltd <br />
        KM 10, Idiroko Road, Canaanland <br />
        Ota.
      </>
    ),
    href: "https://maps.google.com/?q=Covenant+Microfinance+Bank+Ltd+KM+10,+Idiroko+Road,+Canaanland+Ota",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    content: "Monday - Friday: 8am – 3pm",
    href: "#",
  },
];

const ContactInfoCard: React.FC<(typeof contactInfoData)[0]> = ({
  icon: Icon,
  label,
  content,
  href,
}) => {
  const CardContent = () => (
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300 p-3">
        <Icon className="h-4 w-4 text-green-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 text-base font-bold text-green-800">{content}</p>
      </div>
    </div>
  );

  return href !== "#" ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md ${
        href.startsWith("tel:") || href.startsWith("mailto:")
          ? "underline decoration-green-800"
          : "no-underline"
      }`}
    >
      <CardContent />
    </a>
  ) : (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <CardContent />
    </div>
  );
};

// Main component for the entire page content
const ContactPageContent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Check console for data)");
  };

  return (
    <section className="bg-[#F9FFF5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* --- Left Column: Info --- */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Our Team
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with our team to explore how we can support your
              financial journey. We're here to answer your questions and provide
              personalized assistance.
            </p>
            <div className="mt-10 space-y-6">
              {contactInfoData.map((item) => (
                <ContactInfoCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              We'll get in touch shortly
            </h2>
            <p className="mt-2 text-base text-gray-600">
              We're here to answer your questions and provide personalized
              assistance.
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-sm border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-sm  border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="w-full rounded-sm  border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter your subject"
                      className="w-full rounded-sm  border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message..."
                      className="w-full rounded-sm  border border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1D9B5E] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Send message
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
