import React from 'react';
import selfie from "../assets/image/selfie.png";
export default function About (){



    return (
        <>
        <h1>About Me</h1>
        <div class= "aboutselfie">
         <img src={selfie}></img>
        </div>

        <p>I am  .. lore ipsum</p>
       
        </>

    )
}