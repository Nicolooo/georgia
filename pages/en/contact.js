import React from 'react'
import Card from '../../comp/Contact/cards'
import SEO from '../../comp/SEO/title'
import Menu from '../../comp/Menu/Menu'
import FormC from '../../comp/Contact/Form'
import Footer from '../../comp/Footer/Footer'
const contact = () => {
    //  To do: Responsive + add ylinji for info
    return (
        <>
        <SEO title="Contact"/>
        <Menu />
        <div className="container-fluid">
            <div className="container">
                <h3 className="contact-headline" data-aos="fade-up">Contact Us</h3>
            </div>
            <div className="container row">
                <Card title="Share" body="Tell us about your experience, thoughts or recommendations."/>
                <Card title="Support Us" body="We accept offers for financial aid in order to continue our project."/>
                <Card title="Put a word" body="Share our project to your friends and family to increase awareness."/>
            </div>
            <div className="contact-form container">
            <FormC message="Thank you, your message has been submitted." title="WE RESPOND TO EVERY EMAIL" />
            </div>
        </div>
        <Footer main="Stand Against Illegal occupation" copyright="Copyright 2021 © Georgian Liberty"/>
        </>
    )
}

export default contact
