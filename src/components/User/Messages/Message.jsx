import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { userChat } from "../../../Api/userApi/chatRequest";
import AllUser from "./AllUser";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../../redux/loadingBar";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [chat, setChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sentMessage, setSentMessage] = useState(null);
  const [receiveMessages, setReceiveMessages] = useState(null);
  const [searchValue,setSearchValue]= useState('');
  const [phoneSizeUser, setPhoneSizeUser] = useState(" lg:inline-block");
  const [phoneSizeChat, setPhoneSizeChat] = useState("hidden lg:inline-block");

  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    // socket.current = io("https://locomatesocket.onrender.com");
    socket.current.emit("new-user-add", user?._id);
    socket.current.on("get-user", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    if (sentMessage !== null) {
      socket.current.emit("send-message", sentMessage);
    }
  }, [sentMessage]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessages(data);
    });
  }, []);

  useEffect(() => {
    dispatch(showLoading());
    (async () => {
      const data = await userChat(user?._id);
      setChat(data);
    })()
    dispatch(hideLoading());
  }, []);

  const clickUser = (chat) => {
    setCurrentChat(chat);
    setPhoneSizeUser("hidden lg:flex");
    setPhoneSizeChat(" lg:flex");
  };

  const searchHandler=(e)=>{
    setSearchValue(e.target.value)
  }
  return (
    <>
      <div className="h-full ">
        <div className="container mx-auto  rounded-lg px-10  max-sm:px-2 p-2 h-full  ">
          <div className="flex flex-row bg-white  w-full ">
            <div
              className={`${phoneSizeUser}  flex flex-col  border-r-2 overflow-y-auto bg-white w-full lg:w-4/12`}
            >
              <div className="border-b-2 py-4 px-2 bg-slate-700 ">
                <input
                  type="text"
                  onChange={searchHandler}
                  placeholder="search chatting"
                  className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                />
              </div>
              <div className="h-[75vh]  ">
                {chat?.map((chat) => (
                  <div onClick={() => clickUser(chat)}>
                    <AllUser
                    searchUser={searchValue}
                      key={chat._id}
                      data={chat}
                      currentUserId={user?._id}
                      onlineUsers={onlineUsers}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${phoneSizeChat} lg:w-9/12 w-full`}>
              <Chat
                setPhoneSizeUser={setPhoneSizeUser}
                setPhoneSizeChat={setPhoneSizeChat}
                key={user?._id}
                chat={currentChat}
                currentUser={user?._id}
                setSentMessage={setSentMessage}
                receiveMessages={receiveMessages}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
//  {!sideBar &&  <div className="w-2/5 border-l-2 px-5">
//               <div className="flex flex-col">
//                 {/* <User /> */}
//               </div>
//             </div>}
