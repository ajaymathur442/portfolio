import React from "react";
import './About.scss';

const About = () => {
    return(
        <div className="about">
           <div className="about-heading"><h1 className="word-about">About</h1><h1>Me</h1></div>
           <div className="content">
              <img src={require("../../assets/winter_two.jpg")} alt="profile"/>   
              <p>
                  
              </p>
           </div>

        </div>
    )
}

export default About