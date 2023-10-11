import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,👋 Krishna here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="https://www.pockettactics.com/wp-content/sites/pockettactics/2023/05/genshin-impact-raiden.jpg"
            alt="raiden"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            What are Genshin Impact Raiden’s abilities?
          </h1>
          <p className={styles.postDesc}>
            Genshin Impact’s Raiden Shogun is the electro archon of Inazuma,
            and, as a five-star electro character, she’s just as powerful as
            you’d hope the holder of that title would be. A key player in one of
            the most powerful Spiral Abyss team comps to date, our Genshin
            Impact Raiden build is here to help you make the most of her amazing
            damage output, electro application, and battery capabilities makes
            her a valuable asset to any player’s roster.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
