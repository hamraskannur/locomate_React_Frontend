import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { addPost } from '../../../Api/userApi/postRequest';
import { AddPostActions } from '../../../redux/AddPost'
import S3 from "aws-sdk/clients/s3";
import { errorToast, successToast } from '../../Toast/Toast';
import { hideLoading, showLoading } from "../../../redux/loadingBar";

export default function UploadPhoto({ AddPost, setAddPost }) {
  const [files, setFile] = useState([]);
  const [ImageLinks, setImageLinks] = useState([]);
  const [message, setMessage] = useState();
  const [description, setDescription] = useState("");
  const dispatch= useDispatch()

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
    
    if (files.length > 0) {
      dispatch(showLoading());
      files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async (e) => {
          const result = e.target.result;
          const uploadParams = {
            Bucket: S3_BUCKET,
            Key: Date.now() + file.name,
            Body: result,
          };
          await s3
            .upload(uploadParams)
            .promise()
            .then((res) => {
              setImageLinks((imageLinks) => [...imageLinks, res.Location]);
            });
        };
      });

      let object = {
        imageLinks: ImageLinks,
        description: description,
      };
      if (object.imageLinks.length > 0) {
      const  data= await addPost(object);
      if(data.status){
        setImageLinks([])
        object.imageLinks=null
        object.description=null
        dispatch(hideLoading());
       await  dispatch(AddPostActions.postAdd())
       successToast('successfully uploaded post ')
        setAddPost(false)
      }else{
        dispatch(hideLoading());
        errorToast("upload video failed")
        setMessage("err");
      }
      }else{
        dispatch(hideLoading());

      }
    } else {
      setMessage("select your images");
    }
  };

  return (
    <>
      
        <>
          <div className=" justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                <div className="flex  mt-5 max-sm:w-full max-md:w-full max-lg:w-full   w-[60vh]  px-3 ">
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
                  <button
                    className="bg-slate-700 text-white active:bg-slate-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitHandler}
                  >
                    Post Your Image
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    </>
  );
}
