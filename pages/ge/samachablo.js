import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'

const data = {
    "counts": [
        {
            "id": "001",
            "label": " DISPLACED",
            "number": "120.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "DEAD",
            "number": "1.000",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "WOUNDED",
            "number": "4.000",
            "duration": "2"
        },
       
    ]
}
const samachablo = () => {
    return (
        <>
        <Title title="Samachablo" />
            <Menu LANG="Ge" />
            <Switcher title="EN" link="/en/abkhazia"/>
        <div className="samachablo-wrapper container">
            <div className="samachablo-title row"> 
                <h1 className='page-header'>Samachablo</h1>
                <p className="samachablo-shorttext">At the end of 80-ies of the 20th century in Georgia on the background of sharp activation of national movement for independence, Kremlin (Moscow) interferes by mobilizing and manipulating with the separatists, anti-Georgian nationalists in Abkhazia thus to maintain powerful influence upon Georgia. At this time the following actions are carried out which are founding aggressive separatism in Abkhazia.</p>
            </div>
            <div className="samachablo-stats row">
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            <div className='row'>
                <div className="samachablo-col">
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="samachablo-col">
                    <p>
                        {Storage.Samachablo.first}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="samachablo-col">
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="samachablo-col">
                    <p>
                        {Storage.Samachablo.second}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="samachablo-col">
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="samachablo-col">
                    <p>
                        {Storage.Samachablo.third}
                    </p>
                </div>
            </div>
            <Share url="/en/abkhazia" />
        </div>
    </>
    )
}

export default samachablo
