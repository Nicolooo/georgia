import React from 'react'
import Menu from '../../comp/Menu/Menu'
import Count from '../../comp/Abk/counter'
import Switcher from '../../comp/LangSwitcher/Switcher'
import Storage from '../../data/Content'
import Share from '../../comp/SEO/share'
import Title from '../../comp/SEO/title'
import Image from 'next/image'
const data = {
    "counts": [
        {
            "id": "001",
            "label": "ლტოლვილი",
            "number": "250.000+",
            "duration": "2"
        },
        {
            "id": "002",
            "label": "გარდაცვლილი",
            "number": "10.000+",
            "duration": "2"
        },
        {
            "id": "003",
            "label": "დაჭრილი",
            "number": "8..000+",
            "duration": "2"
        },
       
    ]
}
const abkhazia = () => {
    return (
        <>
        <Title title="Georgian Liberty I აფხაზეთის ომი" meta="მე-20 საუკუნის 80-იანი წლის ბოლოს საქართველოში ეროვნულ-განმანთავისუფლებელი მოძრაობის მკვეთრად გააქტიურების ფონზე, კრემლი ახდენს აფხაზეთში არსებული სეპარატისტული, ანტიქართული და ნაციონალისტური ძალების მობილიზებასა და მათით მანიპულირებას, რათა შეინარჩუნოს მძლავრი ზეგავლენა საქართველოზე."/>
        <Menu LANG="Ge" />
            <Switcher title="EN" link="/en/abkhazia"/>
        <div className="abkhazia-wrapper container">
            <div className="abkhazia-title row"> 
                <h1 className='page-header'>აფხაზეთი</h1>
                <p className="abkhazia-shorttext">{Storage.abkGeo.first}</p>
            </div>
            <div className="abkhazia-stats row">
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
            </div>
            {/* <div className='row'>
                <div className="abkhazia-col">
                    <Image className='img-resp' src="/abkhazia/abkhazia-1.webp" alt="as" height="700" width="1000" />
                    <p className="reference">*</p>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.first}
                    </p>
                </div>
            </div> */}
            <div className='row'>
                <div className="abkhazia-col">
                <Image className='img-resp' src="/abkhazia/abkhazia-3.webp" alt="as" height="650" width="600" />
                <p className="reference">*</p>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.second}
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
                        {Storage.abkGeo.third}
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="abkhazia-col">
                    <img className='img-resp' src="https://i2.wp.com/www.georgianliberty.support/wp-content/uploads/2021/08/1992.webp?resize=1024%2C745&ssl=1" alt="as"/>
                </div>
                <div className="abkhazia-col">
                    <p>
                        {Storage.abkGeo.forth}
                    </p>
                </div>
            </div>
            <Share url="/en/abkhazia" title="გააზიარეთ" />
        </div>
        </>
    )
}

export default abkhazia
