import React from 'react'
import Card from '../../comp/Contact/cards'
// To dos: Form
import SEO from '../../comp/SEO/title'
import Menu from '../../comp/Menu/Menu'
const contact = () => {
    return (
        <>
        <SEO title="Contact"/>
        <Menu />
        <div className="contact-wrapper">
            <div className="contact-sct">
                <h3 className="contact-headline" data-aos="fade-up">Contact Us</h3>
            </div>
            <div className="contact-cards">
            <Card title="Share" body="Tell us about your experience, thoughts or recommendations."/>
            <Card title="Support Us" body="We accept offers for financial aid in order to continue our project."/>
            <Card title="Put a word" body="Share our project to your friends and family to increase awareness."/>
            </div>
        </div>
        </>
    )
}

export default contact
