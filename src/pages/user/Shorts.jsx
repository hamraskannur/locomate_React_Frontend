import React from "react";
import Shorts from "../../components/User/Shorts/Short";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import Layout from "../../components/User/Layout/Layout";

function shorts() {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <Shorts />
      </div>
      <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
}

export default shorts;
