import "./../App.css"


export default function Getstart() {
    return(
        <div className="container" id="GetStarted">
            <div className="container Getstart">
                <h1 style={{display:"block",marginBottom:"30px"}}>Get started with Homyz</h1>
                <p style={{color:"#b1beef",fontSize:"14px"}}>Subscribe and find super attractive price quotes from us.<br/>
                    Find your residence soon</p>
                <button style={{backgroundColor:"#5a73d7",fontWeight:"bold",padding:"10px",color:"white",borderRadius:"10px",border:"2px solid white",marginTop:"20px"}}>
                    <a href="mailto:yasmeenkhaled77@gmail.com">Get started</a>
                </button>
            </div>
            <div className="line"></div>
        </div> 
    )
}