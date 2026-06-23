import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";

// Information summary data
// const phoneNumber = "+201097476242";
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2.5 Years",
  },
  {
    id: 2,
    title: "Industries Served",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "20+",
  },
];

const Introduction = () => {
  return (
    <div
      className="animated-bg overflow-hidden relative flex flex-col pt-10 lg:pt-31.5 lg:mb-27.5 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col justify-between text-center">
        <div className="pt-13 flex flex-col gap-2 w-full transition-all duration-500">
          <p className="text-2xl text-center md:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="md:text-nowrap text-lg md:text-[32px] shrink-0 inline-block w-full">
              Abdelrahman Elsayed
            </span>
          </p>
          <span className="font-semibold text-center w-fit mx-auto mt-2 text-lg md:text-3xl bg-highlight  md:text-nowrap">
            Performance Marketer & Media Buyer
          </span>
          <div className="text-xs text-center md:text-[24px] my-6 ">
            <p className="font-semibold text-lg md:text-xl">
              {" "}
              Turning Advertising Spend Into Business Growth
            </p>
            <p className="text-sm md:text-lg">
              I help businesses generate qualified leads, increase sales, and
              improve marketing efficiency through data-driven advertising and
              full-funnel optimization.
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg md:text-2xl mb-2">
              My expertise covers:
            </p>
            <ul className="text-sm md:text-xl">
              <li> Paid Advertising</li>
              <li> ROI Focused</li>
              <li> Tracking & Analytics</li>
              <li> Conversion Rate Optimization</li>
              <li>Lead Generation</li>
              <li> E-commerce Growth</li>
            </ul>
          </div>
          <p className="text-center align-middle">
            <ScrollLink
              to="blog"
              smooth={true}
              duration={1000}
              className="btn mt-3 btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
            >
              view case studies
              <FontAwesomeIcon
                icon={faArrowRight}
                size="l"
                style={{ color: "#FFFFFF" }}
                className="ms-3"
              />
            </ScrollLink>
          </p>
        </div>

        <div className="flex justify-center  mt-10">
          <div className="grid grid-cols-3 gap-1 w-fit">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
