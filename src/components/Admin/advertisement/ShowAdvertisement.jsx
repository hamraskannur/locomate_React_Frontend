import React from "react";

const ShowAdvertisement = () => {
  return (
    <>
      <button
        type="button"
        // onClick={()=>getUserPage(item._id)}
        className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
      >
        Add user adds
      </button>
      <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 m-5">
        <div className="p-5 h-screen min-w-full bg-[#FFFFFF]">
          <table className="w-full mt-5">
            <thead className="bg-gray-50 border-b-2 border-stone-700 ">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  {" "}
                  No
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  company
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  add image
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Delte Add
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {users?.map((item, index) => ( */}
              <tr className="b-white border-b-2 ">
                <td className="p-3 pt-7  text-sm text-gray-700">index 1</td>
                <td className="p-3 pt-7 text-sm text-gray-700">item.name</td>
                <td className="p-3 pt-7 text-sm text-gray-700">item.email</td>
                <td className="p-3 pt-7 text-sm text-gray-700">
                  item.username
                </td>

                <td>
                  <button
                    type="button"
                    // onClick={()=>getUserPage(item._id)}
                    className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    view user
                  </button>
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowAdvertisement;
