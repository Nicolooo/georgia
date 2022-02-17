import React from 'react'
import MenuContentGe from './MenuContentGe'
import MenuContentEn from './MenuContentEn'
import MenuButton from './MenuButton'
const Menu = (LANG) => {
   return (
        <div className="menu-wrapper">
        <MenuButton />
        {LANG.LANG === "Ge" ? <MenuContentGe/> : <MenuContentEn/> }
        </div>
    ) 
}

export default Menu
