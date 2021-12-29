import React from 'react'
import Card from '../../comp/Contact/cards'
import SEO from '../../comp/SEO/title'
import Menu from '../../comp/Menu/Menu'
import FormC from '../../comp/Contact/Form'
const contact = () => {
    //  To do: Responsive + add ylinji for info
  
    return (

        <>
                
        <SEO title="Contact"/>
        <Menu LANG='Ge'/>
        <div className="container-fluid">
            <div className="container">
                <h3 className="contact-headline" data-aos="fade-up">კონტაქტი</h3>
            </div>
            <div className="container row">
            <Card title="გაგვიზიარე" body="მოგვიყევი თქვენი გამოცდილების, ნააზრევისა და რეკომენდაციების."/>
            <Card title="გაგვიწიე დახმარება" body="პროექტის გასაგრძელებლად ჩვენ ვიღებთ ფინანსურ დახმარებაზე შემოთავაზებებს."/>
            <Card title="განავრცე" body="გაუზიარე ჩვენი პროექტი მეგობრებსა და ოჯახს, ცნობიერების ასამაღლებლად."/>
            </div>
            <div className="contact-form container">
            <FormC />
            </div>
        </div>
        </>
    )
}

export default contact
