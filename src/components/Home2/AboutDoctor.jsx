import therapy from "../../assets/images/home/theraphy.jpg"
import Doctorman from "../../assets/images/home/doctorman.png"
import medication from "../../assets/images/home/medication.jpg"
import group from "../../assets/images/home/group.jpg"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Servicelist from "./servicelist";

const MyProjects = () => {
  return (
    <div>
                   
 
 
<div class="flex  ">
    <div
        class="w-full md:h-[35rem] bg-[url('https://medicare.bold-themes.com/vet/wp-content/uploads/sites/5/2015/11/bg-office.jpg')] bg-cover bg-center">
        <div class="w-full h-full md:flex  justify-center items-center bg-white/100 backdrop-brightness-100 ">
                      <div className="p-8">
                        <div className="flex justify-start">
                        <div className="md:flex justify-between items-center max-w-[69rem]">
                        <div className="md:w-3/5">
                        <p className="text-[49px] font-medum mb-5">About <span className="text-customblue font-bold">DR.Ojo</span></p>
                          <p className="">
                          Dr. Yeside Ojo, DNP, FNP-C, PMHNP-BC is a board-certified Psychiatric Nurse Practitioner whose aim is
to provide client-centered care and treatments based on evidence-based guidelines by diagnosing
according to the latest edition of the DSM and listening to the client’s concerns and symptoms.
Effectively manage the clients’ symptoms by initiating, adjusting, and continuously monitoring
medication administration. Improve the clients’ self-awareness and knowledge regarding mental health
illnesses and medications by educating them on the proper use, drug interactions, and adverse drug
reactions of medications and the course and prognosis of mental illnesses.
Collaborate with other psychiatrists, medical case managers, therapists, nurses, and medical assistants
to develop treatment plans. Perform mental health evaluations for adult patients with a wide range of
psychiatric disorders and substance abuse disorders. Treatment of patients with addiction or unhealthy
substance use. Proficient in the management of acute, chronic, mental health disorders across the
lifespan including but not limited to Depression, Anxiety, Bipolar disorder, ADHD, Schizoaffective

disorders, Schizophrenia, Neurocognitive disorders, Personality disorders, Opioid use disorder, and
Alcohol use disorder. A proven ability to work well as part of a team.
                          </p>
                          </div>
                          <div className="md:w-2/5">
                            <img
                              src={Doctorman}
                              className="w-[full] h-[35rem]"
                            />
                          </div>
                          </div>
                        </div>
                      </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default MyProjects;
