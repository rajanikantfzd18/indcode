export default function ContactPage() {
  return (
    <main className="py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Your name"
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Email address"
        />
        <textarea
          className="w-full border px-4 py-2 rounded"
          rows={4}
          placeholder="Message"
        />
        <button className="px-6 py-2 bg-black text-white rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}
