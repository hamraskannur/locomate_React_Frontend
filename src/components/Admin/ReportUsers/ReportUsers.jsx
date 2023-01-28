import React,{ useState } from 'react'

const ReportUsers = ({ShowAllReport,setOpenUserReport}) => {
    const [report,setReport]=useState(ShowAllReport)
  return (
    <>
    <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 m-5">
    <button    onClick={()=>setOpenUserReport(false)}     className="mt-4 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-md m-5 shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out"
>
        back
    </button>
      <div className="p-5 h-screen min-w-full bg-[#FFFFFF]">
        <table className="w-full mt-2">
          <thead className="bg-gray-50 border-b-2 border-stone-700 ">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                User Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
              reason for report
              </th>
            
            </tr>
          </thead>
         {report && <tbody>
            {report?.userText.map((item, index) => (
                <tr key={item._id} className="b-white border-b-2 ">
              <td className="p-3 pt-7  text-sm text-gray-700">{index +1}</td>
              <td className="p-3 pt-7 text-sm text-gray-700">{item.userId.username}</td>
              <td className="p-3 pt-7 text-sm text-gray-700">{item.text}</td>
            </tr>
             ))}
          </tbody>}
        </table>
      </div>
    </div>
             </>
  )
}

export default ReportUsers
