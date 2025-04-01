import { FaPlus } from "react-icons/fa";
import styles from "./IndividualPrice.module.css";
function IndividualPrice() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>Hair Wash</h3>
      </div>
      <div className={styles.pricesContainer}>
        <p>Small Dogs</p>
        <div className={styles.price}>
          <FaPlus />
          <span>$30</span>
        </div>
        <p>Medium Dogs</p>
        <div className={styles.price}>
          <FaPlus />
          <span>$35</span>
        </div>
        <p>Large Dogs</p>
        <div className={styles.price}>
          <FaPlus />
          <span>$40</span>
        </div>
      </div>
    </div>
  );
}
export default IndividualPrice;
