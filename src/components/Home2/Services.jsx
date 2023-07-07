import therapy from "../../assets/images/home/theraphy.jpg"
import medication from "../../assets/images/home/medication.jpg"
import group from "../../assets/images/home/group.jpg"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Servicelist from "./servicelist";
const MyProjects = () => {
  return (
    <div id="services">
                   
 
 
<div
class="flex  ">
    <div
        class="w-full min-h-[59rem] bg-[url('https://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/bgn-general-hospital-01.jpg')] bg-cover bg-center">
        <div class="w-full h-full flex  justify-center items-center 
             bg-customblue/90 backdrop-brightness-100">
                      <AnimatePresence exitBeforeEnter>
        <div className="w-full h-full lg:flex items-center justify-center">
          <div className="w-full min-h-[59rem] max-w-[95rem] relative lg:flex  py-10 pt-10  text-black">
            <div className="w-full h-full  ">
              <div className="w-full ">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="large-texts  text-center text-[48px]"
                >
                  <span className=" font-semibold  text-[60px] text-white">
                    Our Services
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
                src="https://plus.unsplash.com/premium_photo-1664378617417-f317789ffc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
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
    </div>
</div>
    </div>
  );
};

export default MyProjects;
