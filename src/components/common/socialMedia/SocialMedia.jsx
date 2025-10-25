import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/abdelrahman.elsied.71" },
  { icon: faInstagram, link: "https://www.instagram.com/boody_elsied" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/abdelrahman-elsied-777b4a341/" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <Link
      to={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </Link>
  ));
};

export default SocialMedia;
