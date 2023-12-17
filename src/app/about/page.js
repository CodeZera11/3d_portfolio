"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

import { skills, experiences } from "../../constants";
import CTA from "../../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          CodeZera
        </span>
      </h1>

      <div className="text-slate-500 mt-5 flex flex-col gap-3">
        <p>
          Full Stack Developer based in India, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, i) => (
            <div key={i} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  width={1000}
                  height={1000}
                  quality={1000}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="text-slate-500 mt-5 flex flex-col gap-3">
          <p>
            I&apos;ve worked with all sorts of companies, leveling up my skills
            and teaming up with smart people. Here&apos;s the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                visible
                key={index}
                date={experience.date}
                icon={
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={experience.icon}
                      alt={experience.company_name}
                      width={1000}
                      height={1000}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, i) => {
                    return (
                      <li
                        key={i}
                        className="text-black/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
