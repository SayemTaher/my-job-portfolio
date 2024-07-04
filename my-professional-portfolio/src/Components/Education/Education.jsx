import { IoMdSchool } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="mx-auto container max-w-[1170px]">
      <div className="bg-white flex  justify-center items-center  flex-col gap-2 p-4 text-center font-bold text-blue-950">
        <h1 className=" lg:text-3xl  text-2xl   ">Bachelor of Applied Science in ICT</h1>
        <div className="flex mt-5 flex-wrap mb-5 justify-center items-center gap-5">
          <span className="lg:text-xl text-sm bg-purple-100   p-2 text-purple-500">
            Credit Acquired - 120/240
          </span>

          <span className="lg:text-lg text-sm bg-blue-100  p-2 text-blue-500">
            Average Grade - 8.9 / 10
          </span>
          <span className="lg:text-lg text-sm bg-gray-200  p-2 text-gray-700">
            Current Academic Year - 3rd
          </span>
        </div>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - February 2023"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-blue-900 text-sm lg:text-lg">
            Fontys University of Applied Sciences{" "}
            <sup className="bg-blue-100 text-blue-500 font-bold p-2 rounded-xl">
              Semester 1
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Course-based</h4>
          <p className="text-green-500 bg-green-100 font-bold p-2 w-[200px] text-center">
            ICT & Media Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" February 2023 - September 2023"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-blue-900 text-sm lg:text-lg">
            Fontys University of Applied Sciences{" "}
            <sup className="bg-blue-100 text-blue-500 font-bold  p-2 rounded-xl">
              Semester 2
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Course-based</h4>
          <p className="text-green-500 bg-green-100 font-bold p-2 w-[200px] text-center">
            ICT & Media Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" September 2023 - February 2024"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-blue-900 text-sm lg:text-lg">
            Fontys University of Applied Sciences{" "}
            <sup className="bg-blue-100 text-blue-500 font-bold p-2 rounded-xl">
              Semester 3
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Course-based</h4>
          <p className="text-green-500 bg-green-100 font-bold p-2 w-[200px] text-center">
            ICT & Media Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" February 2024 - September 2024"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title font-semibold text-blue-900 text-sm lg:text-lg">
            Fontys University of Applied Sciences{" "}
            <sup className="bg-blue-100 text-blue-500 font-bold p-2 rounded-xl">
              Semester 4
            </sup>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Research-based</h4>
          <p className="text-green-500 bg-green-100 font-bold p-2 w-[200px] text-center">
            Specialisation in Smart Mobile ( iOS )
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          date="Internship"
          icon={<IoMdSchool />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Education;
