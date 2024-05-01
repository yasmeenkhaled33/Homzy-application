import {  useState } from "react";
import "./../../App.css"
import logo from "./../../images/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import OutsideClickHandler from 'react-outside-click-handler'

export default function Header() {
    const[menuvisible,setmenuvisible]=useState("")
        function handelclick() {
            if(menuvisible==="block"){
                setmenuvisible("")
            }else if(menuvisible===""){
                setmenuvisible("block")
            }
        }
    return(
        <div className="parentt">
            <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div className="logo">
                    <img src={logo} alt="" style={{width:"100px"}}/>
                </div>
                <OutsideClickHandler onOutsideClick={()=>setmenuvisible("")}>
                <div className="links">
                    <ul className={menuvisible}>
                        <li><a href="#Residencies">Residencies</a></li>
                        <li><a href="#Ourvalue">Our value</a></li>
                        <li><a href="#ContactUs">Contact Us</a></li>
                        <li><a href="#GetStarted">Get Started</a></li>
                        <li><button className="button"><a href="#ContactUs">contact</a></button></li>
                    </ul>
                </div>
                </OutsideClickHandler>
            </div>
            <div className="menuicon" onClick={handelclick}>
                <MenuIcon style={{color:"white"}} />
            </div>
        </div>
    )
}

