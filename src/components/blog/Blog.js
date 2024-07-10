import React from 'react';
import BlogCard from './BlogCard';
import blogsMetadata from '../../blogs/blogs.json';

const Blog = () => {
  const pinnedBlogs = blogsMetadata.filter(blog => blog.pin);

  return (
    <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 img-box-white">
              {pinnedBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
  );
};

export default Blog;
