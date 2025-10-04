// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import { useState } from "react";

const Projects = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  //*ToDo:: add array of posts data here inside use useCallback

  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl dark:hover:shadow-picto-primary/50 dark:hover:shadow-lg duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium dark:text-gray-300">{data?.category}</p>
        <p className="dark:text-white text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 dark:text-gray-300 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <button
          // to={data?.link}
          className="btn hover:border-picto-primary dark:text-gray-600 hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
          onClick={handleOpen}
        >
          Case Study
          {/* <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span> */}
        </button>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <div className="dark:text-white dark:bg-[#201b2a] ">
            <h2 className="text-sm font-semibold md:text-[24px] text-nowrap">
              {data?.title}
            </h2>
            <hr className="my-2 text-gray-300 dark:text-white" />
            <p className="text-sm md:text-lg  text-gray-600 dark:text-white mb-2">
              {data?.description}
            </p>
            <span className="text-sm font-semibold text-gray-600 dark:text-white"> Category: {data?.category} </span>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
