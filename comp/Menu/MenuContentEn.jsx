import React, { useContext, useState } from "react"
import { MenuContext } from "./MenuManager"
import { Facebook, Instagram, Youtube} from "react-feather"
import cn from "classnames"
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
    url: "/en/abkhazia",
    component: <span>Abkhazia</span>,
  },
  {
    url: "/en/samachablo",
    component: <span>Samachablo</span>,
  },
  {
    url: "/en/contact",
    component: <span>Contact</span>,
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
          </div>
        </div>
      </div>
    )
  }
  
