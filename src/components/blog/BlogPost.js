import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import blogsMetadata from '../../blogs/blogs.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

const BlogPost = ({ match }) => {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const blog = blogsMetadata.find(blog => blog.id === id);
  useEffect(() => {
    
    if (blog) {
      const fetchBlogContent = async () => {
        try {
          const response = await fetch(require(`../../blogs/${blog.fileName}`));
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error('Error fetching the blog content:', error);
        }
      };

      fetchBlogContent();
    }
  }, [blog]);

  if (!blog) {
    return <div>Oops! Blog not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="prose lg:prose-xl mx-auto p-28 bg-bgMain text-navFontColor font-custom1 font-custom2 mt-2">
        {blog.image && (
          <div className="w-full overflow-hidden mb-8">
            <img
              className="w-full h-auto object-cover rounded-md"
              src={blog.image}
              alt={blog.title}
            />
          </div>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white justify-center flex lg:mt-9 lg:mb-9">{blog.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default BlogPost;
