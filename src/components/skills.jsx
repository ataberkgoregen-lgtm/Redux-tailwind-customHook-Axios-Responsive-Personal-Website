import { useSelector } from "react-redux";

export default function Skills() {
  const data = useSelector((state) => state);

  return (
    <div id="skills" className="flex flex-col m-auto mt-[124px] w-4/6 ">
      <p className="text-5xl font-bold text-[#1F2937] pb-5 dark:text-[#AEBCCF]">
        {data.navItems[0].label}
      </p>
      <div className="flex flex-row justify-between">
        {data.skills.map((item) => {
          return (
            <div className="flex flex-col gap-7">
              <p className="text-[#4338CA] text-[30px] font-medium dark:text-[#B7AAFF]">
                {item.title}
              </p>
              <p className="text-[#6B7280] text-xs w-70 dark:text-[#FFFFFF]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
