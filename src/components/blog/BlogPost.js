import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import blogsMetadata from '../../blogs/blogs.json';
import { useParams } from 'react-router-dom';

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
    return <div>Blog not found</div>;
  }

  return (
    <div className="prose lg:prose-xl max-w-none mx-auto p-4">
      <h1>{blog.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
