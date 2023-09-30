import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllNotifications } from "../../../Api/adminApi/adminApi";
import { viewNotification } from "../../../redux/notification";

const NotificationCard = () => {
  const [notifications, setNotifications] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNotifications = await getAllNotifications();
        if (allNotifications) {
          setNotifications(allNotifications.reverse());
          dispatch(viewNotification());
        }
      } catch (error) {
        navigate("/admin/*");
      }
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
              <div
                key={notification._id}
                onClick={() => {
                  getAccountPage();
                }}
                className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4"
              >
                <div>
                  <div className="w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
                    <img
                      src={
                        notification.userId.ProfileImg
                          ? notification.userId.ProfileImg
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                      }
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
