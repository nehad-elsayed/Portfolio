import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { Link } from "react-router-dom";

// Information summary data
const phoneNumber = "+201097476242";
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1.5 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "5",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-2xl md:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap text-lg md:text-[32px] shrink-0 inline-block w-full">
              Abdelrahman Elsayed
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            <span className="bg-highlight text-nowrap">
              Performance Marketer & Media Buyer
            </span>{" "}
            with over 1.5 year of consistent experience (and earlier hands-on
            work since 2016), combining both freelance and in-agency experience.
            Specialized in running high-converting paid campaigns across Meta,
            TikTok, Snapchat, Google, and X for the Egyptian and Gulf markets.
            Proficient in tracking setup (GTM, GA4, Meta social media pixels,
            Google tracking), Conversion Rate Optimization (CRO), and
            full-funnel strategy planning. Worked on diverse verticals including
            online courses, food & beverage, financial services, healthcare,
            automotive, fashion, real estate, Bus rental, and dental clinics –
            achieving measurable performance results and business growth.
          </p>
          <p className="text-center lg:text-start">
            <Link
              to={`https://wa.me/${phoneNumber}?text=Hello Can i schedule a free audit consultation?`}
              className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
              target="_blank"
            >
              Say Hello!
            </Link>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
