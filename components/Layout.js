import React, { useState } from "react";
import styles from "../styles/Layout.module.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import SmallProjects from "./SmallProjects";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarWrapper from "./SidebarWrapper";
import CloseIcon from "@mui/icons-material/Close";
function Layout(props) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className={styles.df}>
        {/* {props.children} */}
        <SidebarWrapper menu={menu} />
        <div className={styles.homeContainer}>
          {menu ? (
            <CloseIcon
              className={styles.menu}
              onClick={() => {
                setMenu(!menu);
                console.log(menu);
              }}
            />
          ) : (
            <MenuIcon
              className={styles.menu}
              onClick={() => {
                setMenu(!menu);
                console.log(menu);
              }}
            />
          )}

          <About />
          <Skills />
          <Projects />
          {/* <SmallProjects /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
