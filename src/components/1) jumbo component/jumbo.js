import React, {useState} from 'react';
import './jumbo.css'
import { BiCurrentLocation } from "react-icons/bi";
import SwiggyLogo from './nav_logo.png' ; 

const TITLES = [
    'Unexpected guests?',
    'Cooking gone wrong?',
    'Movie marathon?',
    'Game night?',
    'Late night at office?',
    'Hungry?'
]

function Jumbo(){

    const [title, setTitle] = useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setTitle(prevTitle => {
                prevTitle++;
                if(prevTitle < TITLES.length){
                    console.log(TITLES[prevTitle])
                    return prevTitle
                }else{
                    return 0;
                }
            })
        }, 2 * 1000)
    }, [title]);

    return(
        <section className = "container" >
            <div className = 'first_div'>
                <nav>
                    <div className = 'logo_container'><img src = {SwiggyLogo} alt = "logo" /></div>
                    <button id = "loginBtn" className = "commonBtns">Login</button>
                    <button id = "signupBtn" className = "commonBtns">Sign Up</button>
                </nav>
                <h1>{TITLES[title]}</h1>
                <h3>Order food from favourite restaurants near you.</h3>
                <div className = "searchDiv">
                    <div id="input"><input type = "text" placeholder = "Enter your delivery location"></input>
                    <button id = "locateBtn"><BiCurrentLocation/>Locate Me</button></div>
                    <button id = "findBtn">FIND FOOD</button>
                </div>
                    <p>POPULAR CITIES IN INDIA</p>
                    <p><span>Ahmedabad</span> Banglore <span>Chennai</span> Delhi <span>Gurgaon</span> Hyderabad <span>Kolkata</span> Mumbai <span>Pune</span> &#38; more.</p>
            </div>
            <div className = 'second_div'>
            </div>
        </section>
    );
}

export default Jumbo;