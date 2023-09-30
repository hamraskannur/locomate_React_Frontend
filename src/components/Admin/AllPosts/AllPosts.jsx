import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllPost, getAllVideo } from '../../../Api/adminApi/PostRequest'
import Post from '../../Admin/Posts/Posts'
import Shorts from '../../Admin/Shorts/Shorts'
const AllPosts = ({selected}) => {
    const  navigate=useNavigate()
    const [allPosts,setAllPosts] =useState([])
    const [allVideo,setAllVideo] =useState([])

    useEffect(()=>{
        const fetchData =async () =>{
            if(selected){
                try{
                const data=await getAllPost()
                setAllPosts(data.reverse())
                }catch(err){
                  navigate('/admin/*');
                }
            }else{
                try{
                    const data=await getAllVideo()
                    setAllVideo(data.reverse())
                }catch(err){
                  navigate('/admin/*');
                }
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
