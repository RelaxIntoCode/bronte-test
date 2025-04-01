import AboutSection from "@/components/AboutSection/AboutSection";

import styles from "./page.module.css";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Footer from "@/components/Footer/Footer";
import PricesSection from "@/components/PricesSection/PricesSection";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Link href="/bookings">Make a Booking</Link>
      </div>
      <AboutSection />
      <ServicesSection />
      <PricesSection />
      <Footer />
    </div>
  );
}
