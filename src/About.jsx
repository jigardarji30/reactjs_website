import React from "react";
import Common from "./Common";
import Web from "../src/images/about.svg";


const About = () => {
return (
    <>
        <Common 
          name="Welcome to about page" 
          imgSrc={Web} 
          visit="/contact" 
          btnName="Contact Us" 
        />

    </>
);
}

export default About;