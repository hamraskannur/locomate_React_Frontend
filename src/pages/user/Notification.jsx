import React from "react";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import Notification from "../../components/User/Notification/Notification";
import Layout from "../../components/User/Layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <Notification />
      </div>
      <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
}

export default Home;
