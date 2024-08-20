import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import blogsMetadata from '../../blogs/blogs.json';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw'


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
          console.log(content)
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
      <Navbar postPage={true} />

      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> */}
      {/* <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>, */}
      <article className='m-[8rem] mx-auto prose prose-white
       lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white
        prose-h4:text-white prose-h5:text-white prose-h6:text-white prose-a:text-white
         hover:prose-a:text-redForHoverNav hover:prose-a:transition-colors hover:prose-a:duration-300 hover:prose-a:ease-in-out' >
        <ReactMarkdown
          remarkPlugins={[[remarkGfm,]]}
          rehypePlugins={[rehypeRaw]}
          children={content}></ReactMarkdown>
      </article>


    </>
  );
};

export default BlogPost;
