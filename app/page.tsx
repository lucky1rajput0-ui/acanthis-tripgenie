import Link from "next/link";

export default function Home() {
  const destinations = [
    { name: "Manali", emoji: "🏔️", description: "Snow-capped mountains & adventure" },
    { name: "Sikkim", emoji: "🌿", description: "Pristine nature & culture" },
    { name: "Thailand", emoji: "🏖️", description: "Beach paradise & temples" },
    { name: "Kerala", emoji: "🌴", description: "Backwaters & spice plantations" },
    { name: "Dubai", emoji: "🏙️", description: "Luxury & desert safari" },
    { name: "Northeast India", emoji: "⛰️", description: "Unexplored beauty" },
  ];

  const features = [
    { icon: "✈️", title: "Global Destinations", desc: "National & international trips curated for you" },
    { icon: "🎯", title: "Customized Plans", desc: "Tailored itineraries matching your style & budget" },
    { icon: "👨‍👩‍👧‍👦", title: "Group Friendly", desc: "From solo travelers to large family groups" },
    { icon: "💰", title: "Best Value", desc: "Competitive prices with premium service" },
    { icon: "🛡️", title: "Safe & Secure", desc: "Travel insurance & 24/7 support included" },
    { icon: "🗺️", title: "Expert Planning", desc: "20+ years combined travel expertise" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="text-center z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight drop-shadow-lg">
            Discover. Dream. Explore.
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-indigo-100 font-light">
            Your next adventure starts with Acanthis Journey. Let us craft your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/planner"
              className="px-10 py-5 bg-white text-indigo-700 font-bold text-2xl rounded-2xl hover:bg-indigo-50 transition transform hover:scale-105 shadow-2xl"
            >
              🚀 Plan My Trip
            </Link>
            <a
              href="https://wa.me/919830639007"
              target="_blank"
              className="px-10 py-5 border-2 border-white text-white font-bold text-2xl rounded-2xl hover:bg-white/20 transition"
            >
              💬 Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800">
            Why Travel With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-indigo-200 transition border border-indigo-100">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Girls-Only Trips Announcement */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">👩‍🤝‍👩</div>
          <h2 className="text-4xl font-bold mb-4">Exciting News! ✨</h2>
          <p className="text-xl font-semibold mb-2">Girls-Only Adventure Trips</p>
          <p className="text-lg mb-6 text-pink-100">
            Launching Very Soon! Safe, fun, and unforgettable adventures designed exclusively for girls. Freedom, friendship, and wanderlust await!
          </p>
          <a
            href="https://wa.me/919830639007"
            target="_blank"
            className="inline-block px-8 py-3 bg-white text-rose-600 font-bold rounded-lg hover:bg-pink-50 transition"
          >
            Get Notified When We Launch 🔔
          </a>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Popular Destinations
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Explore our most loved destinations or tell us where you want to go!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <div key={i} className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200 hover:border-indigo-400 cursor-pointer transition">
                <div className="text-6xl mb-4">{dest.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <Link href="/planner" className="text-indigo-600 font-bold group-hover:text-indigo-700">
                  Plan Trip →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Adventure?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join hundreds of happy travelers who've experienced amazing journeys with Acanthis Journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planner"
              className="px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-indigo-50 transition"
            >
              Plan Your Trip
            </Link>
            <a
              href="tel:+919830639007"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition"
            >
              Call: +91 98306 39007
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Raj Kumar", text: "Amazing trip to Manali! Everything was perfectly planned.", rating: "⭐⭐⭐⭐⭐" },
              { name: "Priya Singh", text: "Best experience ever. Highly recommended for families!", rating: "⭐⭐⭐⭐⭐" },
              { name: "Amit Patel", text: "Thailand package was incredible. Worth every penny!", rating: "⭐⭐⭐⭐⭐" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-lg mb-4 text-gray-700">"{t.text}"</p>
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-lg">{t.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Don't Miss Out!</h3>
          <p className="text-lg mb-8">Get your personalized trip plan within 24 hours</p>
          <Link
            href="/planner"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-indigo-50 transition"
          >
            Start Planning Now 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
