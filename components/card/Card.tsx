import React from "react";
import { BrowserRouter as Router,
         Route,
         NavLink, 
         Switch} from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import "./Card.scss";
import Education from "../education/Education";
import Contact from "../contact/Contact";

const Card = () => {
    return(
        <Router>
            <div className="navigation">
                <NavLink className="link" activeStyle={{backgroundColor:"brown"}} exact to="/home">
                    <i className="fa fa-home"></i>
                    <p className="icon-name">Home</p>
                </NavLink>
                <NavLink className="link" activeStyle={{backgroundColor:"brown"}} to="/about">
                    <i className="fa fa-user"></i>
                    <p className="icon-name">About</p>
                </NavLink> 
                <NavLink className="link" activeStyle={{backgroundColor:"brown"}} to="/education">
                    <i className="fa fa-book"></i>
                    <p className="icon-name">Education</p>
                </NavLink>  
                <NavLink className="link" activeStyle={{backgroundColor:"brown"}} to="/contact">
                    <i className="fa fa-phone"></i>
                    <p className="icon-name">Contact</p>
                </NavLink>             
            </div>
            <div className="card">         
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route> 
                    <Route path="/education">
                        <Education/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>                 
                </Switch>           
            </div>
        </Router>
    );
}

export default Card;