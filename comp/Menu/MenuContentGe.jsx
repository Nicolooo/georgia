import React, { useContext } from "react";
import { MenuContext } from "./MenuManager";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";


const  Ge = [
  {
    url: "/ge",
    component: <span>მთავარი</span>,
  },
  {
    url: "/ge/about/",
    component: <span>ჩვენ შესახებ</span>,

  },
  {
    url: "/ge/programs",
    component: <span>პროგრამები</span>,
  },
  {
    url: "#4",
    component: <span>აბხაზეთი</span>,
  },
  {
    url: "#5",
    component: <span>სამაჩაბლო</span>,
  },
  {
    url: "/en/contact",
    component: <span>კონტაქტი</span>,
  },
];

const externalLinks = [
  {
    url: "https://www.facebook.com/georgianliberty",
    component: <Facebook />,
  },
  {
    url: "https://www.instagram.com/georgianliberty/",
    component: <Instagram />,
  },
  {
    url: "https://www.youtube.com/channel/UCUvGWCPrEt8djat0s5V4b_w",
    component: <Youtube />,
  },
];

export default function MenuContentGe() {
  const { open } = useContext(MenuContext); 
    return (
       
      <div className="menu-holder">
        <div className={cn("menu-inside", { open })}>
          <div className="menu-nav-container">
            <ul className="internal-nav-links">
              {Ge.map((link) => (
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
    )
  
  
  ;
} 