import React from "react";
import { ReactComponent as Discord } from "../assets/icons/socials/discord.svg";
import { ReactComponent as Linkedin } from "../assets/icons/socials/linkedin.svg";
import { ReactComponent as Youtube } from "../assets/icons/socials/youtube.svg";
import { ReactComponent as Twitter } from "../assets/icons/socials/twitter.svg";
import { ReactComponent as Telegram } from "../assets/icons/socials/telegram.svg";
import { ReactComponent as Reddit } from "../assets/icons/socials/reddit.svg";

function Socials() {
  return (
    <div className="sidebar_socials">
      <a href="#">
        <Discord />
      </a>
      <a href="#">
        <Linkedin />
      </a>
      <a href="#">
        <Youtube />
      </a>
      <a href="#">
        <Twitter />
      </a>
      <a href="#">
        <Telegram />
      </a>
      <a href="#">
        <Reddit />
      </a>
    </div>
  );
}

export default Socials;
