import React from 'react'
import Card from '../../../comp/Contact/cards'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import FormC from '../../../comp/Contact/Form'
import Footer from '../../../comp/Footer/Footer'
import Switcher from '../../../comp/LangSwitcher/Switcher'
import Icarus from '../../../comp/Contact/icarus'
const contact = () => {
    return (
        <>
        <SEO title="Contact "/>
        <Menu LANG="Ge" />
        <Switcher title="en" link="/en/contact"/>
        <div className="container-fluid contactpage">
            <div className="container">
                <h3 className="contact-headline mb-5" data-aos="fade-up">კონტაქტი</h3>
            </div>
            <div className="container row">
                <Card title="გაგვიზიარეთ" body="მოგვწერეთ რეკომენდაციები რათა განვავბითაროთ პლატფორმა"/>
                <Card title="დაგვიჭირეთ მხარი" body="ჩვენ ვიღებთ ყველა სახის დახმარებას."/>
                <Card title="გაავრცელეთ" body="გაავრცელეთ პროექტი რათა გავაგებინოთ მეტ ხალხს!"/>
            </div>
            <div className="contact-form container">
            <FormC message="დიდი მადლობა,თქვენი მეილი მიღებულია" title="ჩვენ ვპასუხობთ ყველა მეილს" />
            </div>
        </div>
        <Icarus title="ვალანწიორები" link='/ge/contact/volunteer'/>
        <Footer main="Stand Against Illegal occupation" copyright="Copyright 2023 © Georgian Liberty"/>
        </>
    )
}

export default contact
