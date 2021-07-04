import Heading from './heading.js';
function About(){
    return(
        <div className="container total_div_about">
            <Heading heading="ABOUT"/>            
            <p className="about_para">I am an aspiring engineer, highly passionate about robotics, programming and web. I have been working in robot designing for two years now. I am a confident, creative, self-motivated person and an ardent learner.</p>
            <div className="row total_about_container">
                <div className="col-lg-4">
                    <div className="about_pic_div"></div>
                </div>
                <div className="col about_small_screen_div">
                    <div> <h2>Full Stack Web Developer</h2></div>
                    <div className="row">
                    <div className="col">
                    <div className="card_description_brthdar">
                    <p><strong>Birthday:</strong><span>06 February 2000</span></p>
                    <p><strong>Website:</strong><span><a target="blank" href="https://ankush-roy-007.github.io/React-Resume/">Click me</a></span></p>
                    <p><strong>Phone:</strong><span>+91 9660485934</span></p>
                        <p><strong>City:</strong><span>Pune, Maharastra</span></p>
                    </div>
                </div>
                <div className="col">
                <div className="card_description_brthdar small_screen_div_age">
                        <p><strong>Age:</strong><span>21</span></p>
                        <p><strong>Degree:</strong><span>Bachelor of Engineer</span></p>
                        <p><strong>Freelance:</strong><span>Available</span></p>   
                    </div>
                </div>
                    </div>
                    <div>
                        <p className="about_full_desc">
                        I am persuing my Bachelor of Engineering from <strong></strong>ARMY INSTITUTE OF TECHNOLOGY,Pune, Maharastra. My Cumulative Grade Point Average (CGPA) till my current semester
is 8.9 . I passed my 12th standard from SIR PADAMPAT SINGHANIA SCHOOL, Kota, Rajasthan. I secured 81.6% in my higher secondary. I did my 10th from SIR PADAMPAT SINGHANIA SCHOOL, Kota, Rajasthan
I successfully secured 9.8 Cumulative Grade Point Average (CGPA).
I am very very interested in this web development domain, I am working hard to persue this as my carrier. 
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

 

export default About;