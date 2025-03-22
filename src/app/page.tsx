import { IBlog } from "@/src/entities/Blog/model/types";
import HeroInfo from "@/src/widgets/HeroInfo";
import NewBlogsList from "@/src/widgets/NewBlogsList";

const Home = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4",
  );
  const blogs = await res.json();

  return (
    <div>
      <HeroInfo />
      <NewBlogsList blogs={blogs as IBlog[]} />
    </div>
  );
};

export default Home;
