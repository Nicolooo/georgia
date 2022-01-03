import React from 'react'
import SEO from '../../comp/SEO/title'
import Heroes from '../../comp/Grid/Heroes'
import Menu from '../../comp/Menu/Menu'
const Programs = () => {
    // to do: check Responsive and approve the design
    return (
        <>
        <SEO title="Programs" />
        <Menu />
        <div className="container-fluid">
            <h1 className="programs-headline" data-aos="fade-down">Programs</h1>
            <Heroes />
        </div>
        </>
    )
}

export default Programs
