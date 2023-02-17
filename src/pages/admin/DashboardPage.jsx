import React,{ useEffect,useState } from "react";
import { getChartData } from "../../Api/adminApi/adminApi";
import Count from "../../components/Admin/Count/Count";
import PostDetailChart from "../../components/Admin/PostDetailChart/PostDetailChart";
import UserDetailChart from "../../components/Admin/UserDetailChart/UserDetailChart";
import Layout from "./Layout";

function DashboardPage() {

  const [userGraphCategories,setUserGraphCategories]=useState([])
  const [userGraphData,setUserGraphData]=useState([])
  const [postGraphCategories,setPostGraphCategories]=useState([])
  const [postGraphData,setPostGraphData]=useState([])
  const [userCount,setUserCount]=useState(0)
  const [postCount,setPostCount]=useState(0)
  const [shortsCount,setShortsCount]=useState(0)

  useEffect(() => {
    const fetchData =async () => {
      const data=await getChartData()
      setUserCount(data.userCount)
      setPostCount(data.postCount)
      setShortsCount(data.shortsCount)
      const userGraphDate=data?.userGraph.map(item => {
        return item._id
      })
      setUserGraphCategories(userGraphDate)
      const userGraphCount=data?.userGraph.map(item=>{
        return item.count
      })
      setUserGraphData(userGraphCount)
      const postGraphDate=data?.postGraph.map(item => {
        return item._id
      })
      setPostGraphCategories(postGraphDate)
      const postGraphCount=data?.postGraph.map(items=>{
        return items.count
      })
      setPostGraphData(postGraphCount)    
    };
    fetchData()
  }, []);
  return (
    <Layout>

      <div className="mx-auto">

      <Count userCount={userCount} postCount={postCount} shortsCount={shortsCount}/>    
      <div className="w-full max-sm:w-full max-md:w-full max-lg:w-full scroll">
       {userGraphCategories?.length>0 && <UserDetailChart userGraphCategories={userGraphCategories} userGraphData={userGraphData}/>}
        {postGraphCategories?.length>0 && <PostDetailChart  postGraphCategories={postGraphCategories} postGraphData={postGraphData}/>}
      </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
