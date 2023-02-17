import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import OneUser from "../../components/Admin/oneUser/OneUser";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";
import Layout from "./Layout";

function AllUser() {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full scroll">
        <OneUser />
      </div>
    </Layout>
  );
}

export default AllUser;
