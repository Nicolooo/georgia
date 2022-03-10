import React from 'react'
import Card from './Card'
import Storage from '../../data/Content'
const Ge = () =>{
    return(
        <div className="heroes-wrapper container-fluid">
        <h2 className='heroes-header'>NATIONAL HEROES</h2>
        <div className="container row">
            <Card name="Guram Gabiskiria" title="MAYOR OF SOKHUMI" img={Storage.photos.Ggabiskria}/>
            <Card name="GIORGI ANTSUXELIDZE" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Storage.photos.Gant}/>
            <Card name="ZHIULI SHARTAVA" title="Head of the Council of Ministers of the Autonomous Republic of Abkhazia" img={Storage.photos.shartava}/>
            <Card name="ALEKSANDRE ONIANI" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Storage.photos.oniani}/>
            <Card name="GENO ADAMIA" title="MAJOR GENERAL OF THE GEORGIAN ARMED FORCES" img={Storage.photos.adamia}/>
            <Card name="ZURAB IARAJULI" title="SENIOR LEUTENANT OF THE GEORGIAN AIR FORCE" img={Storage.photos.iarauli}/>
        </div>
    </div>
    )
}
const En = () =>{
        return(
            <div className="heroes-wrapper container-fluid">
            <h2 className='heroes-header'>ეროვნული გმირები</h2>
            <div className="container row">
                <Card name="გურამ გაბისკირია" title="სოხუმის მერი" img={Storage.photos.Ggabiskria}/>
                <Card name="გიორგი ანწუხელიძე" title="საქართველოს შეიარაღებული ძალების უმცროსი სერჟანტი" img={Storage.photos.Gant}/>
                <Card name="ჟიული შარტავა" title="აფხაზეთის ავტონომიური რესპუბლიკის მინისტრთა საბჭოს თავმჯდომარე" img={Storage.photos.shartava}/>
                <Card name="ალექსანდრე ონიანი" title="საქართველოს შეიარაღებული ძალების უმცროსი სერჟანტი" img={Storage.photos.oniani}/>
                <Card name="გენო ადამია" title="საქართველოს შეიარაღებული ძალების მაიორი გენერალი" img={Storage.photos.adamia}/>
                <Card name="ზურაბ იარაჯული" title="საქართველოს სამხედრო-საჰაერო ძალების უფროსი ლეიტენანტი" img={Storage.photos.iarauli}/>
            </div>
        </div>
        )
    }
const Hrid = (LANG) => {
    return (
        <>
            {LANG.LANG === "Ge" ? <En/> : <Ge/> }
        </>
    )
}

export default Hrid
