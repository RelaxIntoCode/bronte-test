import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.hero}>
        <button>Make a Booking</button>
      </div>
    </div>
  );
}
