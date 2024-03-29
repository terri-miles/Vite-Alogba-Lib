import donateImg from "@/assets/donate.jpg";
import { motion } from "framer-motion";

const Donation = () => {
  return (
    <div className="bg-orange-300 w-full h-[900px] md:h-[800px] p-4">
      <div className="w-5/6 mx-auto relative">
        <div className="after:absolute after:right-16 after:bottom-[200px] after:md:content-arrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={donateImg}
              alt="donate-image"
              className="w-full md:w-[600px] h-[320px] object-cover md:ml-[87px] mt-6 md:mt-[40px]"
            />
          </motion.div>
          <div>
            <h1 className="md:ml-[87px] mt-9 md:mt-[40px] text-2xl md:text-4xl text-[#5E0000] font-montserrat font-bold md:w-[600px]">
              Empower Change: Support Our Cause with a Generous Donation
            </h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:flex md:ml-[87px] md:justify-between items-end mt-6"
            >
              <button className="bg-[#5e0000] w-[220px] h-[50px] text-white rounded hidden md:block">
                Donate Now
              </button>
              <p className="md:w-3/5 text-[#5e0000]">
                At Alogba Library, we believe in the power of knowledge to
                transform lives. Your donation helps us provide a diverse
                collection of books, innovative programs, and a welcoming space
                for learning. By contributing, you become a vital part of our
                literary community, ensuring that the joy of reading reaches
                everyone. Make a donation today and help us write the next
                chapter in our library's story!"
              </p>
              <button className="bg-[#5e0000] w-[220px] h-[50px] text-white rounded md:hidden mt-6">
                Donate Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
