import { useContext } from 'react';
import { BlogDataContext, BlogDispatchContext } from './BlogsContextComponent';

export default function BlogsList(props) {
  const blogData = useContext(BlogDataContext);
  const blogDispatch = useContext(BlogDispatchContext);

  return (
    <div>
      <h1>Blog Posts:</h1>
      {blogData.map((blogPost) => {
        return (
          <div key={blogPost.id}>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
            <button onClick={() => blogDispatch({ type: 'delete', blogIdToDelete: blogPost.id })}>
              Delete blog post
            </button>
          </div>
        );
      })}
    </div>
  );
}
