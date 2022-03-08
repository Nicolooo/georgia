import React, { useContext } from "react";
import { MenuContext } from "./MenuManager";
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
  // {
  //   url: "/ge/programs",
  //   component: <span>პროგრამები</span>,
  // },
  {
    url: "/ge/news",
    component: <span>სიახლეები</span>,
  },

  // {
  //   url: "/ge/blog",
  //   component: <span>ბლოგი</span>,
  // },
  
  {
    url: "/ge/abkhazia",
    component: <span>აფხაზეთი</span>,
  },
  {
    url: "/ge/samachablo",
    component: <span>სამაჩაბლო</span>,
  },
  {
    url: "/ge/contact",
    component: <span>კონტაქტი</span>,
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
          </div>
        </div>
      </div>
    )
  
  
  ;
} 