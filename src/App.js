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
     <Route exact path='/React-Resume/' component={Homepage}/>
     <Route exact path='/React-Resume/about' component={About}/>
     <Route exact path='/React-Resume/resume' component={Resume}/>
     <Route exact path='/React-Resume/certifications' component={Certificate}/>
     <Route exact path='/React-Resume/projects' component={Project}/>
     <Route exact path='/React-Resume/contact' component={Contact}/>
   </Switch>
   </>
  );
}

export default App;
