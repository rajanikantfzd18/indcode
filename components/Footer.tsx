export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Indcode Technologies. All rights reserved.
      </div>
    </footer>
  );
}