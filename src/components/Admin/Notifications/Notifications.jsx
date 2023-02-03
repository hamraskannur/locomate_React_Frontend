import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllNotifications } from "../../../Api/adminApi/adminApi";

const NotificationCard = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const allNotifications = await getAllNotifications();
      setNotifications(allNotifications);
    };
    fetchData();
  }, []);

  const getAccountPage = async () => {
    navigate("/admin/reportedPost");
  };

  return (
    <>
      <div className="m-4 bg-white ">
        {notifications.length > 0 &&
          notifications.map((notification) => (
            <>
              <div  onClick={() => {
                    getAccountPage();
                  }} className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4">
                <div
                 
                >
                  <div className="w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
                    <img
                      src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
                      alt="avatars"
                    />
                  </div>
                </div>
                <div>
                  <div
                    onClick={() => {
                      getAccountPage();
                    }}
                    className="font-bold hover:underline cursor-pointer"
                  >
                    {notification.userId.username}
                  </div>
                  <div
                    onClick={() => {
                      getAccountPage();
                    }}
                    className="text-black hover:underline cursor-pointer"
                  >
                    {notification.text}
                  </div>
                </div>
              </div>
              <hr className="border-2" />
            </>
          ))}
      </div>
    </>
  );
};

export default NotificationCard;
