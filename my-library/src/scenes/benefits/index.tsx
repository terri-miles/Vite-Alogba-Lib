import { libraryContext } from "@/context/GlobalState";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Benefit, SelectedPage } from "@/shared/type";
import {
  BuildingLibraryIcon,
  DocumentMagnifyingGlassIcon,
  IdentificationIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useContext } from "react";

const benefits: Benefit[] = [
  {
    id: 1,
    name: "Get a library ID",
    description:
      "Sign up for a temporary card to get access to the library digital resources and e-collection today!",
    icon: <IdentificationIcon className="w-12 h-12" />,
  },
  {
    id: 2,
    name: "Ask a Librarian",
    description:
      "Ask a question online or text +234 703 5352345. New Ask-a-Librarian hours are now available!",
    icon: <QuestionMarkCircleIcon className="w-12 h-12" />,
  },
  {
    id: 3,
    name: "Digital Library",
    description:
      "Free access to e-books, audiobooks, learning tools, online research tools, and more!",
    icon: <BuildingLibraryIcon className="w-12 h-12" />,
  },
  {
    id: 4,
    name: "Subscribe to the eNewsletter",
    description:
      "Subscribe to get the latest updates on what’s happening at our library.",
    icon: <DocumentMagnifyingGlassIcon className="w-12 h-12" />,
  },
];

const Benefits = () => {
  const { setSelectedPage } = useContext(libraryContext);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="benefits" className="w-full md:mt-[135px] mb-8">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="w-5/6 mx-auto">
          <div className="flex flex-col gap-6 py-10">
            <div className="flex gap-8 mt-10">
              <div className="w-full md:basis-2/3 flex flex-col">
                <div className="flex justify-between">
                  <p className="uppercase font-bold text-blue-900 text-2xl md:text-4xl">Benefits</p>
                  <div className="flex flex-col text-right">
                    {benefits.map((benefit: Benefit) => (
                      <div
                        key={benefit.id}
                        className="font-normal text-blue-500 text-[14px] transition underline hover:md:text-orange-500 duration-300 cursor-pointer"
                      >
                        {benefit.name}
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}>
                  {benefits.map((benefit: Benefit) => (
                    <div
                      key={benefit.id}
                      className="flex flex-col bg-blue-50 border-2 border-blue-700 rounded-md p-2"
                    >
                      <div className="flex justify-center mt-4 mb-3">
                        {benefit.icon}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold mb-1 text-blue-900 text-center md:text-left underline">
                          {benefit.name}
                        </p>
                        <p className="text-[12px] text-blue-950">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              {isAboveMediumScreen && (
                <div className="bg-gray-100 rounded-md shadow basis-1/3 p-5 text-black text-wrap">
                  <p className="uppercase mb-3">Events</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4 cursor-pointer">
                      <div className="px-3 py-2 bg-black/80 text-white rounded-md">
                        <p className="font-light text-[14px]">Mar</p>
                        <p className="text-[18px] font-semibold">07</p>
                      </div>
                      <div className="transition hover:text-black hover:underline font-semibold duration-300">
                        Cricut Craft Club: Open Class
                      </div>
                    </div>
                    <div className="flex gap-4 cursor-pointer">
                      <div className="px-3 py-2 bg-black/80 text-white rounded-md">
                        <p className="font-light text-[14px]">Mar</p>
                        <p className="text-[18px] font-semibold">12</p>
                      </div>
                      <div className="transition hover:text-black hover:underline font-semibold duration-300">
                        Junior League of Atlanta Journey To Literacy Storytime
                      </div>
                    </div>
                    <div className="flex gap-4 cursor-pointer">
                      <div className="px-3 py-2 bg-black/80 text-white rounded-md">
                        <p className="font-light text-[14px]">Mar</p>
                        <p className="text-[18px] font-semibold">15</p>
                      </div>
                      <div className="transition hover:text-black hover:underline font-semibold duration-300">
                        Nurture Your Nutrition Resource Fair @ Hapeville Library
                      </div>
                    </div>
                    <div className="flex gap-4 cursor-pointer">
                      <div className="px-3 py-2 bg-black/80 text-white rounded-md">
                        <p className="font-light text-[14px]">Mar</p>
                        <p className="text-[18px] font-semibold">07</p>
                      </div>
                      <div className="transition hover:text-black hover:underline font-semibold duration-300">
                        Cricut Craft Club: Open Class
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
