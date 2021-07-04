import { NavLink } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    function hide_show_function() {
        var x = document.querySelector(".display_menu_hide");
        if(window.innerWidth<=992){
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      }
      function handleResize(){
        var x = document.querySelector(".display_menu_hide");
        var y = document.querySelector(".menu_button");
        if(window.innerWidth<=992){
          y.style.display="block";
          x.style.display="none";
      }
      else{
        y.style.display="none";
          x.style.display="block";
      }
      }
    window.addEventListener('resize', handleResize)
  return (
    <>
      <div className='row total_navbar_background'>
        <div className='col logo'>
          <NavLink to='/' className='link_color_logo'>
              ANKUSH
          </NavLink>
          <MenuIcon onClick={hide_show_function} className="menu_button"/>
        </div>
        <div className="display_menu_hide col-lg-9">
        <div className='row'>
            <div className="row seperate_link col-lg-8">
            <div className='col'>
                <NavLink exact to='/React-Resume/' activeClassName="activelink"  className='link_color'>
                    HOME
                </NavLink>
            </div>
            <div className='col'>
                <NavLink exact to='/React-Resume/about' activeClassName="activelink" className='link_color'>
                    ABOUT
                </NavLink>
            </div>
            <div className='col'>
                <NavLink exact to='/React-Resume/resume' activeClassName="activelink" className='link_color'>
                    RESUME
                </NavLink>
            </div>
            <div className='col'>
                <NavLink exact to='/React-Resume/certifications' activeClassName="activelink" className='link_color'>
                    CERTIFICATIONS
                </NavLink>
            </div>
            <div className='col'>
                <NavLink exact to='/React-Resume/projects' activeClassName="activelink" className='link_color'>
                    PROJECTS
                </NavLink>
            </div>
            <div className='col'>
                <NavLink exact to='/React-Resume/contact' activeClassName="activelink" className='link_color'>
                  CONTACT
                </NavLink>
            </div>
            </div>
            <div className="col social_images">
        <a target="blank" className="social_media_lnk__anchor" href="https://www.instagram.com/_ankush_roy._/"><InstagramIcon className="seperate_social_link"/></a>
        <a target="blank" className="social_media_lnk__anchor" href="https://www.facebook.com/ankush.roy.180"><FacebookIcon className="seperate_social_link"/></a>
        <a target="blank" className="social_media_lnk__anchor" href="https://www.linkedin.com/in/ankush-roy-00o00/"><LinkedInIcon className="seperate_social_link"/></a>
        <a target="blank" className="social_media_lnk__anchor" href="https://github.com/Ankush-Roy-007"><GitHubIcon className="seperate_social_link"/></a>
        
        </div>
        </div>
        
        </div>
      </div>
    </>
  );
}

export default Navbar;
