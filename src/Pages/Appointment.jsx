import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointmentbanner from "../components/Home2/Appointmentbanner";
import Foote from "../components/Home2/Foote";

const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [provider, setProvider] = useState(null);
  const [providers, setProviders] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectTime, setselectTime] = useState(false);
  const [showForm, setshowForm] = useState(false);
  const [selectTimeError, setSelectTimeError] = useState(false);
  const [unavailableTime, setUnavailableTime] = useState([]);

  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `http://localhost:8000/api/admin/novum/appointment/create`,
        {
          provider,
          firstName,
          lastName,
          phone,
          email,
          date,
          startTime,
          endTime,
          message,
        }
      );
      setLoading(false);
      toast.success("Submitted");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const getAvailableTime = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/admin/novum/appointment`,
        {
          date,
          provider,
        }
      );
      parseData(data.data);
      console.log(unavailableTime);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  // function to convert data to an arrray if need be
  const parseData = (data) => {
    console.log(data);
    if (data.length == undefined) {
      // parse into an array
      const newArray = [data];
      setUnavailableTime(newArray);
      return;
    }
    setUnavailableTime(data);
  };

  const minDate = () => {
    var now = new Date(),
      // minimum date the user can choose, in this case now and in the future
      minDate = now.toISOString().substring(0, 10);
    return minDate;
  };

  const selectTimeHandler = (time) => {
    console.log(time);
    const EndDate = replaceString(time.trim(), 1);
    const startTime = `${date}T${time.trim()}:00`;
    const endTime = `${date}T${EndDate}:00`;
    // console.log(nt);
    setEndTime(endTime);
    setStartTime(startTime);
    console.log(startTime, endTime);
    isTimeAvialable(startTime, endTime);
  };

  const selectTimeHandler1 = () => {
    if(selectTimeError){
      toast.error("This time is unavailable please select another")
    }
    setshowForm(true);
    setselectTime(false);
  };

  const isTimeAvialable = (startTime, endTime) => {
    setSelectTimeError(false);
    for (let x = 0; x < unavailableTime.length; x++) {
    const temp =
      unavailableTime[x].StartDate["_text"].split(" ");
    const temp1 =
      unavailableTime[x].EndDate["_text"].split(" ");
    // check if hour consists of two digits
    const starthourStrHours = parseTo24Hours(temp);
    const endhourStrHours = parseTo24Hours(temp1);
    const starthourStr = starthourStrHours.split(":");
    const endhourStr = endhourStrHours.split(":");

    const tempStartTime =
      starthourStr[0].length == 1
        ? `${date}T0${starthourStrHours}`
        : `${date}T${starthourStrHours}`;

    const tempEndTime =
      endhourStr[0].length == 1
        ? `${date}T0${endhourStrHours}`
        : `${date}T${endhourStrHours}`;
    const newTempStartTime = new Date(tempStartTime);
    const newTempEndTime = new Date(tempEndTime);
    const newStartTime = new Date(startTime);
    const newEndTime = new Date(endTime);
    console.log(newTempStartTime, newTempEndTime, newStartTime, newEndTime);
    // console.log(endTime)
    if (newStartTime < newTempStartTime && newTempStartTime < newEndTime) {
      console.log("baddd 1");
      setSelectTimeError(true);
    }

    if (newStartTime < newTempEndTime && newTempEndTime < newEndTime) {
      console.log("baddd 2");
      setSelectTimeError(true);
    }
    }
  };

  const selectDateHandler = async (e) => {
    e.preventDefault();
    if (provider == null) {
      toast.error("Please select a provider");
      return;
    }
    setLoading(true);
    await getAvailableTime();
    setselectTime(true);
    setLoading(false);
    isAvailable(availabletime[0]);
  };

  const isAvailable = (item) => {
    // console.log('ss', item)
    const data = unavailableTime.filter((time) =>
      time["StartDate"]["_text"]?.includes(item)
    );
    if (data.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  function replaceString(string, index) {
    var str = string;
    const temp = parseInt(str[1]);
    str = setCharAt(str, index, temp + 1);
    return str;
  }

  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    if (str[1] == 9) {
      return chr + str.substring(index + 1);
    }
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  function parseTo24Hours(string) {
    var str = string;
    if (str[str.length - 1] == "PM" && str[1].split(":")[0] != 12) {
      const starthourStr = str[1].split(":");
      const temp = parseInt(starthourStr[0]);
      str = parseTo24HoursReplace(str[1], 0, temp + 12);
      return str;
    }
    return str[1]
  }

  function parseTo24HoursReplace(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  const availabletime = [
    " 08:00:00",
    " 09:00:00",
    " 10:00:00",
    " 11:00:00",
    " 12:00:00",
    " 13:00:00",
    " 14:00:00",
    " 15:00:00",
    " 16:00:00",
  ];

  const fetchProviders = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/admin/novum/provider`
    );
    setProviders(data.data);
  };

  const parseDateTime = (dateTime) => {
    const temp = dateTime.split(" ");
    return temp[1];
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
      />
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
              <h1 className="text-xl">Provider</h1>

              <select
                required
                onChange={(e) => {
                  setProvider(e.target.value);
                }}
                id="underline_select"
                class="block py-2.5 px-0 w-full  bg-transparent border-0 border-b-2 border-gray-200 appearance-none :text-gray-400 :border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Select a provider</option>
                {providers.map((item) => (
                  <option value={item.ID["_text"]}>
                    {item.FullName["_text"]}
                  </option>
                ))}
              </select>

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
                {loading ? (
                  <button
                    disabled
                    class="px-4 py-4 font-medium tracking-wide text-white capitalize transition-colors bg-gray-200 rounded-lg cursor-not-allowed"
                  >
                    Check Unavailable Time
                  </button>
                ) : (
                  <button class="px-4 py-4 font-medium tracking-wide text-black  capitalize transition-colors duration-300 transform border-2 border-black rounded-lg ">
                    Check Unavailable Time
                  </button>
                )}
              </div>
            </form>
          )}
          {selectTime && (
            <div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Time</h1>
                <input
                  type="time"
                  onChange={(e) => {
                    selectTimeHandler(e.target.value);
                  }}
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
                {selectTimeError && (
                  <p className="text-red-500">This time is unavailable</p>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={selectTimeHandler1}
                  class="px-4 py-4 mt-2 font-medium tracking-wide text-black  capitalize transition-colors duration-300 transform border-2 border-black rounded-lg "
                >
                  Select time
                </button>
              </div>
              <div className="bg-black mt-4">
                <p className="text-white text-center pt-4 text-2xl">
                  Unavailable Times
                </p>
                <div className="bg-black p-8 my-8 grid grid-cols-3 px-3 py-4 gap-y-10 sm:grid-cols-1 md:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
                  {unavailableTime.map((item) => (
                    <>
                      {isAvailable(item) && (
                        <div class=" py-4 px-2 font-medium tracking-wide text-white capitalize text-center transition-colors duration-300 transform border-2 rounded-lg cursor-not-allowed">
                          {parseDateTime(item.StartDate["_text"])} -{" "}
                          {parseDateTime(item.EndDate["_text"])}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
          {showForm && (
            <form
              onSubmit={(e) => {
                submithandler(e);
              }}
              className="w-full space-y-7 max-w-[65rem] mx-auto "
            >
              <div className="w-full flex flex-col">
                <h1 className="text-xl">First Name</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Last Name</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
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
                <h1 className="text-xl">Phone</h1>
                <input
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                  className="border-b py-2 px-3 white outline-none bg-transparent"
                />
              </div>
              <div className="w-full flex flex-col">
                <h1 className="text-xl">Note</h1>
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
