import React from 'react';
import p1 from '../assets/image/p1.png';
import Sphere3 from "../assets/image/Sphere3.png";
import Unbearable2  from "../assets/image/Unbearable2.png";
import passwordgenerator from "../assets/image/password.png";
import budget from "../assets/image/budget.png";
import assignment from "../assets/image/assignment.png";



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
      <div class="columns ">
        <div class="column">
          <a href="https://github.com/Z9tails/passwordgenerator" alt="PwordGen">
            {" "}
            <h2>Non-Secure Password</h2>
            <p>A pocket form password generator. Don't run it online.</p>
            <img
              src={passwordgenerator}
              style={{ width: "25%" }}
              alt="passwordgen"
            />
          </a>{" "}
        </div>
        <div class="column">
            <a
              href="https://github.com/Z9tails/budgettracker.git"
              alt="budgettracker"
            >
              {" "}
              <h2>PWA budget Tracker</h2>
              <p>Do install this and run it offline</p>
              <img src={budget} style={{ width: "25%" }} alt="budgettracker" />
            </a>{" "}
          </div>
          <div class="column">
            <a
              href="https://github.com/Z9tails/EmployeeTrackerJacker"
              alt="followyourfriends"
            >
              {" "}
              <h2>This is a CLI interface for assigning team members and roles</h2>
              <p>This will take you back to the days of DOS</p>
              <img src={assignment} style={{ width: "25%" }} alt="track your team" />
            </a>{" "}
          </div>
        </div>
    </>
  );
}
