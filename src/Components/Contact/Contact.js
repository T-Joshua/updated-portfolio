import React from "react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import "./ContactStyles.css";

function Contact() {
  return (
    <div id="contact">
      <section class="contact-me">
        <p>Let Me Get You A Beautiful Website.</p>
        <button>
          <a
            href={"http://www.linkedin.com/in/joshua-taiwo-a78670314"}
            rel="noreferrer"
            target={"_blank"}
          >
            Hire Me
          </a>
        </button>
      </section>

      <footer>
        <p>Taiwo Joshua</p>
        <p>Follow me on my social media account for more updates:...</p>
        <div class="social">
          <a
            href={"https:www.facebook.com/obosh.016"}
            rel="noreferrer"
            target={"_blank"}
          >
            <AiFillFacebook className="icons" />
          </a>
          <a
            href={"https://www.instagram.com/wf_hart_boyler016"}
            rel="noreferrer"
            target={"_blank"}
          >
            <AiFillInstagram className="icons" />
          </a>
          <a
            href={"https://github.com/T-Joshua"}
            rel="noreferrer"
            target={"_blank"}
          >
            <AiFillGithub className="icons" />
          </a>
          <a
            href={"http://www.linkedin.com/in/joshua-taiwo-a78670314"}
            rel="noreferrer"
            target={"_blank"}
          >
            <AiFillLinkedin className="icons" />
          </a>
        </div>
        <p class="end">CopyRight&copy; By Taiwo Joshua</p>
      </footer>
    </div>
  );
}

export default Contact;
