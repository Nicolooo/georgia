import React from 'react'
import { Facebook, Instagram, Youtube, ArrowUp} from "react-feather";
import Link from "next/link";
const top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const Footer = ({main,copyright}) => {
    return (
        <div className="footer-wrapper container-fluid" style={{backgroundImage: 'url(/footerr.webp)'}}>
            <h2 className="footer-headline">{main}</h2>
            <div className="footer-details">
                <div className="footer-col">
                    <h3 className="font-size-3">{copyright}</h3>
                </div>
                <div className="footer-col">
                    <Link href="https://www.facebook.com/georgianliberty"><a className="footer-icon"><Facebook /></a></Link>
                    <Link href="https://www.instagram.com/georgianliberty/"><a className="footer-icon"><Instagram /></a></Link>
                    <Link href="https://www.youtube.com/channel/UCUvGWCPrEt8djat0s5V4b_w"><a className="footer-icon"><Youtube /></a></Link>
                </div>
                <div className="footer-col">
                    <div className="footer-icon" onClick={top}><ArrowUp /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
