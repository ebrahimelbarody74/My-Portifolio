import React, { useEffect } from "react";
import styles from "../styles/SidebarWrapper.module.css";
import Link from "next/link";
import Image from "next/image";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Facebook, GitHub, Twitter, WhatsApp } from "@mui/icons-material";
function SidebarWrapper({ menu }) {
  useEffect(() => {
    console.log(menu);
  });
  return (
    <div
      className={menu ? `${styles.sidebarWrapper} ${styles.no}` : styles.sidebarWrapper}
      // style={
      //   menu
      //     ? { transform: "translate(1px) !important" }
      //     : { transform: "translate(-150px) !important" }
      // }
    >
      <div className="sidebar">
        <div className={styles.sideImg}>
          <Link href="#">
            <img
              className={styles.profileImg}
              src="/1.jpg"
              width="70"
              height="70"
              alt="Picture of the author"
            />
          </Link>
        </div>
        <ul className={styles.about}>
          <li>
            <Link href="#">
              <FileCopyIcon />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <BusinessCenterIcon />
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <PhoneIcon />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <ul className={styles.follow}>
          <span>Follow me</span>
          <li>
            <Link href="#">
              <GitHub />
              <GitHub />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LinkedInIcon />
              <LinkedInIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <WhatsApp />
              <WhatsApp />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Facebook />
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Twitter />
              <Twitter />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarWrapper;
