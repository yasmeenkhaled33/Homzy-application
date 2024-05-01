import { useEffect, useState } from "react";
import "./../App.css"
import heroimg from "./../images/hero-image.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CountUp from 'react-countup';

export default function Hero() {
    const[classimg,setclassimg]=useState("rightimgg rightimg")
    
    useEffect(()=>{
        setclassimg("rightimgg rightimg trans")
    },[])
    return (
        <div className="herosection" style={{backgroundColor:"black"}}>
            <div className="container herocontent" style={{display:"flex",justifyContent:"space-between",paddingBottom:"30px",alignItems:"center"}}>
                <div className="left" style={{color:"white",marginLeft:"50px",gap:"3rem",position: "relative"}}>
                    <div className="headline">
                        <div className="circle"/>
                        <h2>Discover <br/>Most suitable<br/>Properties</h2>
                    </div>
                    <p className="paraline">Find a variety of properties that suit you very easilty</p>
                    <p className="paraline" style={{marginBottom:"30px"}}>forget all difficulties in finding a residence for you</p>
                    <div className="searchbar" style={{position:"relative"}}>
                        <LocationOnIcon style={{color:"blue"}}/>
                        <input type="text"/>
                        <button className="button" >Search</button>
                    </div>
                    <div className="flexbetween">
                        <div className=" rates flexcol" style={{marginTop:"30px"}}>
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span>
                                premium products
                            </span>
                        </div>              
                        <div className="rates flexcol" style={{marginTop:"30px"}}>
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span>
                                Happy Customers
                            </span>
                        </div>              
                        <div className="rates flexcol" style={{marginTop:"30px"}}>
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span>
                                Award Winning
                            </span>
                        </div>              
                    </div>
                </div>
                <div className={classimg} style={{top:"50px"}}>
                    <img src={heroimg} alt="" style={{width:"100%",height:"100%"}}/>
                </div>
            </div>
        </div>
    )
}   