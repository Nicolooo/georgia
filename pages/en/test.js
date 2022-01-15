import React,{useState} from 'react'
import Menu from '../../comp/Menu/Menu'
import Title from '../../comp/SEO/title'
import Switcher from '../../comp/LangSwitcher/Switcher'
import { ArrowLeft, ArrowRight} from "react-feather";
import Arr from '../../data/s'
const Nikanor = () =>{
    const [value,setValue] = useState(0);
    return(
        <>
        <div className='slider-container'>
            <img src = {Arr[value].image} alt = {Arr[value].id} />
            <h2>{Arr[value].name}</h2> 
            <h3>{Arr[value].title}</h3>            
            </div>
            <button type="button" onClick={ () => value === 0 ? setValue(3) : setValue(value-1)}><ArrowLeft/></button>
            <button type="button" onClick={ () => value === 3 ? setValue(0) : setValue(value+1)}><ArrowRight/></button>
        </>
    )
}
export default function test(){
return(
<>
<Title title='Home' />
{/* <Menu LANG=''/> */}
{/* <Switcher title='Ge' link='/ge'/> */}
<Nikanor />
</>
)
}