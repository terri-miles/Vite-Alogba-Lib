import { useForm } from "react-hook-form";
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const UserNav = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("data from dashboard", data);
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full py-5 px-6 shadow-md sticky top-0">
          <div className="flex justify-between items-center">
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center justify-between w-[450px] bg-gray-200 rounded-full p-1"
              >
                <input
                  id="searchUser"
                  type="text"
                  placeholder="Search for Users here.."
                  className="w-[350px] bg-transparent border-none outline-none pl-4"
                  {...register("search")}
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white rounded-full py-2 px-2"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
            <div className="flex gap-2 items-center">
              <EnvelopeIcon className="w-9 h-9 text-gray-500 hover:bg-gray-200 py-2 px-2 transition duration-300 rounded-full cursor-pointer" />
              <Cog6ToothIcon className="w-9 h-9 text-gray-500 hover:bg-gray-200 py-2 px-2 transition duration-300 rounded-full cursor-pointer" />
              <div className="flex items-center gap-2 bg-black/10 p-2 rounded-full cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-400 p-2 rounded-full text-white border-2 border-gray-300 text-[14px]">
                  A
                </div>
                <p className="text-[14px] font-bold">Wellcome back Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNav;
