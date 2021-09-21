import './footer.css'
import React from 'react'
import google from '../3) restaurants component/googleplay.webp'
import appstore from '../3) restaurants component/appstore.webp'
import swiggy from './swiggywhite.png';
import cities from './cities';
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    React.useEffect(()=>{
        let length=cities.length;
        for(let i=0;i<4;i++){
            if(length%4 !== 0)
            length++;
            else
                break;
        }
        const divlen=length/4;
        let count=0,divcount=1;
        for(let i=0;i<cities.length;i++){
            if(count===divlen){
                count=0;
                divcount++;
            }
            const tag=document.createElement('p');
            const text=document.createTextNode(cities[i]);
            tag.appendChild(text);
            document.getElementById(`d${divcount}`).appendChild(tag);
            count++;
        }
      },[]);

    return(
        <footer >
            <div id="about" >
                <div>
                    <h4>COMPANY</h4>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Swiggy Blog</p>
                    <p>Bug Bounty</p>
                    <p>Swiggy Super</p>
                    <p>Swiggy Corporate</p>
                    <p>Swiggy Instamart</p>
                </div>
                <div>
                    <h4>CONTACT</h4>
                    <p>Help &#38; Support</p>
                    <p>Partner with us</p>
                    <p>Ride with us</p>
                </div>
                <div>
                    <h4>LEGAL</h4>
                    <p>Terms &#38; Conditions</p>
                    <p>Refund &#38; Cancellation</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Offer Terms</p>
                    <p>Phishing &#38; Fraud</p>
                </div>
                <div className="downlogo" >
                    <img src={google} alt="googleplay" />
                    <img src={appstore} alt="appstore" />
                </div>
            </div><hr/>
            <div id="cities" >
                <h4>WE DELIVER TO</h4>
                <div className='flexed_cities'>
                    <div id="d1" ></div>
                    <div id="d2" ></div>
                    <div id="d3" ></div>
                    <div id="d4" ></div>
                </div>
            </div><hr/>
            <div id="logos" >
                <img src={swiggy} alt="swiggylogo" />
                <p> &copy; 2021 Swiggy </p>
                <div id="sociallogos" >
                    <FaFacebookF/>
                    <FaPinterest/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;