import Link from "next/link";

export default function DestinationsPage() {
  const destinations = [
    {
      name: "Manali",
      emoji: "🏔️",
      description: "Snow-capped mountains, adventure sports, and serene beauty",
      highlights: ["Rohtang Pass", "Solang Valley", "Adventure Sports"],
      bestTime: "Oct-June",
      duration: "4-7 days",
    },
    {
      name: "Sikkim",
      emoji: "🌿",
      description: "Pristine nature, Kanyakumari culture, and exotic flora",
      highlights: ["Kanyakumari", "Tsomgo Lake", "Rumtek Monastery"],
      bestTime: "Apr-June, Sept-Oct",
      duration: "5-7 days",
    },
    {
      name: "Thailand",
      emoji: "🏖️",
      description: "Beach paradise, ancient temples, and vibrant nightlife",
      highlights: ["Bangkok", "Phuket", "Krabi", "Temple Tours"],
      bestTime: "Nov-Feb",
      duration: "6-10 days",
    },
    {
      name: "Kerala",
      emoji: "🌴",
      description: "Backwaters, spice plantations, and tranquil beaches",
      highlights: ["Houseboat Cruises", "Tea Plantations", "Beaches"],
      bestTime: "Sept-May",
      duration: "5-7 days",
    },
    {
      name: "Dubai",
      emoji: "🏙️",
      description: "Ultra-luxury, desert safari, and modern architecture",
      highlights: ["Burj Khalifa", "Desert Safari", "Shopping", "Beaches"],
      bestTime: "Oct-April",
      duration: "4-6 days",
    },
    {
      name: "Northeast India",
      emoji: "⛰️",
      description: "Unexplored beauty, tribal culture, and pristine landscapes",
      highlights: ["Assam", "Meghalaya", "Mizoram", "Nagaland"],
      bestTime: "Oct-April",
      duration: "7-10 days",
    },
    {
      name: "Goa",
      emoji: "🌊",
      description: "Beaches, Portuguese heritage, and vibrant culture",
      highlights: ["Fort Aguada", "Beaches", "Water Sports", "Nightlife"],
      bestTime: "Nov-May",
      duration: "4-6 days",
    },
    {
      name: "Ladakh",
      emoji: "🏔️",
      description: "High altitude mystique, Buddhist monasteries, and adventure",
      highlights: ["Pangong Lake", "Monasteries", "Trekking", "Local Culture"],
      bestTime: "June-Sept",
      duration: "6-8 days",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Our Destinations</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            From serene beaches to majestic mountains, discover 50+ amazing destinations we offer
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition">
                <div className="text-6xl mb-4">{dest.emoji}</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{dest.name}</h2>
                <p className="text-gray-700 mb-6">{dest.description}</p>
                
                <div className="mb-6 space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((h, j) => (
                        <span key={j} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p><span className="font-semibold">Best Time:</span> {dest.bestTime}</p>
                    <p><span className="font-semibold">Duration:</span> {dest.duration}</p>
                  </div>
                </div>

                <Link
                  href="/planner"
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
                >
                  Plan Trip to {dest.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Dream Destination?</h2>
          <p className="text-xl mb-8">Tell us where you want to go, and we'll create a custom itinerary just for you!</p>
          <Link
            href="/planner"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition"
          >
            Plan Your Custom Trip 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
