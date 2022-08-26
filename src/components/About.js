import React from 'react';
import selfie from "../assets/image/selfie.png";
export default function About (){



    return (
        <>
        <h1>About Me</h1>
        <div class = "about">
        <div class= "aboutselfie">
            <div class= "selfpromotion">
         <img src={selfie} style={{ width: "25%"}}  alt="pixelatedselfie" />
        </div>

        <p>I am Mark! I'm a West Coast nomad currently based in Oregon. I'm a graduate from
             Oregon State University (2013) with a Bachelors of Science in Recreation Resource Management with a focus in 
             Environmental Law (Water Rights and usage). My prior educational background includes Flight Technology,
             Dive Technology, Electrical Engineering, and Pharmaceutical Technology.  I've spend the Covid-Times 
             substitute teaching, using mechanical and electrical engineering to repair and modify
             aircraft, culminating in my completion of UCB's Full stack Programming bootcamp. I enjoy getting 
             to use my hands as much as my mind, expecially in a symbiotic relationship where a cohort works towards
             the same goals.   </p>
       
        </div>
        </div>
        </>

    )
}