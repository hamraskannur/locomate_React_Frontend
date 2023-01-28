import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../Api/userApi/postRequest";
import { AddPostActions } from "../../../redux/AddPost";

const EditPost = ({  setEditPost, img, description, postId }) => {
  const dispatch = useDispatch();
  const [newDescription, setNewDescription] = useState(description);
  const submitHandler = async () => {
    const response = await editPost({ postId, newDescription });
    if (response.success) {
      setEditPost(false)
      await dispatch(AddPostActions.postAdd());
    }
  };

  return (
    <>
      <div className=" justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Post</h3>
            </div>
            {/*body*/}
            <div className="flex  mt-5 max-sm:w-full max-md:w-full max-lg:w-full   w-[60vh]  px-3 ">
              <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
                <div className="m-4">
                  <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                    {/* {message} */}
                  </span>
                  <div className="flex items-center justify-center w-full">
                    <img src={img ? img : ""} alt="logo" />
                  </div>
                </div>
                <label className="ml-2">Description</label>
                <div className="border grow rounded-full">
                  <textarea
                    className="block w-full p-3 px-4 h-full  overflow-hidden  rounded-md"
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    placeholder="Description"
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setEditPost(false)}
              >
                Close
              </button>
              <button
                className="bg-slate-700 text-white active:bg-slate-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={submitHandler}
              >
                Edit Your post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditPost;
