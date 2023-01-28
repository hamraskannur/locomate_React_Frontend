import React from 'react';
import ShowAllUser from '../../components/Admin/AllUser/ShowAllUser';
import SideBar from '../../components/Admin/SideBar/SideBar';

function AllUser() {
  return (
    <div className="flex">
      <SideBar />
      <ShowAllUser />
    </div>
  );
}

export default AllUser;
