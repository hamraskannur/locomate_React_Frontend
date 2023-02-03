import React, { useEffect, useState } from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import Suggestion from "../../components/User/Suggestion/Suggestion";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import UserProtectRouter from "../../components/User/Routes/UserProtectRouter";
import BottomBar from "../../components/User/BottomBar/BottomBar";
import SearchBar from "../../components/User/Search/SearchBar";
import SearchResults from "../../components/User/Search/SearchResults";
import { searchUserApi } from "../../Api/userApi/profileApi";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);

  useEffect(() => {
    try {
      const fetchSearchData = async () => {
        if (searchInput !== "") {
            console.log(searchInput);
          const  searchResponse = await searchUserApi(searchInput);
          setSearchUsers(searchResponse);
        } else {
          setSearchUsers([]);
          console.log("null search input");
        }
      };
      fetchSearchData();
    } catch (error) {
      console.log(error);
    }
  }, [searchInput]);
  return (
      <div className="bg-[#F3F3F6]">
        <NavBar />
        <div className="flex ">
          <UserSideBar />
          <div className="w-6/12 max-sm:w-full mx-auto max-md:w-full max-lg:w-full">
          <h2 className="hidden md:block text-3xl m-5 text-heavy-metal-500 mx-auto opacity-40">Search here</h2>
                <SearchBar setSearchInput={setSearchInput} />
                <SearchResults searchResults={searchUsers} />
          </div>
          <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
            <Suggestion />
          </div>
        </div>
        <div className="md:hidden block sticky bottom-0 z-50 w-full ">
          <BottomBar />
        </div>
      </div>
  );
};

export default Search;
