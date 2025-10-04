import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000  ${ style && style}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 ${hover ? "bg-[#d8b5f980]" : "bg-[#EDD8FF80]"} text-center center rounded-md`}
      >
        <div className="max-sm:p-2 sm:w-8 sm:h-8">
          <img
          className=""
            src={data?.icon}
            alt={data?.icon}
          />
          
        </div>
      </div>
      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className="font-semibold sm:text-xl dark:text-picto-primary">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-3 text-[13px] sm:text-[16px] text-[#697482]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
