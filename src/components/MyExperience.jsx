import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Experience } from "../data";

const MyExperience = () => {
  return (
    <section className="w-full rounded-xl py-10 flex justify-center flex-col items-center" id="experience">
      <section className="bg-black-100 rounded-[20px]">
        <div className="bg-tertiary rounded-2xl sm:px-16 px-2 sm:py-16 min-h-[100px]">
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            {" "}
            Experiences{" "}
          </h1>
        </div>
      </section>
      <VerticalTimeline>
        {Experience &&
          Experience.map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(228, 165, 255)",
                opacity: "100",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={n.date}
              dateClassName="text-white"
              iconStyle={{
                background: "rgb(179,128,220)",
                color: "#fff",
              }}
              icon={<n.iconsSrc />}
            >
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {n.location}
              </h4>
              <p>{n.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  );
};

export default MyExperience;
