import { libraryContext } from "@/context/GlobalState";
import {
  EnvelopeIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";



const MobileNavBar = () => {
  const { mobileToggle, setMobileToggle } = useContext(libraryContext);
  return (
    <>
      <div className="w-full py-5 px-4 shadow-md sticky top-0 z-30 bg-white">
        <div className="flex items-center justify-between">
          <Bars3Icon
            onClick={() => setMobileToggle(!mobileToggle)}
            className="w-8 h-8"
          />
          <div className="flex gap-2 items-center">
            <EnvelopeIcon className="w-9 h-9 text-gray-500 bg-gray-200 py-2 px-2 transition duration-300 rounded-full cursor-pointer" />
            <Cog6ToothIcon className="w-9 h-9 text-gray-500 bg-gray-200 py-2 px-2 transition duration-300 rounded-full cursor-pointer" />
            <div className="cursor-pointer">
              <div className="w-9 h-9 flex items-center justify-center bg-gray-600 text-white font-bold border-2 border-gray-300 rounded-full text-[14px]">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default MobileNavBar;
