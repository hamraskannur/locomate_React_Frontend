import React from "react";
import PostDetailChart from "../../components/Admin/PostDetailChart/PostDetailChart";
import UserDetailChart from "../../components/Admin/UserDetailChart/UserDetailChart";
import Layout from "./Layout";

function DashboardPage() {
  return (
    <Layout>
      <div className="w-full max-sm:w-full max-md:w-full max-lg:w-full scroll">
        <UserDetailChart />
        <PostDetailChart />
      </div>
    </Layout>
  );
}

export default DashboardPage;
