import { libraryContext } from "@/context/GlobalState";
import { User } from "@/shared/type";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Check from "@/assets/check.png";

const UserInput = () => {
  const { addNewUser } = useContext(libraryContext);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const {
    trigger,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fName: "",
      status: "Borrowed",
      books: ["", "", ""],
      date: {
        date_borrowed: new Date(),
        date_returned: "",
      },
      time: new Date().getTime(),
    },
  });

  const onSubmit = async (data: any) => {
    // Create the userObject
    let userObject: User = {
      id: Math.floor(Math.random() * 1000000),
      fName: data.fName,
      status: data.status,
      books: data.books,
      date: data.date,
      time: data.time,
    };
    console.log("userObject", userObject);
    reset();
    trigger();
    addNewUser(userObject);
    setModal(true);
  };

  const check = () => {
    setModal(false);
    navigate("/");
  };

  return (
    <section className="w-full">
      <div className={`${modal ? 'block' : 'hidden'} w-full h-[100vh] fixed z-30`}>
        <div className="w-full h-full bg-black/70 flex items-center justify-center">
          <div className="w-4/5 md:w-2/5 bg-white h-1/2 rounded-md flex flex-col items-center justify-center">
            <img src={Check} className="w-20 h-20 mb-4" alt="success-message" />
            <p className="text-[24px] text-gray-500 font-semibold">
              Submited successfully
            </p>
            <button
              onClick={check}
              className="bg-orange-500 py-2 px-10 rounded-md mt-4 text-white hover:bg-orange-700"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
      <div className="bg-orange-600 py-4">
        <div className="w-5/6 mx-auto">
          <div className="flex gap-4 relative">
            <div className="flex gap-4">
              <BookOpenIcon className="w-8 h-8 text-white" />
              <p className="text-white uppercase font-bold text-2xl">
                Alogba Library
              </p>
            </div>
            <Link to="/">
              <p className="text-[14px] absolute bottom-1 left-64 text-white/90 hover:text-white/70 hover:underline cursor-pointer transition duration-300">
                [Home]
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#eaeaea]">
        <div className="w-full h-[100%] md:w-5/6 md:mx-auto p-14">
          <div className="w-full md:w-3/5 mx-auto bg-white rounded-md p-6 shadow">
            <div className="border-b border-orange-200 pb-3">
              <h4 className="text-2xl md:text-3xl font-medium">
                Borrow Books Today
              </h4>
              <p className="text-gray-500 mt-1">
                Fill in the required fields below
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="mt-3"
            >
              <div className="mb-2">
                <label htmlFor="fName" className="font-light text-[12px]">
                  Full Names <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fName"
                  className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                  {...register("fName", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.fName && (
                  <p className="text-red-500">
                    {errors.fName.type === "required" &&
                      "This field is required."}
                    {errors.fName.type === "maxLength" &&
                      "Max length is a 100 character."}
                  </p>
                )}
              </div>
              <div className="md:flex md:flex-col">
                <div className="md:flex gap-4">
                  <div className="mb-2 md:w-1/2">
                    <label
                      htmlFor="books-one"
                      className="font-light text-[12px]"
                    >
                      Book title 1 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="books-one"
                      className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                      {...register("books.0", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.books && (
                      <p className="text-red-500">
                        {errors.books &&
                          errors.books.type === "required" &&
                          "This field is required."}
                        {errors.books &&
                          errors.books.type === "maxLength" &&
                          "This field is required."}
                      </p>
                    )}
                  </div>
                  <div className="mb-2 md:w-1/2">
                    <label
                      htmlFor="books-two"
                      className="font-light text-[12px]"
                    >
                      Book title 2
                    </label>
                    <input
                      type="text"
                      id="books-two"
                      className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                      {...register("books.1")}
                    />
                  </div>
                </div>
                <div className="md:flex gap-4">
                  <div className="mb-2 md:w-1/2">
                    <label
                      htmlFor="books-three"
                      className="font-light text-[12px]"
                    >
                      Book title 3
                    </label>
                    <input
                      type="text"
                      id="books-three"
                      className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                      {...register("books.2")}
                    />
                  </div>
                  <div className="mb-2 md:w-1/2 md:flex md:flex-col">
                    <label htmlFor="status" className="font-light text-[12px]">
                      Status <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="status"
                      id="status"
                      className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                    >
                      <option value="borrow">Borrow</option>
                      <option value="return">Return</option>
                    </select>
                  </div>
                </div>
                <div className="md:flex gap-4">
                  <div className="mb-2 md:w-1/2">
                    <label
                      htmlFor="borrowDate"
                      className="font-light text-[12px]"
                    >
                      Borrow Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="Date"
                      id="borrowDate"
                      className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                      {...register("date.date_borrowed", {
                        valueAsDate: true,
                        required: true,
                      })}
                    />
                    {errors.date?.date_borrowed && (
                      <p className="text-red-500">
                        {errors.date.date_borrowed.type === "required" &&
                          "This field is required"}
                      </p>
                    )}
                  </div>
                  <div className="mb-2 md:w-1/2">
                    <label
                      htmlFor="returnDate"
                      className="font-light mb-1 text-[12px]"
                    >
                      Return Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="Date"
                      id="returnDate"
                      className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                      {...register("date.date_returned", {
                        valueAsDate: true,
                        required: true,
                      })}
                    />
                    {errors.date?.date_returned && (
                      <p className="text-red-500">
                        {errors.date.date_returned.type === "required" &&
                          "This field is required"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-2 md:w-1/2">
                  <label htmlFor="time" className="font-light text-[12px]">
                    Time <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="mb-1 outline-none w-full rounded-lg border-2 border-gray-200 bg-[#f0f0f0] px-5 py-1"
                    {...register("time", {
                      required: true,
                    })}
                  />
                  {errors.time && (
                    <p className="text-red-500">
                      {errors.time.type === "required" &&
                        "This field is required"}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 rounded-lg bg-orange-500 text-[#5e0000] w-full py-2 transition duration-300 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInput;
