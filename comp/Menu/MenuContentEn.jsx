import React, { useContext } from "react";
import { MenuContext } from "./MenuManager";
import { Facebook, Instagram, Youtube} from "react-feather";
import cn from "classnames";
const En = [
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
    url: "/en/news",
    component: <span>News</span>,
  },
  {
    url: "/en/blog",
    component: <span>Blog</span>,
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

;

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

export default function MenuContentEn() {
  const { open } = useContext(MenuContext);    
    return(
      <div className="menu-holder">
        <div className={cn("menu-inside", { open })}>
          <div className="menu-nav-container">
            <ul className="internal-nav-links">
              {En.map((link) => (
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
  }
  
