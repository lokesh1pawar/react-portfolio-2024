import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="card bg-white shadow-md rounded-lg overflow-hidden m-4 cursor-pointer">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{blog.title}</h2>
        <p className="text-gray-600">{blog.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
