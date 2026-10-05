import React from 'react';
import { blogs } from '../data/blogs';
import BlogCard from './ui/BlogCard';

const Blogs = ({ posts = blogs }) => {
  const list = posts || blogs;

  return (
    <div>
      <h1 className="font-bold text-2xl">Blogs</h1>
      <p className="text-zinc-400 mt-1 mb-4">
        Writing about shipping ideas fast and safely.
      </p>

      {list && list.length > 0 ? (
        <div>
          {list.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="font-bold text-4xl md:text-4xl lg:text-5xl">
          Coming sooner than you think...
        </p>
      )}
    </div>
  );
};

export { Blogs };
export default Blogs;