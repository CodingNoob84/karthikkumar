"use client";

import type React from "react";
import { useState } from "react";

import { SuccessMessage } from "@/components/contact/success-message";
import { ContactHeader } from "@/components/contact/contact-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccessComplete = () => {
    setShowSuccess(false);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Header */}
      <ContactHeader />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form Card - Fixed Dimensions */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 h-[700px] flex flex-col">
          {/* Card Header - Always Visible */}
          <div className="p-8 pb-0 flex-shrink-0">
            <h2 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100 transition-all duration-500">
              {showSuccess ? "Message Status" : "Send Me a Message"}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 transition-all duration-500">
              {showSuccess
                ? "Your message has been received successfully!"
                : "Fill out the form below and I'll get back to you as soon as possible."}
            </p>
          </div>

          {/* Card Content - Transitions between form and success */}
          <div className="flex-1 relative overflow-hidden p-8 pt-4">
            {/* Success Message */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                showSuccess
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-full pointer-events-none"
              }`}
            >
              <SuccessMessage
                show={showSuccess}
                onComplete={handleSuccessComplete}
              />
            </div>

            {/* Contact Form */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                showSuccess
                  ? "opacity-0 -translate-x-full pointer-events-none"
                  : "opacity-100 translate-x-0 pointer-events-auto"
              }`}
            >
              <ContactForm setShowSuccess={setShowSuccess} />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <ContactInfo />
      </div>
    </div>
  );
}
