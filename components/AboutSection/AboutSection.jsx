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
      <div className={styles.aboutPara}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          molestiae illo ipsa amet fugiat accusamus rem. Nesciunt, quasi
          reiciendis incidunt modi nulla voluptates dicta. Recusandae facilis
          quod expedita esse repudiandae dolor quia corrupti veritatis omnis
          error excepturi repellendus iure non quibusdam consequatur natus
          facere sit voluptates, veniam porro aut impedit! Corrupti, atque
          earum! Harum non recusandae ipsa voluptatum repellat sit ab
          consectetur voluptate maiores. Voluptas, placeat? Vero quasi nemo sunt
          ratione vitae illum quae cupiditate sit non deleniti eos impedit
          consequuntur unde mollitia eius iure dolorem, velit expedita modi.
          Mollitia et deleniti sint suscipit saepe natus ullam aliquam ipsam
          enim dolore at excepturi quaerat alias necessitatibus velit, quae illo
          est. Sequi laborum fugit accusantium eaque saepe hic, id repellat
          dignissimos rerum veniam facere? Sunt sed, praesentium minima error,
          alias asperiores quos impedit ipsa earum eaque voluptatum nihil
          reprehenderit quidem veniam.
        </p>
      </div>
    </main>
  );
}

export default AboutSection;
