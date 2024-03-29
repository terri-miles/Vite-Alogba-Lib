import { RiDashboard3Fill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import {
  Cog8ToothIcon,
  ChevronRightIcon,
  WrenchIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="hidden md:block w-full md:basis-1/5 bg-orange-600 h-[100vh] text-white pt-6 px-6 sticky top-0">
        <div className="w-full flex items-center gap-4 pb-5 border-b border-white/40">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <BookOpenIcon className="w-6 h-6 cursor-pointer" />
              <Link to="/">
                <p className="uppercase font-bold text-[16px] cursor-pointer">
                  Alogba Library
                </p>
              </Link>
            </div>
            <Link to="/">
              <p className="text-[12px] hover:text-white/70 transition duration-300">
                [Home]
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-5  border-b border-white/40 pb-5">
          <RiDashboard3Fill className="text-[24px]" />
          <p className="font-medium">Dashboard</p>
        </div>
        <div className="mt-5">
          <p className="text-[12px] text-white/60 uppercase font-bold">
            Interface
          </p>
          <div className="mt-5">
            <div className="flex items-center justify-between gap-2 cursor-pointer mb-5">
              <div className="flex gap-2 items-center">
                <Cog8ToothIcon className="w-5 h-5" />
                <p>Users</p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-white/50" />
            </div>
            <div className="flex items-center justify-between gap-2 cursor-pointer mb-5 opacity-70 hover:opacity-100 transition duration-300">
              <div className="flex gap-2 items-center">
                <WrenchIcon className="w-5 h-5" />
                <p>Product</p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-white/50" />
            </div>
            <div className="flex items-center justify-between gap-2 cursor-pointer mb-5 opacity-70 hover:opacity-100 transition duration-300">
              <div className="flex gap-2 items-center">
                <WrenchIcon className="w-5 h-5" />
                <p>Categories</p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-white/50" />
            </div>
            <div className="mt-24 bg-white/20 w-3/4 px-4 py-2 rounded-md cursor-pointer hover:bg-white/40 transition duration-300">
              <p className="flex">
                Logout{" "}
                <span className="ml-2">
                  <TbLogout className="inline w-4 h-4" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
