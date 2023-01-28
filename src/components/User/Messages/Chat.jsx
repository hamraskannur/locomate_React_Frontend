import React, { useEffect, useRef, useState } from "react";
import { AddMessage, getMessages } from "../../../Api/userApi/chatRequest";
import { getFriendsAccount } from "../../../Api/userApi/postRequest";
import Moment from "react-moment";
import { IoMdArrowBack } from "react-icons/io";
import InputEmoji from "react-input-emoji";


const Chat = ({ chat, currentUser, setSentMessage, receiveMessages ,setPhoneSizeUser ,setPhoneSizeChat}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (receiveMessages !== null && receiveMessages.chatId === chat?._id) {
      setMessages([...messages, receiveMessages]);
    }
  }, [receiveMessages]);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id != currentUser);
    const getUserData = async () => {
      const data = await getFriendsAccount(userId);
      setUserData(data[0]);
    };
    if (chat != null) {
      getUserData();
    }
  }, [chat, currentUser]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, [chat, currentUser]);

  const changeMessage = (message) => {
    setNewMessages(message);
  };
  const handlePostMessage = async (e) => {
    e.preventdefault;
    if (newMessages) {
      const messageAdd = {
        senderId: currentUser,
        text: newMessages,
        chatId: chat._id,
      };

      try {
        const data = await AddMessage(messageAdd);
        console.log(data);
        setMessages([...messages, data]);
        setNewMessages("");
      } catch (error) {
        console.log(error);
      }

      const receiverId = chat.members.find((id) => id !== currentUser);
      setSentMessage({ ...messageAdd, receiverId });
    }
  };

  useEffect(() => {
    scroll?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const clickUser=()=>{
    setPhoneSizeUser(" lg:flex")
    setPhoneSizeChat("hidden lg:flex")
  }
  return (
    <>
      {chat ? (
        <div className="flex flex-col flex-auto h-full lg:p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full ">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full ">
                <div className="flex flex-col w-full ">
                  <div className=" border-b-2 py-2 px-2 w-full bg-slate-700 h-16 flex items-center">
                <div onClick={clickUser} className="text-white  lg:hidden">{React.createElement(IoMdArrowBack, { size: "20" })}</div>
                    <img
                      src={userData?.ProfileImg}
                      className="lg:ml-0 ml-2 object-cover h-10 w-10 rounded-full "
                      alt=""
                    />
                    <div className="text-white  p-3 text-lg font-semibold">
                      {userData?.username}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-y-2 h-[60vh] w-full  overflow-y-scroll ">
                  {messages.map((message) =>
                    message.senderId === currentUser ? (
                      <div
                        ref={scroll}
                        className="col-start-6 col-end-13 p-3 rounded-lg"
                      >
                        <div className="flex items-center justify-start flex-row-reverse">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                          </div>
                          <div className="max-w-2xl relative mr-3 text-sm bg-indigo-100 py-2 max-w-10 px-4 shadow rounded-xl">
                            <div className="flex flex-wrap">
                              <p>{message.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        ref={scroll}
                        className="col-start-1 col-end-7 p-3 rounded-lg"
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{message.text}</div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full lg:px-2">
                      
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <InputEmoji
                    value={newMessages}
                    onChange={changeMessage}
                    cleanOnEnter
                    onEnter={handlePostMessage}
                    placeholder="Type "
                  />
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={handlePostMessage}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-56">
          <span>tap on chat to start conversation</span>
        </div>
      )}
    </>
  );
};

export default Chat;

// <div className="w-full flex flex-col justify-between    ">
// {chat ? (
//   <>
//     <div className="flex flex-col  ">
//       <div className="border-b-2 py-2 px-2 bg-slate-700 h-16 flex items-center">
//         <img
//           src={userData?.ProfileImg}
//           className="object-cover h-10 w-10 rounded-full"
//           alt=""
//         />
//         <div className="text-white  p-3 text-lg font-semibold">
//           {userData?.username}
//         </div>
//       </div>
//       <div  className="h-[60vh] overflow-y-scroll overflow-x-hidden">
//         <div className="px-2">
//           {messages.map((message) =>
//             message.senderId === currentUser ? (
//               <div ref={scroll} className="flex justify-end mb-4 mt-5">
//                 <div className="mr-2 py-1 px-4 flex-wrap m-10  bg-blue-400 rounded-bl-2xl rounded-tl-2xl rounded-tr-xl text-white">
//                   {message.text}
//                   <br/>
//                   <small className="text-gray-500 text-sm ">
//                     <Moment fromNow>{message?.createdAt}</Moment>
//                   </small>
//                 </div>
//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   className="object-cover h-8 w-8 rounded-full"
//                   alt=""
//                 />
//               </div>
//             ) : (
//               <div ref={scroll} className="flex justify-start mb-4">

//                 <img
//                   src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//                   className="object-cover h-8 w-8 rounded-full"
//                   alt=""
//                 />

//                 <div className="ml-2 mt-1 px-4 m-10  bg-gray-400 rounded-br-2xl rounded-tr-2xl rounded-tl-xl text-white">
//                 {message.text}
//                   <br/>
//                   <small className="text-gray-500 text-xs ">
//                     <Moment fromNow>{message?.createdAt}</Moment>
//                   </small>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//     <div className="py-2 flex">
//       <div className="flex border-none ml-0   grow rounded-full  ">
//         <InputEmoji
//           value={newMessages}
//           onChange={changeMessage}
//           cleanOnEnter
//           onEnter={handlePostMessage}
//           placeholder="Type "
//         />
//         <img
//           onClick={handlePostMessage}
//           className="h-9 mt-2 cursor-pointer"
//           src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png"
//         />
//       </div>
//     </div>
//   </>
// ) : (
// <div className="flex items-center justify-center py-56">

// <span>tap on chat to start conversation</span>
// </div>

// )}
// </div>
