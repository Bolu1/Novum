import appointment from "../../assets/images/home/appointment.jpg";
import React from "react";
const MyProjects = () => {
  return (
    <div id="services">
      <div class="flex  ">
        <div class="w-full min-h-[29rem] bg-[url('https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center">
          <div
            class="w-full h-full flex  justify-center items-center 
             bg-black/80 backdrop-brightness-100"
          >
            <p className="text-[4rem] font-bold text-white ">
              Appointment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
