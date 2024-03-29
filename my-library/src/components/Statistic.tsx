import { UsersIcon } from "@heroicons/react/24/solid";

const Statistic = () => {
  return (
    <>
      <div className="w-full py-8 px-6 flex items-center gap-4">
        <div className="w-1/3 bg-black/10 rounded-md px-6 py-5">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-8 h-8 text-blue-500" />
            <p className="font-bold text-[18px] text-blue-500">
              120+{" "}
              <span className="font-normal text-[12px] text-black">
                Users visited, March.
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-black/10 rounded-md px-6 py-5">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-8 h-8 text-blue-500" />
            <p className="font-bold text-[18px] text-blue-500">
              30+{" "}
              <span className="font-normal text-[12px] text-black">
                Users borrowed books, March.
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-black/10 rounded-md px-6 py-5">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-8 h-8 text-blue-500" />
            <p className="font-bold text-[18px] text-blue-500">
              22+{" "}
              <span className="font-normal text-[12px] text-black">
                Users returned books, March.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
