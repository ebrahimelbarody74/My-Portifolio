import React from "react";
import styles from "../styles/Skills.module.css";
import Image from "next/image";
import { Zoom } from "react-reveal";
import Link from "next/link";
function Skills() {
  return (
    <div className={styles.skills}>
      <div className="title">
        <h1>My Skills</h1>
      </div>
      <div className={styles.skillRow}>
        <div className={styles.skillBox}>
          <div
            className={styles.skillItem}
            style={{ "--i": "12", "--clr": "#556d91" }}
          >
            <Link href="#">
              <Image src="/next.png" width={30} height={30} />
              <span>Next</span>
            </Link>
          </div>
          {/* <Zoom left duration={1000}> */}
          <div
            className={styles.skillItem}
            style={{ "--i": "11", "--clr": "red" }}
          >
            <Link href="#">
              <Image src="/html5.svg" width={30} height={30} />
              <span>HTML</span>
            </Link>
          </div>
          {/* </Zoom> */}
          <div
            className={styles.skillItem}
            style={{ "--i": "10", "--clr": "#1877f2" }}
          >
            <Link href="#">
              <Image src="/Material.png" width={30} height={30} />
              <span>Material</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "9", "--clr": "#1877f2" }}
          >
            <Link href="#">
              <Image src="/react.svg" width={30} height={30} />
              <span>React</span>
            </Link>
          </div>
        </div>
        <div className={styles.skillBox}>
          <div
            className={styles.skillItem}
            style={{ "--i": "8", "--clr": "#1877f2" }}
          >
            <Link href="#">
              <Image src="/redux.svg" width={30} height={30} />
              <span>Redux</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "7", "--clr": "red" }}
          >
            <Link href="#">
              <Image src="/javascript.svg" width={30} height={30} />
              <span>Javascript</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "6", "--clr": "#c32aa3" }}
          >
            <Link href="#">
              <Image src="/bootstrap.svg" width={30} height={30} />
              <span>Bootstrap5</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "5", "--clr": "#ffc455" }}
          >
            <Link href="#">
              <Image src="/sass.svg" width={30} height={30} />
              <span>Sass</span>
            </Link>
          </div>
        </div>
        <div className={styles.skillBox}>
          <div
            className={styles.skillItem}
            style={{ "--i": "4", "--clr": "#1877f2" }}
          >
            <Link href="#">
              <Image src="/css.svg" width={30} height={30} />
              <span>Css</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "3", "--clr": "#25d366" }}
          >
            <Link href="#">
              <Image src="/mongodb.png" width={30} height={30} />
              <span>MongoDB</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "2", "--clr": "#556d91" }}
          >
            <Link href="#">
              <Image src="/icons8-php-logo-50.png" width={30} height={30} />
              <span>PHP</span>
            </Link>
          </div>
          <div
            className={styles.skillItem}
            style={{ "--i": "1", "--clr": "#25d366" }}
          >
            <Link href="#">
              <Image src="/node.png" width={30} height={30} />
              <span>Nodejs</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
