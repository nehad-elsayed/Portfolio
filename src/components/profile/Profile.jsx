import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { CV_URL } from "../../constants";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          {/* <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div> */}
          {/* Social media section */}
          <div className="relative bottom-9 ">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem] ">
          <h2 className="text-sm lg:text-[30px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            I am Professional Performance Marketer & Media Buyer
          </h2>
          <div className="text-base md:text-[20px] lg:text-[24px] font-normal max-md:text-center text-gray-600">
            <p>
              I plan, execute, and optimize campaigns for businesses,
              specializing in creating data-driven strategies that drive
              measurable growth and ROI. My passion is helping brands scale
              through smart advertising and precision targeting. I focus on
              delivering high-performing campaigns across digital platforms,
              ensuring every ad spend generates maximum impact.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <ScrollLink
              className=" text-white hover:bg-white duration-300 transition-all hover:text-picto-primary btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 bg-picto-primary border-picto-primary text-xs xxs:text-[14px] sm:text-[16px]"
              to="portfolio"
              smooth={true}
              duration={1000}
            >
              My Projects
            </ScrollLink>
            <Link
              className={`btn xxs:btn-lg px-6 border-picto-primary max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white hover:bg-picto-primary hover:text-white duration-300 transition-all text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              to={`${CV_URL}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
