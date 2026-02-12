import Link from "next/link";

export default function ThankYouPage() {
  const whatsappNumber = "919830639007";

  const message = encodeURIComponent(
    "Hi Acanthis Journey,\nI have just submitted my trip request on your website. Please contact me to plan my trip. 😊"
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-center px-4 py-12">
      <div className="max-w-2xl">
        {/* Success Animation */}
        <div className="mb-8">
          <div className="inline-block text-7xl mb-4 animate-bounce">
            ✅
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Thank You!
        </h1>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-400 rounded-2xl p-8 mb-8">
          <p className="text-xl text-gray-700 mb-4">
            Your trip request has been submitted successfully! 🎉
          </p>
          <p className="text-3xl font-bold text-green-600">
            Acanthis Journey will get in touch with you within the next 30 minutes.
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 mb-8">
          <h2 className="font-bold text-lg text-gray-800 mb-4">What Happens Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex gap-4">
              <span className="text-2xl">⏱️</span>
              <div>
                <p className="font-semibold text-gray-800">30 Minutes</p>
                <p className="text-gray-600">Initial contact via WhatsApp</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-semibold text-gray-800">24 Hours</p>
                <p className="text-gray-600">Personalized itinerary created</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">✈️</span>
              <div>
                <p className="font-semibold text-gray-800">Booking</p>
                <p className="text-gray-600">Complete support through entire journey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={whatsappLink}
            target="_blank"
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg"
          >
            💬 Open WhatsApp
          </a>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl text-lg font-bold hover:bg-indigo-50 transition"
          >
            Back to Home
          </Link>
        </div>

        {/* Support Info */}
        <div className="text-gray-600">
          <p className="mb-4">
            If you don't receive a message within 30 minutes, feel free to:
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm font-medium">
            <a
              href="https://wa.me/919830639007"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-700"
            >
              📱 WhatsApp: +91 98306 39007
            </a>
            <a
              href="tel:+919830639007"
              className="text-indigo-600 hover:text-indigo-700"
            >
              ☎️ Call: +91 98306 39007
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <p className="mt-12 text-sm text-gray-500">
          Get ready for the adventure of your lifetime! ✨
        </p>
      </div>
    </div>
  );
}
