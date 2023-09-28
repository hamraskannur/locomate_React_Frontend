import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { addPost } from "../../../Api/userApi/postRequest";
import { AddPostActions } from "../../../redux/AddPost";
import S3 from "aws-sdk/clients/s3";
import { errorToast, successToast } from "../../Toast/Toast";
import { useNavigate } from "react-router-dom";
import { uploadPost } from "../../../Api/userApi/profileApi";

export default function UploadPhoto({ AddPost, setAddPost }) {
  const [files, setFile] = useState([]);
  const [ImageLinks, setImageLinks] = useState([]);
  const [message, setMessage] = useState();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const S3_BUCKET = process.env.REACT_APP_NAME;
  const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID;
  const region = process.env.REACT_APP_REGION;
  const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;

  const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
  });

  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (files.length > 0) {
        setLoading(true);
        // const reader = new FileReader();
        // reader.readAsArrayBuffer(file);
        // reader.onload = async (e) => {
        //   const result = e.target.result;
        //   const uploadParams = {
        //     Bucket: S3_BUCKET,
        //     Key: Date.now() + file.name,
        //     Body: result,
        //   };
        //   await s3
        //     .upload(uploadParams)
        //     .promise()
        //     .then((res) => {
        //       setImageLinks((imageLinks) => [...imageLinks, res.Location]);
        //     });
        // };

        // Use Promise.all to upload all files concurrently
        const uploadPromises = files.map((file) => uploadPost(file));

        const uploadedImages = await Promise.all(uploadPromises);

        let object = {
          imageLinks: uploadedImages,
          description: description,
        };

        if (object.imageLinks.length > 0) {
          const data = await addPost(object);
          setAddPost(false);
          if (data.status) {
            setImageLinks([]);
            object.imageLinks = null;
            object.description = null;
            setLoading(false);
            await dispatch(AddPostActions.postAdd());
            successToast("Successfully uploaded post");
          } else {
            // Handle error when adding the post
            errorToast("Failed to upload post");
          }
        } else {
          // Handle error when uploading images
          errorToast("Failed to upload images");
        }
      } else {
        setMessage("Select your images");
        // Handle error when no files are selected
        errorToast("Select your images");
      }
    } catch (error) {
      navigate("*");
    }
  };

  return (
    <>
      <>
        <div className=" md:m-0 justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold mx-auto">Upload Photo</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setAddPost(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    {React.createElement(AiOutlineCloseCircle, {
                      size: "20",
                    })}
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="flex  mt-5 max-sm:w-full max-md:w-full max-lg:w-full  w-[60vh]  px-3 ">
                <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
                  <div className="m-4">
                    <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                      {message}
                    </span>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handleFile}
                          className="opacity-0"
                          multiple="multiple"
                          name="files[]"
                        />
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {files.map((file, key) => {
                        return (
                          <div key={key} className="overflow-hidden relative">
                            <i
                              onClick={() => {
                                removeImage(file.name);
                              }}
                              className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                            >
                              <div>
                                {React.createElement(AiOutlineCloseCircle, {
                                  size: "20",
                                })}
                              </div>
                            </i>
                            <img
                              className="h-20 w-20 rounded-md"
                              src={URL.createObjectURL(file)}
                              alt="post"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <label className="ml-2">Description</label>
                  <div className="border grow rounded-full">
                    <textarea
                      className="block w-full p-3 px-4 h-10  overflow-hidden  rounded-md"
                      onChange={descriptionHandler}
                      value={description}
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
                  onClick={() => setAddPost(false)}
                >
                  Close
                </button>
                {!loading && (
                  <button
                    className="bg-slate-700 text-white active:bg-slate-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitHandler}
                  >
                    Post Your Image
                  </button>
                )}

                {loading && (
                  <button
                    type="button"
                    class=" flex justify-between ml-2 font-bold py-1 rounded bg-slate-700 hover:bg-slate-600 text-white px-6 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mr-2 border border-gray-200  focus:z-10  focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    Uploading...
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
