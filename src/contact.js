import { border } from "@material-ui/system";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Heading from "./heading";
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
function Contact(){
    return(
        <div className="contact_total_div container">
            <Heading heading="CONTACT" />
            <div className="map_div">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.269896908346!2d73.872897814722!3d18.60692638735877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1625002085860!5m2!1sen!2sin"  style={{border:"0px",width:"100%",height:"250px"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="input_details_div">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="div_flex">
                            <div className="contact_images"><LocationOnIcon style={{fontSize:"70px",color:"#1D685F",backgroundColor:"#DAF3F0",borderRadius:"100%",padding:"10px"}}/></div>
                            <div className="contact_text_details"><span className="contact_bold_details">Location :</span><br/><span className="contact_details_notbold">Army Institute of Technology<br/>Dighi Hills, Alandi Road, Maharashtra, India</span></div>
                        </div>

                        <div className="div_flex">
                            <div className="contact_images"><EmailIcon style={{fontSize:"70px",color:"#1D685F",backgroundColor:"#DAF3F0",borderRadius:"100%",padding:"10px"}}/></div>
                            <div className="contact_text_details"><span className="contact_bold_details">Email :</span><br/><span className="contact_details_notbold">royankush399@gmail.com</span></div>
                        </div>

                        <div className="div_flex">
                            <div className="contact_images"><PhoneAndroidIcon style={{fontSize:"70px",color:"#1D685F",backgroundColor:"#DAF3F0",borderRadius:"100%",padding:"10px"}}/></div>
                            <div className="contact_text_details"><span className="contact_bold_details">Call :</span><br/><span className="contact_details_notbold">+91 96604 85934</span></div>
                        </div>
                    </div>
                    <div className="col-lg-7 all_input_contact">
                        <input type="text" className="form-control" placeholder="Your Name"/>
                        
                        <input type="email" className="form-control" placeholder="Your Email"/>
                        
                        <input type="text" className="form-control" placeholder="Subject"/>
                        <textarea placeholder="Message" className="form-control"></textarea>
                        <button className="btn contact_button_send">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;