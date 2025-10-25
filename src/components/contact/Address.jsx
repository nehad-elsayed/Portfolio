import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const addressData = [
  {
    id: "1",
    icon: faLocationDot,
    title: "Address",
    description: "Mansoura, 35511",
  },
  {
    id: "2",
    icon: faEnvelope,
    title: "My Email",
    description: "Abdelrahmanelsied7@gmail.com",
  },
  {
    id: "3",
    icon: faPhone,
    title: "Call Me Now",
    description: "+201028222116",
  },
];

const Address = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {addressData.map((item) => (
        <div
          key={item.id}
          className="w-full p-3 md:p-3.75 lg:p-6 flex rounded-[10px] bg-white hover-scale-[0.5] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200"
        >
          <div className="h-10 md:h-12 aspect-square bg-[#EDD8FF80] center rounded-[4px] flex-shrink-0">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-lg md:text-xl text-picto-primary"
            />
          </div>
          <div className="ms-3.25 flex-1">
            <p className="text-[12px] md:text-[14px] text-[#424E60] font-normal">
              {item.title}:
            </p>

            {item.title.toLowerCase().includes("email") ? (
              <a
                href={`mailto:${item.description}`}
                className="text-[14px] md:text-[16px] text-[#132238] font-medium hover:text-picto-primary transition-colors duration-300"
                target="_blank"
              >
                {item.description}
              </a>
            ) : item.title.toLowerCase().includes("phone") ||
              item.title.toLowerCase().includes("call") ? (
              <a
                href={`tel:${item.description}`}
                className="text-[14px] md:text-[16px] text-[#132238] font-medium hover:text-picto-primary transition-colors duration-300"
                target="_blank"
              >
                {item.description}
              </a>
            ) : item.title.toLowerCase().includes("address") ? (
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  item.description
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] md:text-[16px] text-[#132238] font-medium hover:text-picto-primary transition-colors duration-300"
              >
                {item.description}
              </a>
            ) : (
              <p className="text-[14px] md:text-[16px] text-[#132238] font-medium">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;
