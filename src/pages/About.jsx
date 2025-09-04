import React from "react";

const About = () => {
  return (
    <div className="px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12 pt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About MyBlog</h1>
          <p className="text-gray-600 text-lg">
            A modern blogging platform built with React, designed for simplicity, speed, and
            creativity.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-medium text-blue-600">MyBlog</span>, we believe in empowering
            individuals to share knowledge and stories with the world. Our platform is designed to
            provide a seamless writing and reading experience with Markdown support and responsive
            design.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Meet the Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img
                src="/images/gagann.png"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">Gagan Adiwal</h3>
              <p className="text-gray-500">Founder & Developer</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWySPc8sa00XDmOXC2G5PCtUQCcHkhqHFPQnai6Dm6NddHGncaMEfrNcUxQBt9MZ52TdE&usqp=CAU"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">Alex Smith</h3>
              <p className="text-gray-500">Designer</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img
                src="https://c.superprof.com/i/a/26814385/12011138/600/20230613100142/hey-priya-sharma-teach-the-student-class-and.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800">Priya Sharma</h3>
              <p className="text-gray-500">Content Writer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
