import React from 'react'
import Card from '../../../comp/Contact/cards'
import SEO from '../../../comp/SEO/title'
import Menu from '../../../comp/Menu/Menu'
import Footer from '../../../comp/Footer/Footer'
import Switcher from '../../../comp/LangSwitcher/Switcher'
import FormV from '../../../comp/Contact/volunteer'
const volunteer = () => {
    return (
        <>
        <SEO title="Georgian Liberty | Volunteer" meta="Contact people behind the project, ask questions, report problems and give us suggestions."/>
        <Menu />
        <Switcher title="Ge" link="/ge/contact"/>
        <div className="container-fluid contactpage">
            <div className="container">
                <h3 className="contact-headline mb-5" data-aos="fade-up">Volunteer</h3>
            </div>
            <div className="container row">
                <Card title="Share" body="Tell us about your experience, thoughts or recommendations."/>
                <Card title="Support Us" body="We accept offers for financial aid in order to continue our project."/>
                <Card title="Put a word" body="Share our project to your friends and family to increase awareness."/>
            </div>
            <div className="contact-form container">
            <FormV message="Thank you, your message has been submitted." title="WE RESPOND TO EVERY EMAIL" />
            </div>
        </div>
        <Footer main="Stand Against Illegal occupation" copyright="Copyright 2023 © Georgian Liberty"/>
        </>
    )
}

export default volunteer
