import styles from "@/components/IndividualService/IndividualService.module.css";
import Image from "next/image";
function IndividualService({ title, url, icon }) {
  return (
    <div className={styles.container}>
      {/* <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${url})` }}
      ></div> */}
      <div className={styles.imageContainer}>
        <Image src={url} alt="Service" fill style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.descriptionContainer}>
        <h3>{title}</h3>
        <div>{icon}</div>
      </div>
    </div>
  );
}
export default IndividualService;
