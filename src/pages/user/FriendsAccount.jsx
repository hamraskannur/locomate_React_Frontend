import React from "react";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import FriendsAccount from "../../components/User/ProfilePage/FriendsAccount";


const FriendsAccountPage = () => {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <FriendsAccount />
      </div>
      <div className=" max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
};

export default FriendsAccountPage;
