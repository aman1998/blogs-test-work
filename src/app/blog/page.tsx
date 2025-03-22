import BlogsList from "../../widgets/BlogsList";

import { IBlog } from "@/src/entities/Blog/model/types";

const BlogsPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1",
  );
  const blogs = await res.json();

  return (
    <div>
      <BlogsList withPagination blogs={blogs as IBlog[]} />
    </div>
  );
};

export default BlogsPage;
