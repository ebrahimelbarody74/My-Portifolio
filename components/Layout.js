import React, { useState } from "react";
import styles from "../styles/Layout.module.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import SmallProjects from "./SmallProjects";
import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarWrapper from "./SidebarWrapper";

function Layout(props) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className={styles.df}>
        {/* {props.children} */}
        <SidebarWrapper menu={menu} />
        <div className={styles.homeContainer}>
          <MenuIcon
            className={styles.menu}
            onClick={() => {
              setMenu(!menu);
              console.log(menu);
            }}
          />
          <About />
          <Skills />
          <Projects />
          <SmallProjects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
