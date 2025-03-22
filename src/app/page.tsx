import HeroInfo from "@/src/widgets/HeroInfo";
import NewBlogsList from "@/src/widgets/NewBlogsList";
import BestUsers from "@/src/widgets/BestUsers";

const Home = async () => {
  return (
    <div>
      <HeroInfo />
      <BestUsers />
      <NewBlogsList />
    </div>
  );
};

export default Home;
