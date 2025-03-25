import AboutSection from "@/components/AboutSection/AboutSection";

import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Link href="/bookings">Make a Booking</Link>
      </div>
      <AboutSection />
    </div>
  );
}
