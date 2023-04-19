import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Contact = ({toast}) => {

  const submithandler = async(e) =>{
    e.preventDefault();
    toast.success("Submitted")
  }

  return (
    <div id="contact">
      <AnimatePresence exitBeforeEnter>
      <div 
      className="w-full max-w-[85rem] h-full py-5 mx-auto px-8 text-black bg-white lg:flex">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full flex flex-col items-center space-y-4 justify-center">
          <div className="w-full h-40 ">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="large-texts  text-center text-[48px]"
                >
                  <span className=" font-semibold  text-[60px] text-black">
                    Contact Us
                  </span>
                </motion.h1>
                <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[20px] text-black text-center"
              >
                stay connected!
              </motion.p>
              </div>
          </div>
          <div className="w-full h-60 space-y-3 max-w-[65rem] mx-auto  mt-10">
          <div className="w-full items-center text-lg flex space-x-4">
              <IoLocationSharp className="w-6 h-6" />
              <p className="text:xs">Address: 1404 Crain Highway South Suite 112 Glen Burnie MD 21061</p>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillPhone className="w-6 h-6" />
              <h1>443-805-2790</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <FaFax className="w-6 h-6" />
              <h1>208-213-2790</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <AiFillMail className="w-6 h-6" />
              <h1

               className="text-blue-600 underline"
              >info@novumhealthservices.com</h1>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <TbWorld className="w-6 h-6" />
              <a
              href="http://www.novumhealthservices.com/"
              target="_"
              className="text-blue-600 underline"
              >www.novumhealthservices.com</a>
            </div>
          </div>
          <form 
          onSubmit={(e)=>{submithandler(e)}}
          className="w-full space-y-7 max-w-[65rem] mx-auto ">
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Name</h1>
              <input
                type="text"
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Email Address</h1>
              <input
                type="email"
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 
              id="appointment"
              className="text-xl">Subject</h1>
              <input
                type="text"
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Date</h1>
              <input
                type="date"
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Time</h1>
              <input
                type="time"
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Message</h1>
              <textarea className="border-b resize-none py-2 px-3 white outline-none bg-transparent"></textarea>
            </div>

            <button class="px-4 py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-customblue rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                      Book Appointment
                  </button>

          </form>
        </div>
      </div>
      </AnimatePresence>

    </div>
  );
};

export default Contact;
