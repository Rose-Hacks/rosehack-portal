import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import dynamic from "next/dynamic";

const Saturday = dynamic<{}>(
  () => import("./Schedule/Days").then((module) => module.Saturday),
  { ssr: false }
);

const Sunday = dynamic<{}>(
  () => import("./Schedule/Days").then((module) => module.Sunday),
  { ssr: false }
);

const Schedule = ({ pixels }: { pixels: boolean }) => {
  const [day, setDay] = useState("saturday");

  return (
    <section className="flex flex-col w-full bg-gradient-to-b from-schedule-top to-schedule-bottom items-center h-full">
      <div className="flex flex-row items-center justify-center p-4">
        <FaCircle className="text-white" />
        <div className="py-2 px-4 font-pixel text-white text-2xl bg-gradient-to-b from-schedule-purple/50 border-[6px] rounded-xl m-3 drop-shadow-blue/50">
          SCHEDULE
        </div>
        <FaCircle className="text-white" />
      </div>
      <div className="flex flex-col md:flex-row text-center font-lexend text-lg md:text-2xl">
        <div className="flex flex-row">
          <div className="w-7 h-7 bg-rose-purple text-xl  md:text-3xl mx-2 border-2 b border-white/70 rounded-md" />
          <p className="text-white pr-8 md:pr-4 text-base"> Activities </p>
          <div className="w-7 h-7 bg-schedule-blue text-xl md:text-3xl mx-2 border-2 b border-white/70 rounded-md" />
          <p className="text-white pr-4 text-base">Events</p>
        </div>
        <div className="flex flex-row">
          <div className="w-7 h-7 bg-white text-xl  md:text-3xl mx-2 border-2 b border-white/70 rounded-md" />
          <p className="text-white pr-4 text-base"> Workshops </p>
          <div className="w-7 h-7 bg-team-yellow text-xl md:text-3xl mx-2 border-2 b border-white/70 rounded-md" />
          <p className="text-white text-base "> Speakers </p>
        </div>
      </div>

      <div className="text-white rounded-xl bg-gradient-to-b from-schedule-darkpurple/50 to-schedule-bottom/50 border-4 border-white text-center w-10/12 md:w-8/12 h-[36rem] overflow-auto ">
        <div className="text-left h-16 bg-white/50">
          <button
            className={`ml-4 mt-2 ${
              day === "saturday"
                ? "bg-schedule-darkpurple"
                : "bg-schedule-purple hover:bg-schedule-darkpurple"
            }  p-2 rounded-l-xl border-2 font-lexend`}
            onClick={() => setDay("saturday")}
          >
            Saturday
          </button>
          <button
            className={`${
              day === "sunday"
                ? "bg-schedule-darkpurple"
                : "bg-schedule-purple hover:bg-schedule-darkpurple"
            } transition p-2 rounded-r-xl border-y-2 border-r-2 font-lexend`}
            onClick={() => setDay("sunday")}
          >
            Sunday
          </button>
        </div>
        {day === "saturday" ? <Saturday /> : <Sunday />}
      </div>
      <div className="mb-20" />
    </section>
  );
};

export default Schedule;
