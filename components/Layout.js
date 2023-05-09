import React, { useEffect, useState } from "react";
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
import PropagateLoader from "react-spinners/PropagateLoader";
import Welcome from "./Welcome";

function Layout(props) {
  const [menu, setMenu] = useState(false);
  let [loading, setLoading] = useState(true);
  let [welcome, setWelcome] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setWelcome(true);
    }, 2000);
    setTimeout(() => {
      setWelcome(false);
    }, 9000);
  }, []);

  return (
    <>
      {loading ? (
        <PropagateLoader
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          color="rgba(54, 215, 183, 1)"
          cssOverride={{}}
          loading
          size={41}
        />
      ) : welcome ? (
        <Welcome />
      ) : (
        <div className={styles.df}>
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
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
