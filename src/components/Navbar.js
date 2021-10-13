import React,{useState} from 'react';
import '../navbar.css';
import menuicon from '../assets/menu.png';

const Navbar = () => {
    const [showLinks,setShowLinks]=useState(false);
    return (
        <div className="Navbar">
            <div className="leftside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="/home">Home</a>
                <a href="/home">profile</a>
                <a href="/home">accounts</a>
                </div>
                <button onClick={()=>setShowLinks(!showLinks)}><img src={menuicon} alt="icons" style={{width:"50px"}}/></button>
            </div>
            <div className="rightside">
               
            </div>
        </div>
    )
}

export default Navbar
