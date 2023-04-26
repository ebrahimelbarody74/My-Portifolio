import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <div className={styles.about}>
      <Fade bottom duration={1000}>
        <div className={styles.aboutImg}>
          <img src="giphy.gif" width={700} height={500} />
        </div>
      </Fade>
      <Fade top duration={1000}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutTxt}>
            <span>Hello,</span>
            <span> My name is</span>
          </div>
          <h1 class={styles.name}>Ebrahim El-Barody</h1>
          <div class={styles.aboutDesc}>
            <span>Front End Web Developer</span>
          </div>
          <div class={styles.aboutBtn}>
            <button>
              <Link
                href="cv_2.pdf"
                download=""
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
