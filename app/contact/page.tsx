"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919830639007?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-indigo-100">
            Have questions? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Phone</h3>
                  <a href="tel:+919830639007" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    +91 98306 39007
                  </a>
                  <p className="text-gray-600 mt-1">Available Mon-Sun 10AM-10PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/919830639007" target="_blank" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    Chat with us on WhatsApp
                  </a>
                  <p className="text-gray-600 mt-1">Instant replies to your queries</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Email</h3>
                  <a href="mailto:acanthisjourney@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                    acanthisjourney@gmail.com
                  </a>
                  <p className="text-gray-600 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-700">
                    Based in India<br />
                    Serving travelers globally
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
              <h3 className="font-bold text-lg text-gray-800 mb-4">💡 Quick Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✈️ Use WhatsApp for fastest response</li>
                <li>📅 Best time to plan: 4-6 weeks before travel</li>
                <li>👥 Group discounts available for 6+ people</li>
                <li>💳 Flexible payment options available</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
                  ✅ Message sent! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-800 bg-white text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400" style={{ color: 'black', backgroundColor: 'white' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-800 bg-white text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400" style={{ color: 'black', backgroundColor: 'white' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98306 39007"
                    className="w-full px-4 py-3 border border-gray-800 bg-white text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400" style={{ color: 'black', backgroundColor: 'white' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your trip plans..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-800 bg-white text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400" style={{ color: 'black', backgroundColor: 'white' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                >
                  Send Message 🚀
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll redirect you to WhatsApp to finalize communication
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is the booking process?",
                a: "Fill our quick planner form or contact us directly. Our team will create a personalized itinerary within 24 hours.",
              },
              {
                q: "How far in advance should I book?",
                a: "4-6 weeks is ideal, but we can accommodate last-minute bookings depending on availability.",
              },
              {
                q: "What payment options do you offer?",
                a: "We accept bank transfers, card payments, and partial payments with flexible installment options.",
              },
              {
                q: "Is travel insurance included?",
                a: "Travel insurance is available and highly recommended. We can arrange it for you.",
              },
              {
                q: "Can I customize the itinerary?",
                a: "Absolutely! All our packages are customizable based on your preferences and budget.",
              },
              {
                q: "What if I need to cancel?",
                a: "We have flexible cancellation policies. Details will be provided once you're in touch with us.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Plan Your Adventure?</h3>
          <p className="text-lg mb-8">Let's create unforgettable memories together!</p>
          <a
            href="https://wa.me/919830639007"
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition"
          >
            Chat with Us Now 💬
          </a>
        </div>
      </section>
    </div>
  );
}
