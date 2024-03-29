import { libraryContext } from "@/context/GlobalState";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useContext } from "react";
import libBG from "@/assets/librarybg.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/type";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import { TiVendorMicrosoft } from "react-icons/ti";
import { IoLogoFigma } from "react-icons/io5";
import { DiYahoo } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const Hero = () => {
  const { setSelectedPage } = useContext(libraryContext);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="w-full h-full">
      <motion.div
        className="w-full h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div className="w-full h-[75%] relative">
          <div className="w-full h-full bg-black/20 absolute z-10"></div>
          <motion.div
            className="absolute z-20 w-full text-white bottom-10 md:bottom-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="w-5/6 mx-auto text-2xl font-montserrat mb-3">
              Unlock the World of Knowledge:
              <br />
              <span className="text-orange-500 text-[28px] md:text-3xl font-bold">
                Your Library, Your Universe!
              </span>
            </h1>
            <div className="w-5/6 mx-auto">
              <p className="md:w-3/6 md:text-[16px] text-white/80">
                Dive into a realm of endless stories, wisdom and adventure. Our
                library is not just a collection of books, it's a portal to new
                worlds and endless possibilities. Immerse yourself in the joy of
                reading.
              </p>
            </div>
          </motion.div>
          <img
            className="w-full h-full object-cover absolute"
            src={libBG}
            alt="hero-image"
          />
        </motion.div>
        <div className="w-full h-[25%] bg-gradient-to-b from-gray-950 to-gray-700">
          <div className="md:flex w-5/6 h-full mx-auto">
            <motion.div
              className="w-full md:w-[70%] md:h-full pt-2 md:pt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {isAboveMediumScreen && (
                <div className="flex pl-3 my-3 border-l-4 border-yellow-600">
                  <AnchorLink className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
                    <FaSquareFacebook className="text-white text-[26px]" />
                  </AnchorLink>
                  <AnchorLink className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
                    <FaInstagramSquare className="text-white text-[26px]" />
                  </AnchorLink>
                  <AnchorLink className="hover:bg-white/10 p-2 rounded-md cursor-pointer">
                    <FaSquareXTwitter className="text-white text-[26px]" />
                  </AnchorLink>
                </div>
              )}
              <div className="w-full md:w-5/6 border-b-2 border-white/60 flex items-center justify-between gap-24 p-3">
                <input
                  type="text"
                  placeholder="Search books here..."
                  className="bg-transparent border-none outline-none text-white w-full"
                />
                <MagnifyingGlassIcon className="w-[24px] text-white/60" />
              </div>
            </motion.div>
            <div className="w-full mt-3 md:mt-4 md:w-[30%] md:h-full">
              <div className="mt-2 md:m-2 p-2 bg-white w-full h-auto rounded-md shadow-sm">
                <div className="flex">
                  {isAboveMediumScreen && (
                    <div className="ml-2">
                      <p>Opening hours</p>
                      <hr className="w-[15%] h-[4px] bg-yellow-500 rounded mb-2" />
                      <p className="text-3xl">9:05am - 5:00pm</p>
                    </div>
                  )}
                  {!isAboveMediumScreen && (
                    <div className="flex items-center gap-7 ml-2">
                      <p className="bg-black/10 p-3 rounded">
                        <ClockIcon className="w-6 h-6 text-gray-500" />
                      </p>
                      <p className="text-3xl">9:05am - 5:00pm</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for sponsors */}
        {isAboveMediumScreen && (
          <motion.div className="w-full h-[140px] bg-blue-50">
            <div className="w-5/6 mx-auto py-6 flex flex-col">
              <p className="text-[14px] font-semibold text-gray-600">
                Our Sponsors:
              </p>
              <motion.div
                className="flex items-center gap-8 mt-3 px-2 text-gray-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <TiVendorMicrosoft className="w-1/6 h-12" />
                <IoLogoFigma className="w-1/6 h-12" />
                <DiYahoo className="w-1/6 h-12" />
                <FaGoogle className="w-1/6 h-12" />
                <SiBinance className="w-1/6 h-12" />
                <FaAmazon className="w-1/6 h-12" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
