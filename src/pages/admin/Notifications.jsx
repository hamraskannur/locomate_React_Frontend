import React from "react";
import Notifications from "../../components/Admin/Notifications/Notifications";
import Layout from "../../components/Admin/Layout/Layout";

function Notification() {
  return (
    <Layout>
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full scroll">
        <Notifications />
      </div>
    </Layout>
  );
}

export default Notification;
