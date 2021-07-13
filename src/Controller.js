import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import ContactUs from './components/contactUs/Contact';
import MyExperiment from './components/myExperiment/myExperiment';
import Notfound from './components/notFound/NotFound';
import Work from './components/work/Work';
import ButtonActionWithFunctionalComponent from './components/assignment/buttonAction/ButtonActionWithFunctionalComponent';
import App from '../src/learnFile/App';
import Resume from './components/resume/Resume';



const Controller = () => {
    return (
        <div>
            
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props}/>} />
                    <Route path="/apps" render={ () =>  <App /> } />
                    <Route path="/ButtonActionWithFunctionalComponent" render={() => <ButtonActionWithFunctionalComponent/>} />
                    <Route path="/contactus" render={(props) => <ContactUs {...props}/>} />
                    <Route path="/myexperiment" render={() => <MyExperiment />} />
                    <Route path="/resume" render={()=><Resume/>} />
                    <Route path="/work/:work" render={(props) => <Work {...props}/>} />
                    <Route path="*"  render={() => <Notfound/>} />
                
                </Switch>
           </Router>
        </div>

    )
}
export default Controller;