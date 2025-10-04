import { Link } from "react-router-dom";
import Roles from "./Roles";
import { PHONE_NUMBER } from "../../constants";

const rolesData = [
  {
    id: 1,
    title: "Paid Advertising (Meta, TikTok, Google, Snapchat Ads)",
    description:
      "I manage and optimize ad campaigns across multiple platforms, focusing on audience targeting, A/B testing, and scaling profitable campaigns.",
  },
  {
    id: 2,
    title: "Performance Strategy & Media Planning",
    description:
      "I create tailored strategies and media plans that align with your business goals, budgets, and KPIs to ensure maximum impact.",
  },
  {
    id: 3,
    title: "Tracking & Analytics",
    description:
      "From setting up pixels and server tracking to analyzing campaign data, I ensure accurate tracking and provide actionable insights to improve performance.",
  },
  {
    id: 4,
    title: "Conversion Rate Optimization (CRO)",
    description:
      "I optimize landing pages, ad creatives, and user journeys to improve conversion rates and reduce customer acquisition costs.",
  },
];



const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center dark:text-picto-primary">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-500 mb-4">
            I specialize in creating data-driven marketing campaigns that drive
            measurable growth. From strategy to execution, I help businesses
            scale with performance-focused advertising.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-500">
            My approach combines creativity with analytics to deliver campaigns
            that are not only engaging but also deliver strong ROI and
            sustainable results.
          </p>
        </div>

        <Link
          to={`https://wa.me/${PHONE_NUMBER}?text=Hello Can i schedule a free audit consultation?`}
          target="_blank"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </Link>
      </div>
      <div className="">
        {rolesData.map((role) => (
          <Roles role={role} key={role?.id} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
