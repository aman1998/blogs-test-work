import React from "react";

import NewBlogs from "../widgets/NewBlogs";

import HeroInfo from "@/src/widgets/HeroInfo";
import BestUsers from "@/src/widgets/BestUsers";
import NewBlogsSkeleton from "@/src/widgets/NewBlogs/components/NewBlogsSkeleton";
import BestUsersSkeleton from "@/src/widgets/BestUsers/components/BestUsersSkeleton";

const Home = async () => {
  return (
    <div>
      <HeroInfo />
      <div className="flex flex-col gap-10">
        <React.Suspense fallback={<BestUsersSkeleton />}>
          <BestUsers />
        </React.Suspense>
        <React.Suspense fallback={<NewBlogsSkeleton />}>
          <NewBlogs />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Home;
