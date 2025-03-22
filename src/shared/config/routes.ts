export type ID = string | number;

export enum ELink {
  home = "/",
  blog = "/blog",
  user = "/user",
}

export type TLinks = Record<keyof typeof ELink, ELink>;
export type TRoutes = TLinks & TSingleELink;

export type TSingleELink = {
  blogId: (id: ID) => string;
  userId: (id: ID) => string;
};

export const ROUTES: TRoutes = {
  home: ELink.home,

  user: ELink.user,
  userId: (id) => `/user/${id}`,

  blog: ELink.blog,
  blogId: (id) => `/blog/${id}`,
};
