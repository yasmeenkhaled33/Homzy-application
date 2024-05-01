import "./../App.css"
import photo from "./../images/contact.jpg"
import CallIcon from '@mui/icons-material/Call';
import TextsmsIcon from '@mui/icons-material/Textsms';
import VideocamIcon from '@mui/icons-material/Videocam';

export default function Contact() {
    return(
        <div id="ContactUs" className="container contactus" style={{display:"flex",justifyContent:"space-between",marginBottom:"50px"}}>
            <div className="info" style={{padding:"20px"}}>
                <h3 className='orange'>our Contact us</h3>
                <h2 className='primarytext' style={{marginBottom:"20px",fontSize:"2rem"}}>Easy to contact us</h2>
                <p style={{color:"#777",marginTop:"-10px",marginBottom:"20px"}}>
                We always ready to help by providijng the best services for you. We beleive a good<br/> blace to live can make your life better</p>
                <div className="contact"
                style={{width:"100%"}}>
                    <div className="contac" >
                        <div className="row" style={{display:"flex",marginBottom:"20px"}}>
                            <div className="box" style={{padding:"20px",border:"2px solid #eee",width:"49%",marginRight:"20px"}} >
                                <div style={{display:"flex"}}>
                                    <div className="iconn"><CallIcon/></div>
                                    <div style={{marginLeft:"25px"}}>
                                        <h3 className='primarytext'style={{fontSize:"1.1rem"}}>Call</h3>
                                        <p style={{color:"#777",marginTop:"7px"}}>012 123 145 14</p>
                                    </div>
                                </div>
                                <div>
                                    <button style={{color:"blue",backgroundColor:"#eeeeff",width:"100%",border:"none",marginTop:"20px",height:"50px" ,fontSize:"0.9rem",fontWeight:"500",borderRadius:"8px"}}>Call now</button>
                                </div>
                            </div>
                            <div className="box" style={{padding:"20px",border:"2px solid #eee",width:"49%"}} >
                                <div style={{display:"flex"}}>
                                    <div className="iconn"><TextsmsIcon/></div>
                                    <div style={{marginLeft:"25px"}}>
                                        <h3 className='primarytext'style={{fontSize:"1.1rem"}}>Chat</h3>
                                        <p style={{color:"#777",marginTop:"7px"}}>012 123 145 14</p>
                                    </div>
                                </div>
                                <div>
                                    <button style={{color:"blue",backgroundColor:"#eeeeff",width:"100%",border:"none",marginTop:"20px",height:"50px" ,fontSize:"0.9rem",fontWeight:"500",borderRadius:"8px"}}>Chat now</button>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{display:"flex"}}>
                            <div className="box" style={{padding:"20px",border:"2px solid #eee",width:"49%",marginRight:"20px"}} >
                                <div style={{display:"flex"}}>
                                    <div className="iconn"><VideocamIcon/></div>
                                    <div style={{marginLeft:"25px"}}>
                                        <h3 className='primarytext'style={{fontSize:"1.1rem"}}>Video Call</h3>
                                        <p style={{color:"#777",marginTop:"7px"}}>012 123 145 14</p>
                                    </div>
                                </div>
                                <div>
                                    <button style={{color:"blue",backgroundColor:"#eeeeff",width:"100%",border:"none",marginTop:"20px",height:"50px" ,fontSize:"0.9rem",fontWeight:"500",borderRadius:"8px"}}>Video Call now</button>
                                </div>
                            </div>
                            <div className="box" style={{padding:"20px",border:"2px solid #eee",width:"49%"}} >
                                <div style={{display:"flex"}}>
                                    <div className="iconn"><TextsmsIcon/></div>
                                    <div style={{marginLeft:"25px"}}>
                                        <h3 className='primarytext'style={{fontSize:"1.1rem"}}>Message</h3>
                                        <p style={{color:"#777",marginTop:"7px"}}>012 123 145 14</p>
                                    </div>
                                </div>
                                <div>
                                    <button style={{color:"blue",backgroundColor:"#eeeeff",width:"100%",border:"none",marginTop:"20px",height:"50px" ,fontSize:"0.9rem",fontWeight:"500",borderRadius:"8px"}}>Message now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightimg" style={{border:"5px solid #ccc"}}>
                <img src={photo} style={{width:"100%",height:"100%"}} alt=""/>
            </div>
        </div>
    
)}