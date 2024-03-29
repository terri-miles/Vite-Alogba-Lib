import { libraryContext } from "@/context/GlobalState";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import contactIllustration from "@/assets/Confirmed-cuate.svg";

const Contact = () => {
  const { setSelectedPage } = useContext(libraryContext);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    e.preventDefault();
    if (!isValid) {
    }
  };

  return (
    <section id="contactus">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="w-full h-full"
      >
        <div className="w-5/6 mx-auto pt-24 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:w-3/5"
          >
            <h1 className="md:3/5 font-montserrat font-semibold text-2xl md:text-4xl mb-5 text-[#5e0000]">
              <span className="text-[#ff6666]">Connect with Us:</span> Reach Out
              to Your Literary Hub!
            </h1>
            <p className="text-[#5e0000]">
              We're here to hear! Whether you have questions, suggestions, or
              just want to share your love for books, our library team is ready
              to connect. Drop us a message, and let's build a bridge of
              communication.
            </p>
          </motion.div>
          <div className="md:flex justify-between gap-8 mt-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 md:mt-0 basis-3/5"
            >
              <form
                action="https://formsubmit.co/cda284da9e73594173bd737c39bb5203"
                onSubmit={onSubmit}
                target="_blank"
                method="POST"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="mb-5 outline-none w-full rounded-lg border-2 border-orange-500 bg-orange-300 px-5 py-3 placeholder-white"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is a 100 character."}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className="mb-5 outline-none w-full rounded-lg border-2 border-orange-500 bg-orange-300 px-5 py-3 placeholder-white"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500">
                    {errors.email.type === "required" &&
                      "This field is required"}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
                <textarea
                  className="mb-5 outline-none w-full rounded-lg border-2 border-orange-500 bg-orange-300 px-5 py-3 placeholder-white"
                  cols={50}
                  rows={4}
                  placeholder="MESSAGE"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500">
                    {errors.message.type === "required" &&
                      "This field is required"}
                    {errors.message.type === "maxLength" &&
                      "Max lenght is a 2000 character"}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-orange-500 text-[#5e0000] px-20 py-3 transition duration-300 hover:text-white"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
            <div className="basis-2/5 mt-16 md:mt-0">
              <img
                src={contactIllustration}
                alt="contact-illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
