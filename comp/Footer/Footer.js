import React from 'react'
import { Facebook, Instagram, Youtube,} from "react-feather";
import Link from "next/link";
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <h2 className="footer-headline">Stand Against Illegal occupation</h2>
            <div className="footer-details">
                <div className="footer-col">
                    <h3>Copyright 2021 © Georgian Liberty</h3>
                </div>
                <div className="footer-col">
                    <Link href="/"><Facebook /></Link>
                    <Link href="/"><Instagram /></Link>
                    <Link href="/"><Youtube /></Link>
                </div>
                <div className="footer-col">
                    <i class="fas fa-chevron-up goup-icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
