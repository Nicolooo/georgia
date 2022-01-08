import React from 'react'
import { Facebook, Instagram, Youtube, ArrowUp} from "react-feather";
import Link from "next/link";
const top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const Footer = ({main,copyright}) => {
    return (
        <div className="footer-wrapper container-fluid">
            <h2 className="footer-headline">{main}</h2>
            <div className="footer-details">
                <div className="footer-col">
                    <h3 className="font-size-3">{copyright}</h3>
                </div>
                <div className="footer-col">
                    <Link href="/"><a className="footer-icon"><Facebook /></a></Link>
                    <Link href="/"><a className="footer-icon"><Instagram /></a></Link>
                    <Link href="/"><a className="footer-icon"><Youtube /></a></Link>
                </div>
                <div className="footer-col">
                    <div className="footer-icon"><ArrowUp onClick={top}/></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
