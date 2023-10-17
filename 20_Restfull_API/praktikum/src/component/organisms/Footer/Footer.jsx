import React from "react";

const Footer = () => {
    
    return (
        <footer>
        <div className="Container">
            <div className="conten d-flex justify-content-center align-items-center gap-2 m-5" >
                <div className="contac"style={{width:'330px', height:'220px'}}>
                    <h2>ARSHA</h2>
                    <p>A108 Adam Street New York, NY 535022 United States</p>
                    <p>Phone: +1 5589 55488 55</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="links"style={{width:'330px', height:'220px'}}>
                    <h3>Useful Links</h3>
                    <div className="gap-2 d-flex flex-column">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Service</a>
                    <a href="">Terms of Service</a>
                    <a href="">Privacy Policy</a>
                    </div>
                </div>
                <div className="service"style={{width:'330px', height:'220px'}}>
                    <h3>Our Service</h3>
                    <div className="gap-2 d-flex flex-column">
                    <a href="">Web Design</a>
                    <a href="">Web Development</a>
                    <a href="">Product Management</a>
                    <a href="">Marketing</a>
                    <a href="">Grapich Design</a>
                    </div>
                </div>
                <div className="social media"style={{width:'330px', height:'220px'}}>
                    <h3>Our Social Networks</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                </div>
            </div>
            <div className="rows d-flex justify-content-between py-3 px-5" style={{backgroundColor:'#37517E', color:'white'}}>
                <p>© Copyright Arsha. All Rights Reserved</p>
                <p className="">Designed by <a href="">Boostrap</a></p>
            </div>
        </div>
        </footer>
    )

}

export default Footer;