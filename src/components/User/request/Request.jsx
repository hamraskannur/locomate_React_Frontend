import React, { useEffect, useState } from "react";
import {
  getAllRequest,
  acceptRequest,
  deleteRequests,
} from "../../../Api/userApi/followRequest";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../../redux/loadingBar";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../../redux/userAuth";

const Request = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  const [request, setRequest] = useState([]);
  useEffect(() => {
    dispatch(showLoading());
    (async () => {
      const request = await getAllRequest();
      setRequest(request);
    })();
    dispatch(hideLoading());
  }, []);

  const acceptReq = async (acceptId) => {
    const response = await acceptRequest({ acceptId });
    if (response.success) {
      setRequest((prevRequest) =>
        prevRequest.filter((req) => req.Requests[0]._id !== acceptId)
      );
      const updatedUser = {
        ...user,
        Requests: user?.Requests.filter((request) => request !== acceptId),
      };
      dispatch(
        userActions.userAddDetails({
          user: updatedUser,
        })
      );
    }
  };

  const deleteReq = async (deleteId) => {
    const response = await deleteRequests(deleteId);
    if (response.success) {
      setRequest((prevRequest) =>
        prevRequest.filter((req) => req.Requests[0]._id !== deleteId)
      );
      const updatedUser = {
        ...user,
        Requests: user?.Requests.filter((request) => request !== deleteId),
      };
      dispatch(
        userActions.userAddDetails({
          user: updatedUser,
        })
      );
    }
  };

  return (
    <>
      {request.length > 0 && (
        <div className="p-5 py-1 top-24 ">
          <div className=" bg-white  shadow:lg shadow-gray-300 rounded-md p-4 mb-5   mt-6 ">
            <h2 className="text-gray-400 mb-5">You have a requests</h2>
            <div className="flex gap-2 flex-wrap ">
              {request.map((item) => (
                <Card
                  key={item.Requests[0]._id}
                  data={item.Requests[0]}
                  functionName={acceptReq}
                  button={"Accept"}
                  request={true}
                  deleteReq={deleteReq}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {request.length === 0 && (
        <div className=" bg-white  shadow:lg shadow-gray-300 rounded-md m-3 mt-6 flex items-center justify-center py-7">
          <div className="flex items-center justify-center">
            <img
              className="h-24"
              src="data:image/jpeg;base64,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"
              alt="logo"
            />
          </div>
          <div>
            <h1 className="mt-3">Emty request </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Request;
