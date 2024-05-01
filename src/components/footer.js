import "./../App.css"
import photo from "./../images/logo2.png"


export default function Footer() {
    return(
        <div className="container">
            <div className="contect" style={{display:"flex",paddingTop:"30px",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
                <div className="contect" style={{display:"flex",flexDirection:"column",justifyContent:"start"}}>
                    <div style={{width:"100px",marginBottom:"20px"}}>
                        <img src={photo} alt="" style={{width:"100%"}}/>
                    </div>
                    <p className="para" style={{fontSize:"14px",color:"#aaa"}}>Our vision is to make all people<br/>
                        the best place to live for them.</p>
                </div>
                <div>
                    <h1 className="primarytext" style={{fontSize:"35px"}}>information</h1>
                    <p style={{fontSize:"14px",color:"#aaa"}}>145 New York, FL 5467, USA</p>
                    <ul className="para" style={{listStyle:"none",display:"flex",justifyContent:"space-between"}}>
                        <li>property</li>
                        <li>services</li>
                        <li>product</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}