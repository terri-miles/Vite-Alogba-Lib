import UserNav from "./UserNav";
import Statistic from "./Statistic";
import useMediaQuery from "@/hooks/useMediaQuery";
import Data from "./Data";
import MobileNavBar from "./MobileNavBar";
import SideBar from "./SideBar";
import DataMobile from "./DataMobile";


const MainDashboard = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      {isAboveMediumScreen ? (
        <>
          <SideBar />
          <div className="basis-[100%] md:w-4/5">
            <UserNav />
            <Statistic />
            <Data />
          </div>
        </>
      ) : (
        <>
          <MobileNavBar />
          <DataMobile />
        </>
      )}

      
    </>
  );
};

export default MainDashboard;
