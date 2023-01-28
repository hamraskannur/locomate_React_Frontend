import React, { useEffect, useRef, useState } from "react";
import { saveUserData, uploadImage,getUserData } from "../../../Api/userApi/profileApi";
import { TiTick } from "react-icons/ti";

import Head from "next/head";

const EditProfile = () => {
  const proImageRef = useRef();
  const coverImageRef = useRef();
  const [proImg, setProImg] = useState();
  const [coverImg, setCoverImg] = useState();
  const [userData, setUserData] = useState([]);
  const [imgErr, setImgErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [noUpdates, setNoUpdates] = useState(false);

  let user;
  useEffect(() => {
    async function getUser() {
      user = await getUserData();
      setUserData(user[0]);
    }
    getUser();
  }, []);
  const handleEdit = async (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = async (e) => {
    if (userData.username.trim().length > 0) {
      if(userData.name.trim().length > 0){

        if (coverImg) {
          const coverImageLink = await uploadImage(coverImg);
          userData.coverImg = coverImageLink;
          setCoverImg(null);
        }
        if (proImg) {
          const proImageLink= await uploadImage(proImg);
          userData.ProfileImg = proImageLink;
          setProImg(null);
        }
        const response = await saveUserData(userData);
        if (response?.success === true) {
          setSuccess(true);
        } else if (response?.success === "noUpdates") {
          setSuccess(false)
          setNoUpdates(true);
        } else {
          setImgErr(response.message);
        }
      }else{
        setImgErr("please fill name");

      }
    } else {
      setImgErr("please fill userName");
    }
  };

  const coverImgChangeHandler = (e) => {
    let file = e.target.files;
    const fileType = file[0]["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)){
      setCoverImg(e.target.files);
      setImgErr("");
    } else {
      setImgErr(
        "cover image Invalid file type. Only jpeg, png, and gif images are allowed."
      );
    }
  };

  const proImgChangeHandler = (e) => {
    let file = e.target.files;
    const fileType = file[0]["type"];
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.includes(fileType)) {
      setProImg(e.target.files);
      setImgErr("");
    } else {
      setImgErr(
        "cover image Invalid file type. Only jpeg, png, and gif images are allowed."
      );
    }
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>
      {/* <section className=" py-1 bg-blueGray-50"> */}
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 ">
        <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                My account
              </h6>

              {imgErr && <small className="text-red-600">{imgErr}</small>}
              <button
                onClick={submitHandler}
                className="bg-slate-500  h-10 text-white active:bg-slate-500  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Save
              </button>
            </div>
            {success && (
              <div
                class="flex items-center w-full m-4 bg-green-200 text-white text-sm font-bold px-4 py-3"
                role="alert"
              >
                <div>{React.createElement(TiTick, { size: "20" })}</div>
                <p>successfully updated you data</p>
              </div>
            )}
             {noUpdates && (
              <div
                class="flex items-center w-full m-4 bg-green-200 text-white text-sm font-bold px-4 py-3"
                role="alert"
              >
                <p>nothing update you data</p>
              </div>
            )}
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h1 className="  text-blueGray-400 text-sm mt-5 mb-2 font-bold uppercase">
              click and Edit your image
              </h1>

              <div className="">
                <div className="relative">

                <div
                  onClick={() => coverImageRef.current.click()}
                  className=" h-40 w-full overflow-hidden flex rounded-md justify-center items-center"
                >
                  <img
                    className="cursor-pointer"
                    src={
                      coverImg
                        ? URL?.createObjectURL(coverImg[0])
                        : userData?.coverImg
                        ? userData?.coverImg
                        :"https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg  "
                    }
                    alt="cover"
                  />
                  <input
                    type="file"
                    name="cover_img"
                    onChange={coverImgChangeHandler}
                    ref={coverImageRef}
                    hidden
                  />
                </div>
                <div className="absolute top-14 left-4 ">
                  <div
                    onClick={() => proImageRef.current.click()}
                    className="w-36 h-36 rounded-full object-cover overflow-hidden shadow-sm  shadow-gray-500"
                  >
                    <img
                    className="bg-white"
                      src={
                        proImg
                          ? URL.createObjectURL(proImg[0])
                          : userData?.ProfileImg
                          ? userData?.ProfileImg
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                      }
                      alt="avatars"
                    />

                    <input
                      type="file"
                      name="Profile_img"
                      onChange={proImgChangeHandler}
                      ref={proImageRef}
                      hidden
                    />
                  </div>
                  </div>

                </div>
              </div>
              <h6 className=" text-blueGray-400 text-sm mt-12 mb-6 font-bold uppercase ">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className=" w-full  mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      value={userData?.name}
                      name="name"
                      onChange={handleEdit}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Lucky"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      date of birth
                    </label>
                    <input
                      value={userData?.dob}
                      onChange={handleEdit}
                      name="dob"
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      PhoneNo
                    </label>
                    <input
                      value={userData?.phoneNo}
                      onChange={handleEdit}
                      name="phoneNo"
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Username
                    </label>
                    <input
                      value={userData?.username}
                      onChange={handleEdit}
                      name="username"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="lucky.jesse"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      value={userData?.Address}
                      onChange={handleEdit}
                      type="text"
                      name="Address"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Add you address"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      City
                    </label>
                    <input
                      value={userData?.city}
                      onChange={handleEdit}
                      type="email"
                      name="city"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="New York"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Country
                    </label>
                    <input
                      value={userData?.country}
                      onChange={handleEdit}
                      type="text"
                      name="country"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="United States"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Postal Code
                    </label>
                    <input
                      value={userData?.PostalCode}
                      onChange={handleEdit}
                      type="text"
                      name="PostalCode"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="Postal Code"
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className=" w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      About me
                    </label>
                    <textarea
                      value={userData?.description}
                      onChange={handleEdit}
                      name="description"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue="This is a description."
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </section > */}
    </>
  );
};

export default EditProfile;
