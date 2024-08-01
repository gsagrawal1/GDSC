import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h4>community</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Glories</a></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">Sponsors</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>More</h4>
                <ul>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Upcomings</a></li>
                    <li><a href="#">Memories</a></li>
                    <li><a href="#">Apply 2024</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
