import styles from "./PricesSection.module.css";
import IndividualPrice from "../IndividualPrice/IndividualPrice";
function PricesSection() {
  return (
    <div>
      <h3 className={styles.heading}>Prices</h3>
      <div className={styles.individualPriceContainer}>
        <IndividualPrice />
        <IndividualPrice />
        <IndividualPrice />
      </div>
    </div>
  );
}

export default PricesSection;
