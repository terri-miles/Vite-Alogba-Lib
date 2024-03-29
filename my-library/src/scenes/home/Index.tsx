import { useContext, useEffect, useState } from "react";
import NavBar from "../navbar";
import { SelectedPage } from "@/shared/type";
import { libraryContext } from "@/context/GlobalState";
import Hero from "@/components/Hero";
import Benefits from "../benefits";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  const { setSelectedPage } = useContext(libraryContext);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0){
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll)
  },[]);

  return (
    <section className="w-full h-full">
      <NavBar isTopOfPage={isTopOfPage} />
      <Hero />
      <Benefits />
      <Shop/>
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
