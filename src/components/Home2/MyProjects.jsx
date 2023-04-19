import { AnimatePresence, motion } from "framer-motion";
import therapy from "../../assets/images/home/theraphy.jpg"
import medication from "../../assets/images/home/medication.jpg"
import group from "../../assets/images/home/group.jpg"
import React from "react";
import Servicelist from "./servicelist";

const Services = () => {
  return (
    <div id="services" className=" bg-customblue ">
      {/* mobile */}
      <AnimatePresence exitBeforeEnter>
        <div className="w-full h-[49rem] relative lg:hidden flex py-10 mt-32  text-black">
          <div className="w-full h-full  ">
            <div className="w-full h-40 ">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="large-texts  text-center text-2xl"
              >
                Bringing your <br />{" "}
                <span className=" font-semibold  text-3xl">
                  imaginations to life.
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[20px]  mt-5 text-center"
              >
                I develop products that provide value
              </motion.p>
            </div>
            <div className="w-full h-72  flex justify-center">
              <motion.div
                whileInView={{ height: ["0%", "100%"] }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-[2px] bg-white"
              ></motion.div>
            </div>
            <div className="w-full h-40  mt-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="large-texts text-center  text-[24px]"
              >
                I provide <br />
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[20px] text-center -neue mt-4"
              >
                Strategic driven solutions for the best user experience
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:flex items-center justify-center">
          <div className="w-full h-[59rem] max-w-[69rem] relative lg:flex hidden py-10 pt-10  text-black">
            <div className="w-full h-full  ">
              <div className="w-full h-40 ">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="large-texts  text-center text-[48px]"
                >
                  <span className=" font-semibold  text-[60px] text-white">
                    Our services
                  </span>
                </motion.h1>
                <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[20px] text-white text-center"
              >
                our services include
              </motion.p>
              </div>
              
              <div className="grid grid-cols-1 px-3 py-4 gap-y-10 sm:grid-cols-1 md:grid-cols-2 gap-x-6 lg:grid-cols-3">

                <div className="h-[37rem]">
                <img
                src={therapy} 
                    alt=""
                    className="w-full h-3/5 object-cover "
                  />
                    <div className="bg-white h-2/5 p-3">
                      <p className="font-bold text-lg font-mono mb-3">
                      Outpatient Mental Health Clinic
                      </p>
                      <Servicelist content="Psychiatric Evaluation"/>
                      <Servicelist content="Medication Management"/>
                      <Servicelist content="Individual Therapy"/>
                      <Servicelist content="Family Therapy"/>
                      <Servicelist content="Group Therapy"/>
                    </div>
                </div>

                <div className="h-[37rem]">
                <img
                src={medication} 
                    alt=""
                    className="w-full h-3/5 object-cover "
                  />
                    <div className="bg-white h-2/5 p-3">
                      <p className="font-bold text-lg font-mono mb-3">
                      Intensive Outpatient Treatment Program (Adult)
                      </p>
                      <Servicelist content="Medication Assistance Treatment"/>
                      <Servicelist content="Medication Management"/>
                      <Servicelist content="Buprenorphine (Suboxone)"/>
                      <Servicelist content="Naltrexone (Vivitrol)"/>
                    </div>
                </div>

                <div className="h-[37rem]">
                <img
                src={group} 
                    alt=""
                    className="w-full h-3/5 object-cover "
                  />
                    <div className="bg-white h-2/5 p-3">
                      <p className="font-bold text-lg font-mono mb-3">
                      Psychiatric Rehabilitation Program (Adult &amp; Children)
                      </p>
                      <Servicelist content="Social Skills"/>
                      <Servicelist content="Residential Support"/>
                      <Servicelist content="Vocational Support"/>
                      <Servicelist content="Employment Readiness"/>
                      <Servicelist content="Finance Readiness"/>
                      <Servicelist content="Time Management"/>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Services;
