import React from "react";

const Internalserver = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          500
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Sorry, we encountered an internal server error.
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span
              onClick={() => navigate("/")}
              className="relative block px-8 py-3 bg-[#1A2238] border border-current"
            >
              Go To Home
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default Internalserver;
