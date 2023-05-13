import { useContext } from 'react';
import { BlogDataContext, BlogDispatchContext } from './BlogsContextComponent';

export function useBlogData() {
  return useContext(BlogDataContext);
}

export function useBlogDispatch() {
  return useContext(BlogDispatchContext);
}
