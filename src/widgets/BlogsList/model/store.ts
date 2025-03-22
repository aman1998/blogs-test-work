import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import { IBlog } from "@/src/entities/Blog/model/types";

export interface IBlogsStore {
  blogs: IBlog[];
  setBlogs: (blogs: IBlog[]) => void;
  isLoading: boolean;
  page: number;
  hasMore: boolean;
  total: number;
  loadMoreBlogs: () => Promise<void>;
}

export const useBlogsStoreBase = create<IBlogsStore>((set, get) => ({
  blogs: [],
  setBlogs: (blogs) => set({ blogs }),
  isLoading: false,
  page: 2, // Первые 10 загружены SSR
  hasMore: true,
  total: 100,

  loadMoreBlogs: async () => {
    const { isLoading, hasMore, page, total, blogs } = get();

    if (isLoading || !hasMore) return;

    set({ isLoading: true });

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
      );
      const newBlogs = await res.json();

      // Проверяем, если загружено все
      const totalLoaded = blogs.length + newBlogs.length;
      const hasMore = totalLoaded < total;

      set((state) => ({
        blogs: [...state.blogs, ...newBlogs],
        page: state.page + 1,
        hasMore,
      }));
    } catch (error) {
      console.error("Failed to load more blogs:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export const useBlogsStore = <T>(selector: (state: IBlogsStore) => T) =>
  useBlogsStoreBase(useShallow(selector));
