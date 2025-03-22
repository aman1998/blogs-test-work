import { IBlogsStore } from "@/src/widgets/BlogsList/model/store";

export const blogsSelector = (state: IBlogsStore) => state.blogs;
export const setBlogsSelector = (state: IBlogsStore) => state.setBlogs;
export const blogsPageSelector = (state: IBlogsStore) => state.page;
export const blogsIsLoadingSelector = (state: IBlogsStore) => state.isLoading;
export const blogsHasMoreSelector = (state: IBlogsStore) => state.hasMore;
export const loadMoreBlogsSelector = (state: IBlogsStore) =>
  state.loadMoreBlogs;
