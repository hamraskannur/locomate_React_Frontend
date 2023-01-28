import React, { useState } from 'react'
import { reportPost } from '../../../Api/userApi/postRequest';

const ReportPost = ({setReport ,postId}) => {
    const [newDescription, setNewDescription] = useState("");

    const submitHandler =async () => {
      const response=await reportPost({newDescription,postId})
      if(response.success){
        setReport(false)
      }
    }

  return (
       <>
      <div className=" justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Report Post</h3>
            </div>
            {/*body*/}  
            <div className="flex  mt-5 max-sm:w-full max-md:w-full max-lg:w-full   w-[60vh]  px-3 ">
              <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
                
                <label className="ml-2">why Report your post ?</label>
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
                onClick={() => setReport(false)}
              >
                Close
              </button>
              <button
                className="bg-slate-700 text-white active:bg-slate-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={submitHandler}
              >
                Report 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ReportPost
