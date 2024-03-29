import MainDashboard from "@/components/MainDashboard";
import { Link } from "react-router-dom";
import { RiDashboard3Fill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import {
  BookOpenIcon,
  Cog8ToothIcon,
  ChevronRightIcon,
  WrenchIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { libraryContext } from "@/context/GlobalState";

const Dashboard = () => {
  const { mobileToggle, setMobileToggle } = useContext(libraryContext);
  return (
    <>
      <section className="w-full md:flex">
        <MainDashboard />
      </section>

      {/* Mobile Navigation */}
      <div
        className={`bg-orange-600 w-4/6 h-[100vh] shadow-md fixed top-0 z-50 text-white pt-8 px-6 transform origin-left drop-shadow-md transition duration-300 ${
          mobileToggle ? "scale-x-1" : "scale-x-0"
        }`}
      >
        <button onClick={() => setMobileToggle(!mobileToggle)}>
          <ArrowLeftIcon className="w-9 h-9 bg-white/20 font-bold mb-4 py-2 px-2 transition duration-300 rounded-full" />
        </button>
        <div className="w-full flex items-center gap-4 pb-5 border-b border-white/40">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <BookOpenIcon className="w-7 h-7 cursor-pointer" />
                <p className="uppercase font-bold text-[18px] cursor-pointer">
                  Alogba Library
                </p>
              </div>
              <Link to={"/"}>
                {" "}
                <p>[Home]</p>
              </Link>
            </div>
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
            <div className="mt-40 bg-white/20 w-3/4 px-10 py-3 rounded-md cursor-pointer hover:bg-white/40 transition duration-300">
              <p className="">
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

export default Dashboard;
