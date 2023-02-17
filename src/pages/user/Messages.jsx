import React from "react";
import Message from "../../components/User/Messages/Message";
import Layout from "../../components/User/Layout/Layout";

const MessagesPage = () => {
  return (
    <Layout>
      <div className="w-full max-sm:w-full max-md:w-full max-lg:w-full">
        <Message />
      </div>
    </Layout>
  );
};

export default MessagesPage;
