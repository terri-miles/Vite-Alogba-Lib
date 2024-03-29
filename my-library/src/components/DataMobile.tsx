import { User } from "@/shared/type";

const DataMobile = () => {
  const storedState = localStorage.getItem("state");
  const data = storedState ? JSON.parse(storedState) : null;
  console.log("data", data);
  let users = data.users;

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
        <div className="mt-8">
          {users.map((user: User, index: number) => {
            const period = user.time >= "12" ? "PM" : "AM";
            return (
              <div key={index}>
                <div className="flex gap-3 py-3 px-4 w-full border-b-2 border-gray-200">
                  <div className="w-16">
                    <p className="w-12 h-12 bg-gray-400 text-white text-[20px] font-bold rounded-[100%] flex items-center justify-center">
                      {user.fName[0]}
                    </p>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-[18px] font-bold">{user.fName}</p>
                      <p className="font-light">
                        {user.time} {period}
                      </p>
                    </div>
                    <p className="w-full overflow-hidden text-ellipsis font-medium text-gray-700 text-[18px]">
                      {user.books.join(", ")}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-[16px] font-light text-black">
                        {user.status == "Borrowed"
                          ? formatDateToDDMMYY(user.date.date_borrowed)
                          : formatDateToDDMMYY(user.date.date_returned)}
                      </p>
                      <p
                        className={`${
                          user.status == "Borrowed" ? "bg-black" : "bg-black/30"
                        } py-1 px-4 text-[14px] rounded-full text-white`}
                      >
                        {user.status}
                      </p>
                    </div>
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

export default DataMobile;
