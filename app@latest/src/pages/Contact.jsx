import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center px-8">
        <h1 className="text-2xl font-bold mb-8">Contact us</h1>
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-800 text-white w-full py-2 rounded hover:bg-gray-700"
          >
            Send
          </button>
        </form>
      </main>

    </div>
  );
};

export default Contact;
