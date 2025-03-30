import styles from "@/components/IndividualService/IndividualService.module.css";
import { TiTickOutline } from "react-icons/ti";

import Image from "next/image";
function IndividualService({ title, url, icon, description }) {
  return (
    <div className={styles.container}>
      {/* <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${url})` }}
      ></div> */}
      <div className={styles.imageContainer}>
        <Image src={url} alt="Service" fill style={{ objectFit: "cover" }} />
        <div className={styles.overlay}></div>
        <div className={styles.serviceTitle}>
          <h3 style={title.length > 10 ? { fontSize: 34 } : { fontSize: 40 }}>
            {title}
          </h3>
          <div className={styles.icon}>{icon}</div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        {description &&
          description.map((d) => {
            return (
              <p className={styles.description} key={d}>
                <TiTickOutline />
                {d}
              </p>
            );
          })}
      </div>
    </div>
  );
}
export default IndividualService;
