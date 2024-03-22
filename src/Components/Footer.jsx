import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return ( <
        >
        <
        footer id = "footer_container"
        className = "text-center text-lg-start bg-body-tertiary text-muted" >
        <
        section className = "d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
        <
        div className = "me-5 d-none d-lg-block" >
        <
        span > Get connected with us on social networks: < /span> <
        /div> <
        div >
        <
        Link href className = "me-4 text-reset" >
        <
        i className = "bi bi-facebook" / >
        <
        /Link> <
        Link href className = "me-4 text-reset" >
        <
        i className = "bi bi-twitter-x" / >
        <
        /Link> <
        Link href className = "me-4 text-reset" >
        <
        i className = "bi bi-google" / >
        <
        /Link> <
        Link href className = "me-4 text-reset" >
        <
        i className = "bi bi-instagram" / >
        <
        /Link> <
        /div> <
        /section> <
        section className >
        <
        div className = "container text-center text-md-start mt-5" >
        <
        div className = "row mt-3" >
        <
        div className = "col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
        <
        h6 className = "text-uppercase fw-bold mb-4" >
        <
        i className = "fas fa-gem me-3" / >
        Travel ProjectApp <
        /h6> <
        p > This is my week - 7 internship project < /p> <
        /div> <
        div className = "col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" >
        <
        h6 className = "text-uppercase fw-bold mb-4" > Products < /h6> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Flight <
        /Link> <
        /p> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Hotel <
        /Link> <
        /p> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Food <
        /Link> <
        /p> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Travel <
        /Link> <
        /p> <
        /div> <
        div className = "col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
        <
        h6 className = "text-uppercase fw-bold mb-4" > Useful links < /h6> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Pricing <
        /Link> <
        /p> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Settings <
        /Link> <
        /p> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Orders <
        /Link> <
        /p> <
        p >
        <
        Link href = "#!"
        className = "text-reset" >
        Help <
        /Link> <
        /p> <
        /div> <
        /div> <
        /div> <
        /section> <
        div className = "text-center p-4"
        style = {
            { backgroundColor: "rgba(0, 0, 0, 0.05)" } } >
        ©2024 Copyright:
        <
        Link className = "text-reset fw-bold" > Bonagiri Hema < /Link> <
        /div> <
        /footer> <
        />
    );
};

export default Footer;