import React from 'react'

const Ge = () =>{
    return(
        <div className="team-wr">
        <div className="container rowa">
        <div className="about-col">
            <h3 className="abt-h">ჩვენი გუნდი</h3>
            <h4 className="abt-names">ნიკოლოზ სირბილაძე</h4>
            <h4 className="abt-names">გიორგი კახიანი</h4>
            <h4 className="abt-names">ნიკოლოზ ხაბელაშვილი</h4>
        </div>
        <div className="about-col">
            <h3 className="abt-h">დიდი მადლობა</h3>
            <h4 className="abt-names">როინ მეტრეველი</h4>
            <h4 className="abt-names">ლევან ღამბაშიძე</h4>
            <h4 className="abt-names">ლაშა ჩანტლაძე</h4>
        </div>
    </div>
    </div>
    )
}
const En = () => {
    return (
        <div className="team-wr">
        <div className="container rowa">
        <div className="about-col">
            <h3 className="abt-h">Our Team</h3>
            <h4 className="abt-names">Nikusha Sirbiladze</h4>
            <h4 className="abt-names">Giorgi Kakhani</h4>
            <h4 className="abt-names">Nika Khabelashvili</h4>
        </div>
        <div className="about-col">
            <h3 className="abt-h">Special thanks to</h3>
            <h4 className="abt-names">Roin Metreveli</h4>
            <h4 className="abt-names">Levan Ghambashidze</h4>
            <h4 className="abt-names">Lasha Chantladze</h4>
        </div>
    </div>
    </div>
    )
}

const Staff = ({ok}) => {
    return (
        <>
            { ok === "Ge" ? <Ge/> : <En/> }
        </>
    )
}

export default Staff
