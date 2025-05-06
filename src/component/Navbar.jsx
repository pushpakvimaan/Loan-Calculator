import { useState } from "react";

export default function Navbar() {
  const [enabled, setEnabled] = useState(true);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Left: Title */}
      <div className="text-xl font-semibold">Loan Calculator</div>

      {/* Right: Nav Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Exchange Rate
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Error Page
        </a>

        {/* Toggle Button */}
        <button
          onClick={() => setEnabled(!enabled)}
          className={`px-3 py-1 rounded text-sm font-medium ${
            enabled ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {enabled ? "Enabled" : "Disabled"}
        </button>
      </div>
    </nav>
  );
}
