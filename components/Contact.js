import React from "react";
import styles from "../styles/Contact.module.css";
import { Email, Phone, Room } from "@mui/icons-material";
function Contact() {
  return (
    <div className={styles.contact}>
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <form>
        <input type="text" placeholder="Frist Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" />
        <button>Submit</button>
      </form>
      <div className={styles.contactList}>
        <div className={styles.contactItem}>
          <Room style={{ color: "#ff5352", fill: "#ff5352" }} />
          <h3>Location</h3>
          <span>Kafer Elshikh , Motobes</span>
        </div>
        <div className={styles.contactItem}>
          <Phone style={{ color: "#00da54", fill: "#00da54" }} />
          <h3>Contact Me</h3>
          <span>+2 010 1909 2115</span>
          <span>+2 015 5116 8505</span>
        </div>
        <div className={styles.contactItem}>
          <Email style={{ color: "#0a58ca", fill: "#0a58ca" }} />
          <h3>Email</h3>
          <span>ebrahimfrontend@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
