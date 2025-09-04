import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    desc: "Learn the basics of React and how to build your first app.",
    date: "Sept 1, 2025",
  },
  {
    id: 2,
    title: "Understanding Markdown",
    desc: "How to write clean and readable blog posts using Markdown.",
    date: "Aug 28, 2025",
  },
  {
    id: 3,
    title: "Deploying Your Blog",
    desc: "A step-by-step guide to deploying your React blog on Vercel/Netlify.",
    date: "Aug 20, 2025",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">MyBlog</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A modern blogging platform built with React & Markdown.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Start Reading
        </Link>
      </section>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto px-4 mt-8">
        <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
          <Search className="ml-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full px-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Featured Blog */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Post</h2>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden md:flex">
          <img
            src="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"
            alt="Featured"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Mastering React for Modern Web Development
            </h3>
            <p className="text-gray-600 mt-2">
              Learn advanced concepts of React and build scalable apps like a pro.
            </p>
            <Link
              to="/blogs"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.desc}</p>
            <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
            <Link
              to={`/blogs`}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mt-2 text-blue-100">
          Get the latest blogs, tips & tutorials directly in your inbox.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg w-64 text-gray-800 outline-none"
          />
          <button className="px-4 py-2 bg-white text-blue-600 rounded-r-lg font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
