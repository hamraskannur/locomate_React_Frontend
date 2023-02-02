import React from 'react'

import { Reels } from '@sayings/react-reels'
import '@sayings/react-reels/dist/index.css'
import { likeShortReq } from '../../../Api/userApi/videoRequest';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Shorts = ({shorts}) => {
    const user = useSelector((state) => state?.user?.user);
    const userId = user?._id;
    const [likeLength, setLikeLength] = useState(shorts?.likes?.length);
    const [like, setLike] = useState(shorts?.likes?.includes(userId));

    const likeShorts = async (PostId) => {
        const data = await likeShortReq(PostId);
        if (data.success) {
          if (like) {
            setLikeLength(likeLength - 1);
            setLike(false);
          } else {
            setLike(true);
            setLikeLength(likeLength + 1);
          }
        } else {
        }
      };
    let reels=[{
        id:shorts?._id,
        reelInfo:{
            url: shorts.img,
            description:shorts?.description,
            postedBy: {
                avatar: shorts?.userId?.ProfileImg,
                name:shorts?.userId?.username
            },
            likes: {
                count: likeLength
            }
        }
    }]

  return (
    <div className=' '>

    <Reels
      reels={reels}
      //   reelMetaInfo={reelMetaInfo}
      onMenuItemClicked={(event) => {
          console.log(event.value) 
          // other actions
        }}
        onLikeClicked={(reel) => {
            likeShorts()
        }}
        onDislikeClicked={(reel) => console.log(reel)}
        onCommentClicked={(reel) => console.log(reel)}
        onShareClicked={(reel) => console.log(reel)}
        onAvatarClicked={(reel) => console.log(reel)}
        />
        </div>
  )
}

export default Shorts;
