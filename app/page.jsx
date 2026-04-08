import Section from "@/components/Section";
import React from "react";

const Home = () => {
  return (
    <div className="pb-4">
      <div className="text-justify text-lg mt-6 md:mt-0">
        <p className="font-medium text-lg">Hello!👋</p>
        <p className="mt-3">
          This is Ahmed Saad Tanim. I am a Game Developer currently working at{" "}
          <a
            href="https://www.torpedolabs.com"
            className="text-[#52adc8] font-semibold"
            target="_blank"
          >
            TorpedoLabs, INC
          </a>{". "}
          {/* Currently, I am working as a Part-Time Lecturer at the Department of
          CSE,{" "}
          <a
            href="https://new.seu.edu.bd"
            className="text-[#52adc8] font-semibold"
            target="_blank"
          >
            Southeast University
          </a> */}
          I graduated from{" "}
          <a
            href="https://www.aust.edu"
            className="text-[#52adc8] font-semibold"
            target="_blank"
          >
            Ahsanullah University of Science and Technology
          </a>{" "}
          with a Bachelor&apos;s degree in Computer Science and Engineering. I
          am a passionate programmer with expertise in C, C#, C++, Java and Python. I
          have hands-on experience in building intelligent interactive systems and have completed various
          projects. I am very much interested in the field of XR and reinforcement learning.
        </p>
        <p className="mt-5">
          From the beginning of my university life, I have had a strong passion
          for programming, participating in numerous programming competitions
          and occasionally building game projects. In my final year,
          I published my first research paper, kickstarting my
          journey in research. Furthermore, I have built a reinforcement learning-based Autonomous Driving Simulation.
          I have also successfully implemented these technologies to various real-life projects.
        </p>
      </div>
      <div className="mt-8">
        <div className="mb-4">
          <h2 className="font-semibold text-2xl text-gray-600">
            Recent News ⚡
          </h2>
          <div className="mt-0.5 h-[1.5px] w-full bg-gray-300/40" />
        </div>
        <div>
          <ul className="list-disc list-outside pl-5">
            <li className="text-md">
              <div className="inline">
                <span className="text-red-700">April 04, 2026:</span>{" "}
                {/* <a
                  href=""
                  className="text-[#52adc8]"
                  target="_blank"
                > */}
                  Achieved overall Band 8.0 in IELTS Academic
                {/* </a>{" "} */}
                {/* published in{" "}
                <a
                  href="https://www.techscience.com/"
                  className="text-[#52adc8]"
                  target="_blank"
                >
                  Tech Science Press
                </a> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

