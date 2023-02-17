import React from "react";
import Request from "../../components/User/request/Request";
import Layout from "../../components/User/Layout/Layout";

const FriendsPage = () => {
  return (
    <Layout>
      <div className="justify-center items-center  w-full">
        <Request />
      </div>
    </Layout>
  );
};

export default FriendsPage;
