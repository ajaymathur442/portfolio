import React from "react";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="cover-image"></div>
            <div className="content">
                <img className="profile" src={require("../../assets/cardpic.jpg")}/>
                <div className="data">
                    <p className="name">Ashish Kumar</p>
                    <p className="work">Front-end Web Developer</p>
                    <div className="icons">
                        <a href="" target="_blank"><i id="linkedin" className="fa fa-linkedin-square"></i></a>
                        <a href="" target="_blank"><i id="instagram" className="fa fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100011646934403" target="_blank"><i id="facebook" className="fa fa-facebook-square"></i></a>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default Home;