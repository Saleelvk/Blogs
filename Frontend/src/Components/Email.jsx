import React from "react";

function Email() {
  return (
    <div>
      <section className="py-20 bg-indigo-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-indigo-100 mb-8">
              Subscribe to our newsletter to receive the latest articles, news,
              and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mx-auto max-w-xl">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Email;
