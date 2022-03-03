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
            "number": "250.000",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "DEAD",
            "number": "4.000",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "WOUNDED",
            "number": "10.000",
            "duration": "2"
        },
       
    ]
}
const abkhazia = () => {
    return (
        <>
        <Title title="Abkhazia" />
        <Menu LANG="Ge" />
            <Switcher title="EN" link="/en/abkhazia"/>
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
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.Abkhazia.first}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.Abkhazia.second}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.Abkhazia.third}
                    </p>
                </div>
            </div>
            <Share url="/en/abkhazia" />
        </div>
        </>
    )
}

export default abkhazia
