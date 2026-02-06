export default function ServicesPage() {
  return (
    <main className="py-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">
            Modern, fast and scalable websites.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">App Development</h3>
          <p className="text-gray-600">
            High-performance mobile & web apps.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">SaaS & Automation</h3>
          <p className="text-gray-600">
            Custom SaaS solutions to scale businesses.
          </p>
        </div>
      </div>
    </main>
  );
}
