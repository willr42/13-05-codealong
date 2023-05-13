import { useBlogData, useBlogDispatch } from './BlogHooks';

export default function BlogsList(props) {
  const blogData = useBlogData();
  const blogDispatch = useBlogDispatch();

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
