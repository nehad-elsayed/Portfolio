import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Marketing Challenge? Let’s turn clicks into customers.!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I design and manage performance marketing campaigns that don’t just
          bring traffic — they bring results. Let’s connect and create campaigns
          that maximize ROI and grow your business fast.
        </p>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </ScrollLink>
      </div>
    </div>
  );
};

export default WorkTogether;
