import { User } from "@/shared/type";

const Data = () => {
  const storedState = localStorage.getItem("state");
  const data = storedState ? JSON.parse(storedState) : null;
  console.log("data", data);
  let users = data.users;
  //   const millisecondsToTime = (milliseconds: number) => {
  //     // Convert milliseconds to seconds
  //     const seconds = Math.floor(milliseconds / 1000);
  //     // Calculate hours, minutes and remaining seconds
  //     const hours = Math.floor(seconds / 3600);
  //     const minutes = Math.floor((seconds % 3600) / 60);

  //     // Format time
  //     const formattedTime = hours + ':' + minutes.toString().padStart(2, '0');

  //     return formattedTime;
  //   };

  const formatDateToDDMMYY = (dateString: Date) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return day + "/" + month + "/" + year;
  };
  return (
    <>
      <div className="w-full">
        <div className="mx-6 bg-gray-200 rounded-md h-[100%]">
          {users.map((item: User, index: number) => {
            const period = item.time >= "12" ? "PM" : "AM";
            return (
              <div key={index} className="">
                <div className="flex items-center gap-4 border-b-2 border-gray-300 hover:shadow-md cursor-pointer py-3 px-4 relative">
                  <div className="font-light">{index + 1}</div>
                  <div className="font-light mr-20 w-[150px]">{item.fName}</div>
                  <div
                    className={`${
                      item.status == "Borrowed" ? "bg-black" : "bg-black/30"
                    } py-1 px-4 text-[14px] rounded-full text-white font-semibold`}
                  >
                    {item.status}
                  </div>
                  <div className="font-semibold text-black/30">
                    <span className="text-[16px] font-light text-black">
                      {item.books.join(", ")}
                    </span>
                  </div>
                  <div className="w-[3px] h-[3px] bg-black/40 rounded-full -mx-1"></div>
                  <div className="text-[16px] font-light text-black">
                    {item.status == "Borrowed"
                      ? formatDateToDDMMYY(item.date.date_borrowed)
                      : formatDateToDDMMYY(item.date.date_returned)}
                  </div>
                  <div className="font-semibold text-black/30 absolute right-[16px]">
                    <span className="font-light text-[16px] text-black">
                      {" "}
                      {item.time} {period}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Data;
