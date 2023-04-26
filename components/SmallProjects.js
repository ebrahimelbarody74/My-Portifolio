import React from "react";
import styles from "../styles/SmallProjects.module.css";
import Slider from "react-slick";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { small } from "../data";
import { Link, Tooltip } from "@mui/material";

function SmallProjects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "15px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "15px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,

        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.smallProjects}>
        <div className="title">
          <h1>Small Projects</h1>
        </div>
        <div style={{ width: "96%" }}>
          <Slider {...settings}>
            {small.map((item, index) => (
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
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SmallProjects;
