import React from "react";
import Post from "../../components/User/Posts/Post";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import Layout from "../../components/User/Layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <Post />
      </div>
      <div className="  max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
}

export default Home;
