export default function Home() {
  return (
    <main className="min-h-screen px-6">
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <span className="inline-block mb-4 text-sm font-medium text-gray-500">
            Software & Technology Company
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-primary">
            Indcode Technologies
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            We build scalable, secure and future-ready digital products —
            crafted in India, built for the world.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-md bg-brand-primary text-white text-sm font-medium hover:bg-brand-dark transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            End-to-end digital solutions to grow your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border rounded-lg hover:shadow-sm transition">
            <h3 className="text-lg font-semibold mb-2">
              Web Development
            </h3>
            <p className="text-gray-600 text-sm">
              Modern, fast and scalable websites using latest technologies.
            </p>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-sm transition">
            <h3 className="text-lg font-semibold mb-2">
              App Development
            </h3>
            <p className="text-gray-600 text-sm">
              High-performance mobile and web applications for startups.
            </p>
          </div>

          <div className="p-6 border rounded-lg hover:shadow-sm transition">
            <h3 className="text-lg font-semibold mb-2">
              SaaS & Automation
            </h3>
            <p className="text-gray-600 text-sm">
              Custom SaaS products and automation to scale operations.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Indcode
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Indcode Technologies is a modern software and technology company
              focused on building scalable, secure and high-quality digital
              products for startups and enterprises.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With strong engineering practices and a future-first mindset,
              we help businesses transform ideas into reliable technology
              solutions.
            </p>
          </div>

          <div className="border rounded-lg p-8 bg-white">
            <h3 className="text-lg font-semibold mb-4">
              Why Choose Indcode?
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>✔ Clean & scalable codebase</li>
              <li>✔ Modern tech stack</li>
              <li>✔ Startup-friendly approach</li>
              <li>✔ Long-term support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPACER */}
      <section className="h-16 md:h-24 bg-black" />


      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have an idea or project in mind? Fill out the form below and we’ll
              get back to you shortly.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border rounded-xl p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-brand-primary text-white text-sm font-medium hover:bg-brand-dark transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
