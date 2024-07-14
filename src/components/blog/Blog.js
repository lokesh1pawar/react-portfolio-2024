import React from 'react';
import BlogCard from './BlogCard';
import blogsMetadata from '../../blogs/blogs.json';

const Blog = () => {
  const pinnedBlogs = blogsMetadata.filter(blog => blog.pin);

  return (
    <div id='blog' className="container mx-auto p-4">
      <p className='uppercase text-redFeature let-space-features items-center justify-center flex'>VISIT MY BLOG AND KEEP YOUR FEEDBACK
      </p>
      <h2 className='items-center justify-center text-navFontColor flex text-4xl font-bold mt-4 mb-6'>My Blog
      </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
              {pinnedBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
             {/* divider separator line  */}
             <div className='divider-saprate opacity-90'></div>
          </div>
  );
};

export default Blog;
