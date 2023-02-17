import React from "react";
import ReportUsers from "../../components/Admin/ReportUsers/ReportUsers";
import Layout from "./Layout";

function onePostReport() {
  return (
    <Layout>
      <div className="w-full ">
        <ReportUsers />
      </div>
    </Layout>
  );
}

export default onePostReport;
