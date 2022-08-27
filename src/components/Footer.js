
import {AiOutlineMail} from 'react-icons/ai';
import {FiGithub, FiLinkedin} from 'react-icons/fi';

export default function About() {
  return (
    <>
      <div class="container is-widescreen">
        <div class="text is-size-1 has-text-white">
        <h1>Contact Me</h1>
        </div>
      </div>
      <div class="columns">
        <h1>
          <ul>
            <a href="https://github.com/Z9tails" alt="Github">
              <FiGithub size={250} />
            </a>
          </ul>
        </h1>
        <h1>
          <ul>
            <a href="https://www.linkedin.com/in/mark-taylor-engineering/" alt="Linkedin">
              <FiLinkedin size={250} />
            </a>
          </ul>
        </h1>
        <h1>
          <ul>
            <a href="mailto:mwtaylor993@gmail.com">
              <AiOutlineMail size={250} />
            </a>
          </ul>
        </h1>
      </div>

    </>
  );
}