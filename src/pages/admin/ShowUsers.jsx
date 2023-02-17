import React from "react";
import ShowAllUser from "../../components/Admin/AllUser/ShowAllUser";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";
import Layout from "./Layout";

function showUsers() {
  return (
    <Layout>
      <ShowAllUser />
    </Layout>
  );
}

export default showUsers;
