"use client"; // Mark this file as a client component

import React, { useState } from "react";
import Button from "../button/Button";

const faqs = [
  {
    question: "How Much Do Your Services Cost?",
    answer:
      "Phasellus condimentum accumsan nunc. Pellentesque habitant mordi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id tristique.",
  },
  {
    question: "How Long Does SEO Take To Produce Results?",
    answer:
      "It typically takes 4-6 months to see initial results, with significant improvements within 6-12 months of consistent SEO efforts.",
  },
  {
    question: "Do You Provide Advertising On Social Media?",
    answer:
      "Yes, we offer comprehensive social media advertising services across all major platforms.",
  },
  {
    question: "Are You Offering Services For Creating Content?",
    answer:
      "Yes, we provide full-service content creation including articles, videos, and social media content.",
  },
  {
    question: "Are Long-Term Agreements Necessary?",
    answer:
      "We offer flexible agreement terms based on your specific needs and project requirements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container mx-auto px-20  items-center">
      <div className=" pt-24">
        <Button text={"Digital Aggency Query"} />

        <h2 className="font-bold text-3xl text-black  pt-4 pb-3">
          <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            Frequently
          </span>{" "}
          Asked Question
        </h2>
      </div>
      <div className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <span className="text-2xl">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Support Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-primary text-white p-4 rounded-lg">
                <p className="font-semibold mb-2">
                  Your Queries Not Listed Below
                </p>
                <p className="text-sm mb-4">Pram in malesuada libero magna.</p>
                <button className="bg-white text-primary px-6 py-2 rounded-full text-sm">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
