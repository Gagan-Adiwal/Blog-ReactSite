import React, { useState } from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React for Modern Web Development",
      author: "Gagan Deep",
      date: "September 3, 2025",
      img: "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
      content: `
React has become one of the most popular JavaScript libraries for building user interfaces. Its component-based architecture makes it powerful and flexible for developers.

## Why Choose React?
- Reusable Components
- Virtual DOM
- Huge Ecosystem
- Cross-Platform Development

## Example Counter
\`\`\`javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
\`\`\`
      `,
    },
    {
      id: 2,
      title: "Understanding Markdown",
      author: "Alex Smith",
      date: "August 28, 2025",
      img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80",
      content: `
Markdown is a lightweight markup language for writing formatted text.

## Why Markdown?
- Easy to learn
- Clean formatting
- Widely supported

## Example
\`\`\`markdown
# Heading
**Bold Text**
- List Item
\`\`\`
      `,
    },
    {
      id: 3,
      title: "Deploying Your Blog",
      author: "Priya Sharma",
      date: "August 20, 2025",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      content: `
Deploying React apps is simple with platforms like **Vercel** and **Netlify**.

## Steps
1. Push your project to GitHub
2. Connect repo on Vercel/Netlify
3. Deploy automatically

Done 🎉
      `,
    },
    {
      id: 4,
      title: "TailwindCSS for Faster UI Development",
      author: "Rohit Kumar",
      date: "August 15, 2025",
      img: "/images/tailwind.png",
      content: `
TailwindCSS is a utility-first CSS framework that helps build modern UIs quickly.

## Benefits
- Predefined utility classes
- Responsive design made easy
- Customizable theme

## Example
\`\`\`html
<div class="p-6 bg-blue-500 text-white rounded-lg">
  Hello Tailwind!
</div>
\`\`\`
      `,
    },
    {
      id: 5,
      title: "JavaScript ES6 Features You Must Know",
      author: "Sneha Patel",
      date: "August 10, 2025",
      img: "/images/jses6.jpeg",
      content: `
ES6 introduced powerful features for modern JavaScript.

## Features
- let & const
- Template literals
- Arrow functions
- Destructuring

## Example
\`\`\`javascript
const user = { name: "Gagan", age: 23 };
const { name, age } = user;
console.log(name, age);
\`\`\`
      `,
    },
    {
      id: 6,
      title: "State Management with Redux",
      author: "John Doe",
      date: "August 5, 2025",
      img: "https://redux.js.org/img/redux-logo-landscape.png",
      content: `
Redux is a predictable state container for JavaScript apps.

## Why Redux?
- Centralized store
- Predictable state updates
- Great dev tools

## Example
\`\`\`javascript
const INCREMENT = "INCREMENT";
const increment = () => ({ type: INCREMENT });
\`\`\`
      `,
    },
    {
      id: 7,
      title: "Optimizing Performance in React",
      author: "Aarav Mehta",
      date: "August 1, 2025",
      img: "/images/reactoptmize.png",
      content: `
Performance optimization is essential in large React apps.

## Techniques
- Memoization with React.memo
- Code splitting with React.lazy
- Using useCallback and useMemo
- Avoid unnecessary re-renders
      `,
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="px-4 bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest Blogs
        </h2>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {blog.content.slice(0, 80)}...
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  By {blog.author} • {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-6 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedBlog(null)}
                className="mb-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
              >
                Close ✖
              </button>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedBlog.title}
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                By {selectedBlog.author} • {selectedBlog.date}
              </p>
              <img
                src={selectedBlog.img}
                alt={selectedBlog.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <article className="prose prose-blue max-w-none">
                {selectedBlog.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </article>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
