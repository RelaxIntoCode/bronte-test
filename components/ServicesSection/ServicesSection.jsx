import styles from "@/components/ServicesSection/ServicesSection.module.css";
import IndividualService from "../IndividualService/IndividualService";
import { FaHandsWash } from "react-icons/fa";
import { IoMdCut } from "react-icons/io";
import { MdDryCleaning } from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";
import { GiFingernail } from "react-icons/gi";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Bath",
      icon: <FaHandsWash />,
      url: "/wash.jpg",
      description: ["Bath", "Blow Dry", "Nails Clipped", "Ears Cleaned"],
    },
    {
      id: 2,
      title: "Haircut",
      icon: <IoMdCut />,
      url: "/grooming.jpg",
      description: ["Bath", "Blow Dry", "Nails Clipped", "Ears Cleaned"],
    },
    {
      id: 3,
      title: "Hygiene Trim",
      icon: <MdDryCleaning />,
      url: "/dry.jpg",
      description: [
        "Tidy Eyes",
        "Tidy Feet",
        "Hygiene Areas",
        "Bath",
        "Blow Dry",
        "Nails Clipped",
        "Ears Cleaned",
      ],
    },
    {
      id: 4,
      title: "Day Care",
      icon: <GiDogHouse />,
      url: "/dog-house.jpg",
      description: [
        "Supervised, Daytime Care",
        "Socialization",
        "Safe Environment",
        "Interaction with other dogs",
      ],
    },
    {
      id: 5,
      title: "Nail Trim Only",
      icon: <GiFingernail />,
      url: "/dog-nail.jpg",
      description: ["Nails Clipped"],
    },
  ];
  return (
    <div>
      <h3 className={styles.servicesHeading}>Services</h3>
      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <IndividualService
            title={service.title}
            key={service.id}
            icon={service.icon}
            url={service.url}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
