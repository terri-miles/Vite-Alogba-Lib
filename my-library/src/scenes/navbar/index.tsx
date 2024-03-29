import useMediaQuery from "@/hooks/useMediaQuery";
import { useContext, useState } from "react";
import { Bars3Icon, BookOpenIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Links from "@/scenes/navbar/Links";
import { libraryContext } from "@/context/GlobalState";
import { Link } from "react-router-dom";

type Props = {
  isTopOfPage: boolean;
};

const NavBar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const { selectedPage, setSelectedPage } = useContext(libraryContext);
  return (
    <nav>
      <div
        className={`${
          isTopOfPage ? "" : "bg-black/80 drop-shadow-md"
        } fixed top-0 z-30 w-full py-4`}
      >
        <div className="w-5/6 mx-auto">
          <div className="flex items-center justify-between w-full gap-16">
            {/* Left side */}
            <div className="flex items-center gap-2">
              <BookOpenIcon className="w-[30px] md:w-[50px] text-orange-500" />
              <Link to="/">
                <p className="text-[16px] md:text-2xl font-montserrat font-medium text-white">
                  ALOGBA LIBRARY
                </p>
              </Link>
            </div>
            {/* Right side */}
            {isAboveMediumScreen ? (
              <div className="flex items-center justify-between w-3/5">
                <div className="flex items-center justify-between gap-8 text-sm text-white">
                  <Links
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Shop"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between gap-8">
                  <Link
                    className="text-white hover:text-yellow-500 transition duration-300"
                    to="/dashboard"
                  >
                    Admin
                  </Link>
                  <Link to="/borrowBookPage">
                    <p className="py-2 px-10 bg-orange-500 text-white rounded-md hover:bg-yellow-500 transition duration-300">
                      Borrow Book
                    </p>
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="bg-yellow-500 p-2 rounded-full"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreen && (
        <div
          className={`fixed right-0 top-0 h-full w-[300px] z-50 ${
            isMenuToggled ? "scale-x-1" : "scale-x-0"
          } bg-gradient-to-br from-gray-950 to-gray-800 transform origin-right drop-shadow-md transition duration-300`}
        >
          {/* Close icon */}
          <div className="flex items-center justify-end p-8">
            <button
              className="bg-white/10 p-2 rounded-full"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="w-6 h-6 text-gray-200" />
            </button>
          </div>
          {/* Menu links */}
          <div className="ml-[25%] flex flex-col gap-10 text-[18px] text-white">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Shop"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="flex flex-col gap-5 mt-[40px]">
              <Link
                className="w-[180px] bg-white/20 py-2 text-center rounded-md"
                to="/dashboard"
              >
                Admin
              </Link>
              <Link to="/borrowBookPage">
                <p className="w-[180px] bg-orange-500 py-2 text-center rounded-md">
                  Borrow Book
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
