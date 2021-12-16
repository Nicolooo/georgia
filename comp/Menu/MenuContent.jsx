import React, { useContext } from "react";
import { MenuContext } from "./MenuManager";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";
const internalLinks = [
  {
    url: "/en",
    component: <span>Home</span>,
  },
  {
    url: "/en/about/",
    component: <span>About us</span>,
   
  },
  {
    url: "/en/programs",
    component: <span>Programs</span>,
  },
  {
    url: "#4",
    component: <span>Abkhazia</span>,
  },
  {
    url: "#5",
    component: <span>Samachablo</span>,
  },
  {
    url: "/en/contact",
    component: <span>Contact</span>,
  },
];

const externalLinks = [
  {
    url: "www.facebook.com",
    component: <Facebook />,
  },
  {
    url: "www.instagram.com",
    component: <Instagram />,
  },
  {
    url: "www.youtube.com",
    component: <Youtube />,
  },
];

export default function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 