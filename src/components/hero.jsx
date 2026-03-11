import { useSelector } from "react-redux";
import profilePhoto from "../assets/image 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Hero() {
  const data = useSelector((state) => state);

  return (
    <div className="m-auto mt-5 w-4/6 flex justify-between">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-row items-center">
          <div className="w-25 h-[1px] bg-[#4338CA] dark:bg-[#B7AAFF] "></div>
          <span className="ml-[8px] text-[#4338CA] text-xl dark:text-[#B7AAFF] ">
            {data.personal.name}
          </span>
        </div>
        <div className="text-7xl font-bold py-[40px] text-[#1F2937] dark:text-[#AEBCCF]">
          {data.personal.title}
        </div>
        <div className="text-[#6B7280] pb-[30px] dark:text-[#FFFFFF]">
          {data.personal.bio}
        </div>
        <div className="flex flex-row gap-3 mt-5">
          <a
            href={data.personal.links.personalBlog}
            className="flex flex-row items-center bg-[#4338CA] px-8 py-3.5 text-white rounded-md font-medium dark:bg-[#E1E1FF] dark:text-black"
          >
            {data.navCta.label}
          </a>

          <a
            href={data.personal.links.github}
            className="flex flex-row items-center text-[#4338CA] pr-6 border-1 rounded-md font-medium gap-1 dark:bg-[#383838] dark:text-[#BAB2E7] dark:border-1-[#E1E1FF]"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            Github
          </a>

          <a
            href={data.personal.links.linkedin}
            className="flex flex-row items-center text-[#4338CA] pr-6 border-1 rounded-md font-medium gap-1 dark:bg-[#383838] dark:text-[#BAB2E7] dark:border-1-[#E1E1FF]"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            Linkedin
          </a>
        </div>
      </div>
      <div className="py-[28px]">
        <img src={profilePhoto} alt="" />
      </div>
    </div>
  );
}
