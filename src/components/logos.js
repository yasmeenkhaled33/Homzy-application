import photo1 from "./../images/prologis.png"
import photo2 from "./../images/tower.png"
import photo3 from "./../images/equinix.png"
import photo4 from "./../images/realty.png"
import "./../App.css"

export default function Logos() {
    return(
        <div className="container contain" style={{display:"flex",marginTop:"30px"}}>
            <div style={{width:"130px",height:"130px"}}>
                <img src={photo1} alt="" style={{width:"100%"}}/>
            </div>
            <div style={{width:"170px",height:"170px"}}>
                <img src={photo2} alt="" style={{width:"100%"}}/>
            </div>
            <div style={{width:"170px",height:"170px"}}>
                <img src={photo3} alt="" style={{width:"100%"}}/>
            </div>
            <div style={{width:"170px",height:"170px"}}>
                <img src={photo4} alt="" style={{width:"100%"}}/>
            </div>
        </div>
    )
}