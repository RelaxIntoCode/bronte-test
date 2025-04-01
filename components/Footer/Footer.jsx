import styles from "./Footer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h3>Contact Us</h3>
        <div>
          <div className={styles.contactContainer}>
            <FaLocationDot />
            <p>Northern Beaches, Sydney</p>
          </div>
          <div className={styles.contactContainer}>
            <GiRotaryPhone />
            <p>0412 345 678</p>
          </div>
          <div className={styles.contactContainer}>
            <FaRegCopyright />
            <p className={styles.copyright}>
              Copyright. RelaxIntoCode. All Rights Reserved 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
