import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="card bg-bgMain rounded-lg overflow-hidden m-4 cursor-pointer font-custom1 font-custom2 leading-8 p-5 w-[360px] h-[416px] shadow-black shadow-sm border-for-box">
      <div className='overflow-hidden'>
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover transition-transform transform hover:scale-110 duration-500 rounded-lg" />
      </div>
      <div className="p-4 mt-4">
        <h2 className="text-navFontColor font-semibold text-2xl hover:text-redForHoverNav duration-300">{blog.title}</h2>
        <p className="text-gray-600">{blog.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
