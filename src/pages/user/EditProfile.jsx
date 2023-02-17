import React from "react";
import EditProfile from "../../components/User/EditProfile/EditProfile";
import Layout from "./Layout";

const EditProfilePage = () => {
  return (
    <Layout>
      <div className="justify-center items-center  max-sm:w-full max-md:w-full max-lg:w-full">
        <EditProfile />
      </div>
    </Layout>
  );
};

export default EditProfilePage;
