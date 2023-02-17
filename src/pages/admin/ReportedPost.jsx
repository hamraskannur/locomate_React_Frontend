import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import Report from "../../components/Admin/Report/Report";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";
import Layout from "./Layout";

function reportedPost() {
  return (
    <Layout>
      <div className="w-full">
        <Report />
      </div>
    </Layout>
  );
}

export default reportedPost;
