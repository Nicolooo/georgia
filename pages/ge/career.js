import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Switcher from '../../comp/LangSwitcher/Switcher'
const J = () => {
    //  To do: Fetch API Of Careers avalable
    return (
        <>
        <Title title="Career"/>
        <Switcher title="EN" link="/en/career"/>
        <Menu LANG='Ge'/>
        <div className="career-cont">
            <h2 className="career-title">Careers At Georgian Liberty</h2>
        </div>
        </>
    )
}

export default J 