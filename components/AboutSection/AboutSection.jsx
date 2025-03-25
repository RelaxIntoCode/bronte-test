import styles from "@/components/AboutSection/AboutSection.module.css";

function AboutSection() {
  return (
    <main className={styles.main}>
      <h1 className={styles.aboutHeading}>About Us</h1>
      <figure className={styles.imageContainer}>
        <div className={styles.img}></div>
        <figcaption className={styles.figCaption}>
          We cater to all Dogs
        </figcaption>
      </figure>
    </main>
  );
}

export default AboutSection;
