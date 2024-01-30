import React from "react";
import { skill } from "../data";

const MySkills = () => {
  return (
    <div>
      <section
        className="mt-12 bg-black-100 flex flex-col items-center justify-center w-full rounded-[20px]"
        id="skills"
      >
        <div className="bg-tertiary rounded-2xl sm:px-8 px-6 sm:py-16 py-10 min-h-[300px]">
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            {" "}
            Skills{" "}
          </h1>
        </div>
      </section>
      <section className="-mt-20 sm:-mt-10 pb-14 sm:px-8  flex flex-wrap gap-5 justify-center">
        {skill &&
          skill.map((n) => (
            <div
              key={n.id}
              className=" border-slate-700 border-2 px-4 py-4 rounded-2xl xs:p-2"
            >
              <p className=" font-black text-[#b180c5] text-[24px] bg-tertiary rounded-2xl ">
                {n.name}
              </p>

            </div>
          ))}
      </section>
    </div>
  );
};
export default MySkills;
