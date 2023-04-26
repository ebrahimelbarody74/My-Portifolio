import React from "react";
import styles from "../styles/Skills.module.css";
import Image from "next/image";
import { Zoom } from "react-reveal";
function Skills() {
  return (
    <div className={styles.skills}>
      <div className="title">
        <h1>My Skills</h1>
      </div>
      <div className={styles.skillBox}>
        <div className={styles.skillItem}>
          <Image src="/next.png" width={30} height={30} />
          <span>Next</span>
        </div>
        <Zoom left duration={1000}>
          <div className={styles.skillItem}>
            <Image
              src="/html5.svg"
              width={30}
              height={30}
            />
            <span>HTML</span>
          </div>
        </Zoom>
        <div className={styles.skillItem}>
          <Image src="/Material.png" width={30} height={30} />
          <span>Material</span>
        </div>
        <div className={styles.skillItem}>
          <Image src="/react.svg" width={30} height={30} />
          <span>React</span>
        </div>
        <div className={styles.skillItem}>
          <Image src="/redux.svg" width={30} height={30} />
          <span>Redux</span>
        </div>
        <div className={styles.skillItem}>
          <Image src="/javascript.svg" width={30} height={30} />
          <span>Javascript</span>
        </div>
        <div className={styles.skillItem}>
          <Image
            src="/bootstrap.svg"
            width={30}
            height={30}
          />
          <span>Bootstrap5</span>
        </div>
        <div className={styles.skillItem}>
          <Image
            src="/sass.svg"
            width={30}
            height={30}
          />
          <span>Sass</span>
        </div>
        <div className={styles.skillItem}>
          <Image
            src="/css.svg"
            width={30}
            height={30}
          />
          <span>Css</span>
        </div>
        <div className={styles.skillItem}>
          <Image src="/mongodb.png" width={30} height={30} />
          <span>MongoDB</span>
        </div>
        <div className={styles.skillItem}>
          <Image src="/icons8-php-logo-50.png" width={30} height={30} />
          <span>PHP</span>
        </div>
        <div className={styles.skillItem}>
          <Image src="/node.png" width={30} height={30} />
          <span>Nodejs</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
