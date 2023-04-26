import React from "react";
import styles from "../styles/Projects.module.css";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Flip } from "react-reveal";

import Link from "next/link";
import { Tooltip } from "@mui/material";
import { data } from "../data";
function Projects() {
  console.log(data);
  return (
    <div className={styles.projects}>
      <div className="title">
        <h1>My Projects</h1>
      </div>
      <div className={styles.projectsBox}>
        {data.map((item, index) =>
          index % 2 === 0 ? (
            <Fade right duration={1000}>
              <div className={styles.projectItem} key={index}>
                <div className={styles.projectLeft}>
                  {item.skillImg?.map((skill) => (
                    <Tooltip arrow placement="right" title={skill.title}>
                      <img src={skill.src} />
                    </Tooltip>
                  ))}
                </div>
                <div className={styles.projectRight}>
                  <div className={styles.projectTop}>
                    <a href={item.link} target="_blanck">
                      <img src={item.img} />
                    </a>
                    <span>{item.name}</span>
                  </div>
                  <div className={styles.projectBottom}>
                    {item.srcicons?.map((Icon) => (
                      <Tooltip arrow placement="bottom" title={`${Icon.title}`}>
                        <Link href="#">
                          <Icon.Icon />
                        </Link>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          ) : (
            <Fade left duration={1000}>
              <div className={styles.projectItem} key={index}>
                <div className={styles.projectLeft}>
                  {item.skillImg?.map((skill) => (
                    <Tooltip arrow placement="right" title={skill.title}>
                      <img src={skill.src} />
                    </Tooltip>
                  ))}
                </div>
                <div className={styles.projectRight}>
                  <div className={styles.projectTop}>
                    <a href={item.link} target="_blanck">
                      <img src={item.img} />
                    </a>
                    <span>{item.name}</span>
                  </div>
                  <div className={styles.projectBottom}>
                    {item.srcicons?.map((Icon) => (
                      <Tooltip arrow placement="bottom" title={`${Icon.title}`}>
                        <Link href="#">
                          <Icon.Icon />
                        </Link>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
