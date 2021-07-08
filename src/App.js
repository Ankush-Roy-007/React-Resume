import { Route, Switch } from 'react-router';
import Homepage from './homepage';
import Navbar from './navbar.js';
import About from './about';
import Resume from './resume';
import Certificate from './certificate';
import Contact from './contact';
import Project from './project';
function App() {
  return (
   <>
   <Navbar />
   <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route exact path='/about' component={About}/>
     <Route exact path='/resume' component={Resume}/>
     <Route exact path='/certifications' component={Certificate}/>
     <Route exact path='/projects' component={Project}/>
     <Route exact path='/contact' component={Contact}/>
   </Switch>
   </>
  );
}

export default App;
