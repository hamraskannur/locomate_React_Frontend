import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RiDashboardLine, RiAdvertisementFill } from 'react-icons/ri';
import { ImUsers } from 'react-icons/im';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link'
import { useRouter } from 'next/router';

function SideBar() {
  const router = useRouter();

  const menus = [
    { name: 'Dashboard', link: '/', icon: RiDashboardLine },
    { name: 'Users', link: '/admin/showUsers', icon: ImUsers },
    { name: 'Advertisement', link: '/admin/advertisement', icon: RiAdvertisementFill },
  ];
  const logOut = (e) => {
    localStorage.clear();
    router.push("/user/login");
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="max-sm:absolute max-md:absolute max-lg:absolute  sticky top-0   ">
      <div
        className={`bg-[#F9F9F9] min-h-screen ${
          open ? 'w-72' : 'w-16'
        } duration-500   text-black px-4  `}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={menu?.name}
              className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
                rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
            <button
            onClick={logOut}
              type="button"
              className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <div>{React.createElement(BiLogOut, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: "1200ms" }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                Log out
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
                rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit`}
              >
                Log out
              </h2>
            </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
