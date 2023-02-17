import React from "react";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import MyAccount from "../../components/User/ProfilePage/MyAccount";
import Layout from "./Layout";

const MyAccountPage = () => {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <MyAccount />
      </div>
      <div className=" max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
};

export default MyAccountPage;
