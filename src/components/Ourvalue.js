import photo from "./../images/value.png"
import "./../App.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import data from "./../accordion.jsx"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Ourvalue() {
    return(
        <div id="Ourvalue"  className="container ourvalue" style={{display:"flex",justifyContent:"space-between",marginTop:"70px",marginBottom:"50px"}}>
            <div className="left"  style={{}}>
                <div className="rightimg" style={{border:"5px solid #ccc"}}>
                    <img src={photo} style={{width:"100%",height:"100%"}} alt=""/>
                </div>
            </div>
            <div className="right"  style={{marginLeft:"50px"}}>
                <h3 className='orange'>our Value</h3>
                <h2 className='primarytext' style={{marginBottom:"20px",fontSize:"2rem"}}>value we gove to you</h2>
                <p style={{color:"#777",marginTop:"-10px",marginBottom:"20px"}}>
                    Our Value Value We Give to You We always ready to help by providijng the best services for you.  
                    We beleive a good blace to live can make your life better</p>
                <Accordion className="accordion" style={{border:"none"}}>
                    {data.map((el,i)=>{
                        return(
                            <AccordionItem key={i} className="accordionitem">
                                <AccordionItemHeading >
                                    <AccordionItemButton style={{backgroundColor:"white"}}>
                                        <div className="accordieection" style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                                            <div className="iconn">{el.icon}</div>
                                            <div className='primarytext'style={{fontSize:"1.3rem"}}>{el.heading}</div>
                                            <div className="iconn"><ArrowDropDownIcon/></div>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel style={{boxShadow:"0px 23px 21px -8px rgba(136, 160, 255, 0.25)"}}>
                                    {el.detail}
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}