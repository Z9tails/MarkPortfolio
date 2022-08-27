import React from 'react';
import p1 from '../assets/image/p1.png';
import Sphere3 from "../assets/image/Sphere3.png";
import Unbearable2  from "../assets/image/Unbearable2.png";



export default function About() {
  return (
    <>
      <div class="columns">
        <div class="column">
          <a href="https://lemming97.github.io/Project_1/" alt="project_1">
            {" "}
            <h2>Summer Punch</h2>
            <p>
              Project 1 AKA Summer Punch. We used API calls for a drink mixes
              and an insult/joke web app.
            </p>
            <img
              src={p1}
              style={{ width: "100%" }}
              alt="frontpageSummerpunch"
            />
          </a>{" "}
        </div>
        <div class="column">
          <a href="https://github.com/Z9tails/Project_2.git" alt="Project_2">
            {" "}
            <h2>UnBearable</h2>
            <p>
              Full stack program with login features and gameplay based in
              phaser
            </p>
            <img src={Unbearable2} style={{ width: "100%" }} alt="phasergame" />
          </a>{" "}
        </div>
        <div class="column">
          <a href="https://sorcerers-sphere.herokuapp.com/" alt="Project_2">
            {" "}
            <h2> Spheres</h2>
            <p>
              A full Stack MERN Project using the prior 6 months work and cohort
              function. Come get all your answers from the Spheres....
            </p>
            <img src={Sphere3} style={{ width: "100%" }} alt="Spherical" />
          </a>{" "}
        </div>
      </div>
    </>
  );
}




