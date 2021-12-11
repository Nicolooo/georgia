import React from 'react'
import SEO from '../../comp/SEO/title'
import Heroes from '../../comp/Grid/Heroes'
const Programs = () => {
    return (
        <>
        <SEO title="Programs" />
        <div className="programs-container">
            <h1 className="programs-headline">Programs</h1>
            <Heroes />
            </div>
        </>
    )
}

export default Programs
