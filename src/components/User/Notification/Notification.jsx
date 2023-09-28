import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllNotifications } from "../../../Api/userApi/profileApi";
import { userActions } from "../../../redux/userAuth";

const NotificationCard = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const notification = await getAllNotifications();
      setNotification(notification.reverse());
      const updatedUser = { ...user, read:false };
      dispatch(
        userActions.userAddDetails({
          user: updatedUser,
        })
      );
    };
    fetchData();
  }, []);

  const getAccountPage = async (user) => {
    if (user._id === user) {
      navigate("/myAccount");
    } else {
      navigate("/friendsAccount", { state: { userId: user._id } });
    }
  };
  return (
    <>
      {notification.length > 0 &&
        notification.map((item) => (
          <div className="m-4 bg-white ">
            <div
              onClick={() => getAccountPage(item.userId._id)}
              className="flex items-center gap-3 bottom-b border-b-heavy-metal-600 p-4"
            >
              <div className="w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
                <img
                  src={
                    item.userId.ProfileImg
                      ? item.userId.ProfileImg
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                  }
                  alt="avatars"
                />
              </div>
              <div>
                <div className="font-bold hover:underline cursor-pointer">
                  {item?.userId?.username}
                </div>
                <div className="text-black hover:underline cursor-pointer">
                  {item?.text}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default NotificationCard;
