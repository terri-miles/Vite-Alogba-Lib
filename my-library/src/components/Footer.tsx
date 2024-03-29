import { BookOpenIcon } from "@heroicons/react/24/solid";


const Footer = () => {
  return (
    <footer className="bg-gray-950 py-16">
      <div className="md:flex mx-auto w-5/6 gap-16">
        <div className="basis-1/2 mt-16 md:mt-0 text-white">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-[30px] text-orange-500" />
            <p className="text-[18px] md:text-2xl font-montserrat font-bold text-white">
              ALOGBA LIBRARY
            </p>
          </div>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-white">
        <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
