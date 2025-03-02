import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Insights, Stories & Creative Ideas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover thought-provoking articles on technology, design,
            lifestyle, and more from our community of expert writers.
          </p>

          <div className="flex justify-center gap-4">
            <NavLink
              to="/blog"
              className="bg-black text-white px-6 py-3 rounded-md border border-white"
            >
              Explore Articles
            </NavLink>
            
            <NavLink
              to="/createBlog"
              className="bg-blue-600 text-white px-6 py-3 rounded-md border border-blue-600"
            >
              Create Blog
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
