import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/images/home.png";
import Common from "./Common";

const Home = () => {
return (
    <>
      <Common 
        name="Convert your idea into website with" 
        imgSrc={Web} visit="/service" 
        btnName="Get started" 
        />

    </>
)
}

export default Home;