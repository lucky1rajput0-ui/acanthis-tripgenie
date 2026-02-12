export default function AboutPage() {

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Acanthis Journey</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Crafting unforgettable travel experiences since 2008
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-bold">Acanthis Journey</span> was founded by <span className="font-bold">Tithi Mondal</span> with a simple vision: to make travel planning effortless and exciting for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With <span className="font-bold">5 years of dedicated service</span>, we have grown into a trusted travel companion for thousands of families, groups, and solo adventurers seeking unforgettable experiences.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that the best trips are the ones tailored to your dreams, budget, and style. That's why we combine expert knowledge with personalized service.
              </p>
              <p className="text-lg text-gray-700">
                ✨ <span className="font-bold">Exciting new venture:</span> We're launching <span className="text-indigo-600 font-bold">girls-only adventure trips</span> very soon! Stay tuned for more details.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">By The Numbers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="text-lg"><span className="font-bold text-indigo-600">2000+</span> Happy Travelers</li>
                <li className="text-lg"><span className="font-bold text-indigo-600">50+</span> Destinations Covered</li>
                <li className="text-lg"><span className="font-bold text-indigo-600">1500+</span> Customized Itineraries</li>
                <li className="text-lg"><span className="font-bold text-indigo-600">98%</span> Satisfaction Rating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Meet Our Founder</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-8xl mb-6">👩‍💼</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Tithi Mondal</h3>
            <p className="text-indigo-600 font-semibold text-lg mb-4">Founder & Visionary</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a passion for travel and a commitment to creating unforgettable experiences, Tithi Mondal founded Acanthis Journey to help people explore the world while building lasting memories. Over 5 years, she has built a dedicated community of happy travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "❤️", title: "Passion", desc: "We love what we do" },
              { icon: "🤝", title: "Trust", desc: "Your satisfaction is our priority" },
              { icon: "💡", title: "Innovation", desc: "Always finding better ways" },
              { icon: "🌱", title: "Responsibility", desc: "Sustainable travel practices" },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl mb-8">Be part of thousands of satisfied travelers</p>
          <a
            href="https://wa.me/919830639007"
            target="_blank"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition"
          >
            Start Your Journey Today 🚀
          </a>
        </div>
      </section>
    </div>
  );
}
