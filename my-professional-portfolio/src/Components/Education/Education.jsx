import { IoMdSchool } from "react-icons/io";
import {  MdDesignServices} from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="mx-auto container max-w-[1170px]">
      <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm flex justify-center items-center flex-col gap-2 p-4 text-center font-bold rounded-2xl border border-blue-500/20">
        <h1 className="lg:text-3xl text-2xl text-white">Bachelor of Applied Science in ICT</h1>
        <div className="flex mt-5 flex-wrap mb-5 justify-center items-center gap-5">
          <span className="lg:text-xl text-sm bg-blue-500/20 px-4 py-2 text-blue-300 border border-blue-400/30 rounded-full">
            Credit Acquired - 180 / 240
          </span>

          <span className="lg:text-lg text-sm bg-cyan-500/20 px-4 py-2 text-cyan-300 border border-cyan-400/30 rounded-full">
            Average Grade - 8.9 / 10
          </span>
          <span className="lg:text-lg text-sm bg-blue-500/20 px-4 py-2 text-blue-200 border border-blue-400/30 rounded-full">
            Current Academic Year - 4th
          </span>
        </div>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - February 2023"
          iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Fontys UAS{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 1
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Course-based</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-cyan-400/30">
            ICT & Media Design
          </p>
          <p className="text-green-300 bg-green-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-green-400/30 mt-2">
            Grade: 7.9/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2023 - September 2023"
          iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Fontys UAS{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 2
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Course-based</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-cyan-400/30">
            ICT & Media Design
          </p>
          <p className="text-green-300 bg-green-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-green-400/30 mt-2">
            Grade: 8.9/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023 - February 2024"
          iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Fontys UAS{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 3
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Course-based</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-cyan-400/30">
            ICT & Media Design
          </p>
          <p className="text-green-300 bg-green-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-green-400/30 mt-2">
            Grade: 8.9/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2024 - September 2024"
          iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Fontys UAS{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 4
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Research-based</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 max-w-[300px] text-center rounded-full border border-cyan-400/30">
            Specialisation in Smart Mobile ( iOS )
          </p>
          <p className="text-green-300 bg-green-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-green-400/30 mt-2">
            Grade: 8.9/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2024 - February 2025"
          iconStyle={{ background: "rgb(34, 211, 238)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Bosch Security Systems{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 5
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Internship</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-cyan-400/30">
            Web Development
          </p>
          <p className="text-green-300 bg-green-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-green-400/30 mt-2">
            Grade: 10/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2025 - September 2025"
          iconStyle={{ background: "rgb(139, 92, 246)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<MdDesignServices />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Fontys UAS{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 6
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Minor</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 max-w-[300px] text-center rounded-full border border-cyan-400/30">
            Digital Experience Design
          </p>
          <p className="text-green-300 bg-green-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-green-400/30 mt-2">
            Grade: 8.9/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2025 - February 2026"
          iconStyle={{ background: "rgb(236, 72, 153)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<MdDesignServices />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Fontys UAS{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 7
            </sup>
            <span className="ml-2 text-yellow-300 text-xs lg:text-sm">(Current)</span>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Course-based</h4>
          <p className="text-cyan-300 bg-cyan-500/20 font-bold p-2 w-[300px] text-center rounded-full border border-cyan-400/30">
            Human Centered Design
          </p>
          <p className="text-gray-300 bg-gray-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-gray-400/30 mt-2">
            Grade: N/A
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2026 - September 2026"
          iconStyle={{ background: "rgb(251, 191, 36)", color: "#fff" }}
          contentStyle={{
            background: "linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 58, 138), rgb(49, 46, 129))",
            color: "#fff",
            borderRadius: "0.5rem",
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-white text-sm lg:text-lg">
            Graduation Semester{" "}
            <sup className="bg-blue-500/20 text-blue-300 font-bold p-2 rounded-xl border border-blue-400/30">
              Semester 8
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-200">Internship</h4>
          <p className="text-white bg-cyan-500/20 font-bold p-2 w-[200px] text-center rounded-full border border-cyan-400/30">
            Final Internship
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
