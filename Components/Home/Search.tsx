"use client"
import { useState } from "react";
// import { PaperPlaneIcon } from "react-icons/";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="w-[85%] mx-auto my-22 bg-gray-100 py-16 px-10 flex flex-col md:flex-row items-center justify-between rounded-lg">
      <div className="text-left mb-4 md:mb-0 md:w-1/3">
        <h2 className="text-xl font-bold text-gray-800">Subscribe Newsletter</h2>
        <p className="text-gray-500 mt-1">Get our latest news straight into your inbox</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full md:w-2/3 bg-white rounded-lg border border-gray-400 overflow-hidden"
      >
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 flex items-center justify-center"
        >
          {/* <PaperPlaneIcon className="h-5 w-5" /> */} Search
        </button>
      </form>
    </div>
  );
}
