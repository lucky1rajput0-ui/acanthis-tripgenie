"use client";

import { useState } from "react";

export default function PlannerPage() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [people, setPeople] = useState("");
  const [style, setStyle] = useState("Relaxed");

  const handleSubmit = () => {
    if (!from || !destination || !days || !people) {
      alert("Please fill all fields");
      return;
    }

    const message = `✨ New Trip Request from Acanthis TripGenie

From: ${from}
To: ${destination}
Days: ${days}
People: ${people}
Style: ${style}

Please contact the customer.`;

    const phoneNumber = "9830639007";
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Plan Your Perfect Trip ✈️
          </h1>
          <p className="text-lg text-gray-600">
            Tell us your preferences and we'll create a personalized itinerary for you
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="space-y-6">
              {/* Starting City */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  📍 Where are you traveling from?
                </label>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="e.g., Kolkata, Delhi, Mumbai"
                  className="w-full rounded-xl border-2 border-gray-300 px-4 py-4 text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  🏖️ Where do you want to go?
                </label>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Manali, Sikkim, Thailand, Bali"
                  className="w-full rounded-xl border-2 border-gray-300 px-4 py-4 text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              {/* Duration & People - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    ⏰ Duration (Days)
                  </label>
                  <input
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    placeholder="e.g., 5"
                    type="number"
                    className="w-full rounded-xl border-2 border-gray-300 px-4 py-4 text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    👥 Number of People
                  </label>
                  <input
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    placeholder="e.g., 2"
                    type="number"
                    className="w-full rounded-xl border-2 border-gray-300 px-4 py-4 text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  🎯 What's your travel style?
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-300 px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                >
                  <option>🌴 Relaxed - Beaches & leisure</option>
                  <option>🏔️ Adventure - Trekking & sports</option>
                  <option>👑 Luxury - Premium experiences</option>
                  <option>💰 Budget - Value for money</option>
                  <option>👨‍👩‍👧‍👦 Family - Kid-friendly activities</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                🚀 Generate My Trip Plan
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You'll be taken to WhatsApp to connect with our travel experts
              </p>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-10 p-6 bg-indigo-50 border border-indigo-200 rounded-2xl">
            <h3 className="font-bold text-gray-800 mb-3">💡 What happens next?</h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>✅ You submit your preferences</li>
              <li>✅ We connect via WhatsApp within 30 minutes</li>
              <li>✅ Personalized itinerary created within 24 hours</li>
              <li>✅ Book your trip with complete support</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
