import React from 'react'
import Card from './Card'
import Board from '../../data/Board'
const Ge = () =>{
    return(
        <div className="heroes-wrapper container-fluid">
        <h2 className='heroes-header'>BOARD MEMBERS</h2>
        <div className="container row">
            <Card name="KAKHA KUCHAVA" title="MAYOR OF SOKHUMI" img={Board.photos.kuchava}/>
            <Card name="VIKTOR KIPIANI" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Board.photos.kipiani}/>
            <Card name="MIKHEIL JANELIDZE" title="Head of the Council of Ministers of the Autonomous Republic of Abkhazia" img={Board.photos.janelidze}/>
            <Card name="GIORGI BILANISHVILI" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Board.photos.bilanishvili}/>
            <Card name="TIKA RUKHADZE" title="MAJOR GENERAL OF THE GEORGIAN ARMED FORCES" img={Board.photos.rukhadze}/>
            <Card name="ZURAB IARAJULI" title="SENIOR LEUTENANT OF THE GEORGIAN AIR FORCE" img={Board.photos.taliashvili}/>
            <Card name="GIGI GIGIADZE" title="JUNIOR SERGEANT OF THE GEORGIAN ARMED FORCE" img={Board.photos.gigiadze}/>
            <Card name="LASHA CHANTLADZE" title="MAJOR GENERAL OF THE GEORGIAN ARMED FORCES" img={Board.photos.chantladze}/>
            <Card name="DAVID KLDIASHVILI" title="SENIOR LEUTENANT OF THE GEORGIAN AIR FORCE" img={Board.photos.kldi}/>
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
