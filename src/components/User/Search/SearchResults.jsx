import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatars from "../avatar/Avatar";

const SearchResults = ({ searchResults }) => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state?.user?.user._id);
  const goToAccount = (user) => {
    if (userId === user) {
      navigate("/myAccount");
    } else {
      navigate("/friendsAccount", { state: { userId: user } });
    }
  };

  return (
    <div className="bg-white ml-5">
      <div className="px-5">
        {searchResults.length !== 0 ? (
          searchResults.map((result) => {
            return (
              <div
                onClick={() => goToAccount(result._id)}
                className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-heavy-metal-200 cursor-pointer"
              >
                <div className="flex gap-3">
                  <div className=" rounded-full overflow-hidden shadow-sm shadow-gray-500">
                    <Avatars img={result?.ProfileImg} size="w-12 h-12"/>
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
            <div className="py-10 flex justify-center">
              <p className="font-bold text-heavy-metal-800">No User Found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
