import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Image from 'next/image'
import Next from '../../comp/next/yea'
const data = {
    "counts": [
        {
            "id": "001",
            "label": " DISPLACED",
            "number": "250.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "DEAD",
            "number": "10.000",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "WOUNDED",
            "number": "8..000",
            "duration": "2"
        },
       
    ]
}
const linkz = {
    first_title: "2008",
    first_link: "/en/samachablo",
    second_title: "1989",
    second_link: "/en/1989",
}
const abkhazia = () => {
    return (
        <>
        <Title title="Georgian Liberty | Abkhazian War" meta="At the end of 1980s Georgia was on the background of sharp activation of national movement for independence."/>
            <Menu />
        <Switcher title="Ge" link="/ge/abkhazia"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>ABKHAZIA</h1>
                <p className="abkhazia-shorttext">At the end of 80-ies of the 20th century in Georgia on the background of sharp activation of national movement for independence, Kremlin (Moscow) interferes by mobilizing and manipulating with the separatists, anti-Georgian nationalists in Abkhazia thus to maintain powerful influence upon Georgia. At this time the following actions are carried out which are founding aggressive separatism in Abkhazia.</p>
            </div>
            <div className="abkhazia-stats row">
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                    <Image className='img-resp' src="/abkhazia/abkhazia-1.webp" alt="as" height="700" width="1000" />
                    <p className="reference">*</p>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.Abkhazia.first}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                <Image className='img-resp' src="/abkhazia/abkhazia-3.webp" alt="as" height="650" width="600" />
                <p className="reference">*</p>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.Abkhazia.second}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                <Image className='img-resp' src="/abkhazia/abkhazia-4.webp" alt="as" height="550" width="600" />
                <p className="reference">*</p>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.Abkhazia.third}
                    </p>
                </div>
            </div>
            <Next options={linkz}/>
            <Share url="/en/abkhazia" title="Share" cite1="Cite" cite2="1992.” Georgian Liberty | Abkhazia, September 27, 2021.  https://www.georgianliberty.com/en/abkhazia,           '"/>
        </div>
        </>
    )
}

export default abkhazia
