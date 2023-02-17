import React, { useEffect, useState } from "react";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import SearchBar from "../../components/User/Search/SearchBar";
import SearchResults from "../../components/User/Search/SearchResults";
import { searchUserApi } from "../../Api/userApi/profileApi";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/User/Layout/Layout";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const fetchSearchData = async () => {
        if (searchInput !== "") {
          console.log(searchInput);
          try {
            const searchResponse = await searchUserApi(searchInput);
            setSearchUsers(searchResponse);
          } catch (error) {
            navigate("*");
          }
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
    <Layout>
      <div className="w-6/12 max-sm:w-full mx-auto max-md:w-full max-lg:w-full">
        <h2 className="hidden md:block text-3xl m-5 text-heavy-metal-500 mx-auto opacity-40">
          Search here
        </h2>
        <SearchBar setSearchInput={setSearchInput} />
        <SearchResults searchResults={searchUsers} />
      </div>
      <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
        <Suggestions />
      </div>
    </Layout>
  );
};

export default Search;
