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
      <div className="flex flex-col justify-between items-center gap-6">
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126"></div>

        <div className="">
          <h2 className="text-sm text-center lg:text-[30px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            I Scale E-commerce Brands & Lead Generation Businesses Through
            Data-Driven Performance Marketing
          </h2>
          <div className="text-base md:text-[20px] lg:text-[24px] font-normal text-center text-gray-600">
            <p className="text-center w-full">
              Performance Marketer with 2.5+ years of agency and freelance
              experience Since 2016, managing campaigns across Meta, Google,
              TikTok, Snapchat, and X for Egyptian and GCC markets.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      <div className="px-6 relative -bottom-10 md:-bottom-10 w-fit mx-auto right-0 py-3 z-50 text-center bg-white rounded-[10px] center shadow-2xl drop-shadow-xl shadow-white">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Profile;
