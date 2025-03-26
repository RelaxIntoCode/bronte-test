import styles from "@/components/ServicesSection/ServicesSection.module.css";
import IndividualService from "../IndividualService/IndividualService";
import { FaHandsWash } from "react-icons/fa";
import { IoMdCut } from "react-icons/io";
import { MdDryCleaning } from "react-icons/md";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Wash",
      icon: <FaHandsWash />,
      url: "/wash.jpg",
    },
    {
      id: 2,
      title: "Haircut",
      icon: <IoMdCut />,
      url: "/grooming.jpg",
    },
    {
      id: 3,
      title: "Hair Dry",
      icon: <MdDryCleaning />,
      url: "/dry.jpg",
    },
  ];
  return (
    <div>
      <h1 className={styles.servicesHeading}>Services</h1>
      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <IndividualService
            title={service.title}
            key={service.id}
            icon={service.icon}
            url={service.url}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
