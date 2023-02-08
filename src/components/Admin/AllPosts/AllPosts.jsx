import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPost, getAllVideo } from '../../../Api/adminApi/PostRequest'
import Post from '../../Admin/Posts/Posts'
import Shorts from '../../Admin/Shorts/Shorts'
const AllPosts = ({selected}) => {
    const [allPosts,setAllPosts] =useState([])
    const [allVideo,setAllVideo] =useState([])

    useEffect(()=>{
        const fetchData =async () =>{
            if(selected){
                console.log("kookok");
                const data=await getAllPost()
                setAllPosts(data)
            }else{
                console.log("kookok");
                const data=await getAllVideo()
                setAllVideo(data)
            }
            
        }
        fetchData()
        },[selected])
        return (
    <>
    <div className='items-center justify-center '>

     {selected? allPosts.length>0 && allPosts.map((post)=>( <Post post={post}/>)):
     allVideo.length>0 && allVideo.map((post)=>( <Shorts post={post}/> ))}
     </div>
    </>
  )
}

export default AllPosts
