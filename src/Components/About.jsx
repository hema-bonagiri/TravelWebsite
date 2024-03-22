import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
    return ( <
        >
        <
        div className = "mainc" >

        <
        div className = "mb-3" >
        <
        label htmlFor = "exampleFormControlInput1"
        className = "form-label" >
        <
        h1 > About Me < /h1> <
        /label> <
        /div> <
        div className = "card" >
        <
        h5 className = "card-header" > My Name < /h5> <
        div className = "card-body" >
        <
        h5 className = "card-title" > Bonagiri Hema < /h5> <
        p className = "card-text" >
        Welcome to my Week - 7 React Frontend Project!This project was crafted with <
        br / > the power of React, Bootstrap, HTML, and CSS, <
        br / >
        bringing together a seamless and engaging user experience. <
        /p> <
        Link to = { "/" }
        className = "btn btn-primary" >
        Now Go HomePage <
        /Link> <
        /div> <
        /div> <
        /div> <
        />
    );
};

export default About;