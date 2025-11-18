"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const contactInfoData = [
  {
    icon: Phone,
    label: "Give us a call",
    content: ["+234 810 071 6957", "+234 803 535 2857"],
    href: ["tel:+2348100716957", "tel:+2348035352857"],
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

interface ContactInfoCardProps {
  icon: React.ElementType;
  label: string;
  content: string | string[] | React.ReactNode;
  href: string | string[];
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  label,
  content,
  href,
}) => {
  const renderContent = () => {
    if (Array.isArray(content) && Array.isArray(href)) {
      return (
        <div className="flex flex-col space-y-1">
          {content.map((item, index) => (
            <a
              key={index}
              href={href[index]}
              className="mt-1 text-base font-bold text-green-800 underline decoration-green-800 hover:text-green-700"
            >
              {item}
            </a>
          ))}
        </div>
      );
    }

    const singleHref = href as string;
    const isLink =
      singleHref.startsWith("tel:") || singleHref.startsWith("mailto:");

    if (isLink) {
      return (
        <a
          href={singleHref}
          className="mt-1 block text-base font-bold text-green-800 underline decoration-green-800 hover:text-green-700"
        >
          {content as React.ReactNode}
        </a>
      );
    }

    return (
      <p className="mt-1 text-base font-bold text-green-800">
        {content as React.ReactNode}
      </p>
    );
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300 p-3">
          <Icon className="h-4 w-4 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          {renderContent()}
        </div>
      </div>
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      data-aos="fade-up"
      className="bg-[#F9FFF5] py-12 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* --- Left Column: Info --- */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900">
              Contact Our Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Get in touch with our team to explore how we can support your
              financial journey. We're here to answer your questions and provide
              personalized assistance.
            </p>
            <div className="mt-8 sm:mt-10 space-y-6">
              {contactInfoData.map((item) => (
                <ContactInfoCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm ring-1 ring-gray-900/5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
              We'll get in touch shortly
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              We're here to answer your questions and provide personalized
              assistance.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs sm:text-sm font-semibold leading-6 text-gray-500"
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
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1D9B5E] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
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
