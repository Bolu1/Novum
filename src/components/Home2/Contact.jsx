import React, {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import carf from "../../assets/images/home/carf.png"
import { BiPhoneCall } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import axios from "axios"

const Contact = ({toast}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const submithandler = async(e) =>{
    e.preventDefault();
    console.log("sd")
    setLoading(true)
    try{

      await axios.post(
        `http://localhost:8000/api/admin/novum/mail`,
        {
          name,
          email,
          date,
          time,
          message
        }
      );
    setLoading(false)
      toast.success("Submitted")
    }catch(error){
      console.log(error)
    setLoading(false)
      toast.error("Something went wrong")
    }
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
          <div className="w-full h-66 space-y-3 max-w-[65rem] mx-auto  my-20">
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
              <a
                href="mailto:info@novumhealthservices.com"
               className="text-blue-600 underline"
              >info@novumhealthservices.com</a>
            </div>
            <div className="w-full items-center text-lg flex space-x-4">
              <TbWorld className="w-6 h-6" />
              <a
              href="http://www.novumhealthservices.com/"
              target="_"
              className="text-blue-600 underline"
              >www.novumhealthservices.com</a>
            </div>

            <div>
            <img
          id="appointment"
            className="h-15 w-20 my-4"
              src={carf}
            />
            </div>
          </div>
          <form 
          onSubmit={(e)=>{submithandler(e)}}
          className="w-full space-y-7 max-w-[65rem] mx-auto ">
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Name</h1>
              <input
                type="text"
                onChange={(e)=>{setName(e.target.value)}}
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Email Address</h1>
              <input
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Date</h1>
              <input
                type="date"
                onChange={(e)=>{setDate(e.target.value)}}
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Time</h1>
              <input
                type="time"
                onChange={(e)=>{setTime(e.target.value)}}
                required
                className="border-b py-2 px-3 white outline-none bg-transparent"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl">Message</h1>
              <textarea 
                onChange={(e)=>{setMessage(e.target.value)}}
              className="border-b resize-none py-2 px-3 white outline-none bg-transparent"></textarea>
            </div>

          {
            loading?
            <button
            disabled
             class="px-4 py-4 font-medium tracking-wide text-white capitalize transition-colors bg-gray-200 rounded-lg cursor-not-allowed">
                      Book Appointment
                  </button>
            :
            <button class="px-4 py-4 font-medium tracking-wide text-black  capitalize transition-colors duration-300 transform border-2 border-black rounded-lg ">
                    <p className="font-bold">
                      Book Appointment
                    </p>
                  </button>

                  }

          </form>
        </div>
      </div>
      </AnimatePresence>

    </div>
  );
};

export default Contact;
