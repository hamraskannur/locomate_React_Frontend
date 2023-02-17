import React from "react";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import Settings from "../../components/User/Settings/Settings";
import Layout from "./Layout";

function SettingsPage() {
  return (
    <Layout>
      <div className="w-6/12   max-sm:w-full max-md:w-full max-lg:w-full ">
        <Settings />
      </div>
      <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
}

export default SettingsPage;
