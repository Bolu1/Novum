import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointmentbanner from "../components/Home2/Appointmentbanner";
import Foote from "../components/Home2/Foote";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectTime, setselectTime] = useState(false);
  const [showForm, setshowForm] = useState(false);
  const [unavailableTime, setUnavailableTime] = useState([])


  const submithandler = async (e) => {
    e.preventDefault();
    console.log("sd");
    setLoading(true);
    try {
      await axios.post(`https://vcb-server.onrender.com/api/admin/novum/mail`, {
        name,
        email,
        date,
        time,
        message,
      });
      setLoading(false);
      toast.success("Submitted");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const getAvailableTime = async() =>{
    
    try {
      const {data} = await axios.post(`http://localhost:8000/api/admin/novum/appointment`, {
        date
      });
      parseData(data.data)
      console.log(unavailableTime)
      setLoading(false);
      toast.success("Submitted");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  }

  // function to convert data to an arrray if need be
  const parseData = (data) =>{
    console.log(data)
    if(data.length == undefined){
      // parse into an array
      const newArray = [data]
      setUnavailableTime(newArray)
      console.log("asa", newArray)
      return
    }
    setUnavailableTime(data)
    
  }

  const minDate = () => {
    var now = new Date(),
      // minimum date the user can choose, in this case now and in the future
      minDate = now.toISOString().substring(0, 10);
    return minDate;
  };

  const selectTimeHandler = (time) =>{

    setshowForm(true)
    setselectTime(false)
    setTime(time)
  }

  const selectDateHandler = async(e) =>{
    e.preventDefault();
    setLoading(true)
    await getAvailableTime()
    setselectTime(true)
    setLoading(false)
    // isAvailable(availabletime[0])
  }

  const isAvailable = (item) =>{
    // console.log('ss', item)
    const data = unavailableTime.filter((time) => time['StartDate']['_text']?.includes(item))

    console.log(data)
    if(data.length == 0){
        return true
    }else{
      return false
    }
  }

const availabletime = [" 8:00:00 AM", " 9:00:00 AM", " 10:00:00 AM", " 11:00:00 AM", " 12:00:00 PM", " 1:00:00 PM", " 2:00:00 PM", " 3:00:00 PM", " 4:00:00 PM"]

  return (
    <div>
      <Navbar />
      <div className="w-full  mx-auto  py-20">
        <Appointmentbanner />
      </div>{" "}
      <div className="w-full max-w-[85rem] h-full py-5 mx-auto px-8 text-black bg-white lg:flex">
        <div className="w-full h-full px-3 pt-8">
          <div className="w-full flex flex-col items-center space-y-4 justify-center">
            <div className="w-full h-20 ">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="large-texts  text-center text-[48px]"
              >
                <span className=" font-semibold  text-[40px] text-black">
                  Make appointment
                </span>
              </motion.h1>
            </div>
          </div>
          <div className="w-full h-66 space-y-3 max-w-[65rem] mx-auto  my-28"></div>
          {!showForm && (
            <form
              onSubmit={(e) => {
                selectDateHandler(e);
              }}
              className="w-full space-y-7 max-w-[65rem] mx-auto "
            >
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Date</h1>
                <input
                  type="date"
                  min={minDate()}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>

                <div className="flex justify-center">
                {
            loading?
            <button
            disabled
             class="px-4 py-4 font-medium tracking-wide text-white capitalize transition-colors bg-gray-200 rounded-lg cursor-not-allowed">
                      Check Available Time
                  </button>
            :
            <button class="px-4 py-4 font-medium tracking-wide text-black  capitalize transition-colors duration-300 transform border-2 border-black rounded-lg ">
                     Check Available Time
                  </button>

                  }
                </div>
            </form>
          )}
          {selectTime &&
              <div className="bg-black p-8 my-8 grid grid-cols-3 px-3 py-4 gap-y-10 sm:grid-cols-4 md:grid-cols-6 gap-x-6 lg:grid-cols-6 xl:grid-cols-9">
              
              {
                availabletime.map((item)=>(
                  <>
                  { 
                    isAvailable(item) &&
                <button
                onClick={()=>selectTimeHandler(item)}
               class=" py-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 rounded-lg cursor-pointer ">
                {item}
              </button>
              }
                  </>
              
            ))}
              </div>
          }
          {showForm && (
            <form
              onSubmit={(e) => {
                submithandler(e);
              }}
              className="w-full space-y-7 max-w-[65rem] mx-auto "
            >
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Name</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Email Address</h1>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Date</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  value={date}
                  readonly
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Time</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  readonly
                  required
                  value={time}
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Message</h1>
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="border-b resize-none py-2 px-3 white outline-none bg-transparent"
                ></textarea>
              </div>

              {loading ? (
                <button
                  disabled
                  class="px-4 py-4 font-medium tracking-wide text-white capitalize transition-colors bg-gray-200 rounded-lg cursor-not-allowed"
                >
                  Book Appointment
                </button>
              ) : (
                <button class="px-4 py-4 font-medium tracking-wide text-black  capitalize transition-colors duration-300 transform border-2 border-black rounded-lg ">
                  <p className="font-bold">Book Appointment</p>
                </button>
              )}
            </form>
          )}
        </div>
      </div>
      <Foote />
    </div>
  );
};

export default About;
