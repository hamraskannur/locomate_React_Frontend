import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchResults }) => {
    const navigate = useNavigate()
  const userId = useSelector((state) => state?.user?.user._id);
  const goToAccount = (user) => {
    if (userId === user) {
      navigate("/myAccount");
    } else {
      navigate("/FriendsAccount", { state: { userId: user } });
    }
  };
  const Active =
    "font-bold border-b-2 border-heavy-metal-900 border-opacity-30 bg-snow-drift-400 py-1 px-2 rounded-t-lg cursor-pointer";
  const inActive =
    "font-bold border-b-2 border-heavy-metal-900 border-opacity-30 hover:bg-snow-drift-200 py-1 px-2 hover:border-none rounded-t-lg cursor-pointer";
  return (
    <div className="bg-white mx-auto">
      
      <div className="px-5">
        {searchResults.length !== 0 ? (
          searchResults.map((result) => {
            return (
              <div
                onClick={()=>goToAccount(result._id)}
                className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-heavy-metal-200 cursor-pointer"
              >
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm shadow-gray-500">
                    <img
                      src={
                        result?.ProfileImg
                          ? result?.ProfileImg
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                      }
                      alt="avatars"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{result?.username}</h3>
                    <h4 className="text-sm leading-3">{result?.name}</h4>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div className="py-10 flex justify-center" >
              <p className="font-bold text-heavy-metal-800">No User Found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
