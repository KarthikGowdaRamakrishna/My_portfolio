import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Resume_KarthikGowdaRamakrishna_Main.pdf";
import Info from "./Info";

const About = () => {
    return (
       <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />
                <p className="about__description">I’m a graduate student pursuing my Masters in Information Systems and data science at Northeastern University. I am passionate about the world of software engineering and data, it brings me joy to delve into its intricacies. <br/> <br/> I have over <b>3 years</b>experience in the software industry has a seasoned <b>Sr Software/Analyst</b> at capgemini Information technology,  collaborating with talented individuals worldwide to create impactful digital solutions catering to businesses and consumers alike.
                </p>

               
            </div>
        </div>
       </section>
    )
}

export default About
