import react, { useState } from "react";
import {AiOutlineMail} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';

export default function About() {
  return (
    <>
      <div class="container is-widescreen">
        <h1>Contact Me</h1></div>
<div class= "columns">
        <h1>
          <ul>
          <a href="https://github.com/Z9tails" alt="Github">
            <FiGithub size = {250} />
          </a></ul>
        </h1>

        <h1><ul>
          <a href="mailto:mwtaylor993@gmail.com"> <AiOutlineMail size={250}/></a>
        </ul>
        </h1>
      </div>
    </>
  );
}