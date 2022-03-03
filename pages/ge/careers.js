import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Switcher from '../../comp/LangSwitcher/Switcher'
import { Coffee }  from 'react-feather'
const J = () => {
    //  To do: Fetch API Of Careers avalable
    return (
        <>
        <Title title="Career"/>
        <Menu LANG="Ge" />
        <Switcher title="en" link="/en/career"/>
        <div className="career-cont">
            <h2 className="career-title">კარიერები</h2>
                <div className="career-ikonka"><Coffee/></div>
        </div>
        </>
    )
}

export default J