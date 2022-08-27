
import './App.css';
import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {GiLetterBomb} from 'react-icons/gi';
import resume from './assets/resume.pdf'

function App() {

  const [page, setPage]=useState('About');

  function renderPage(page){
    if(page ==="About"){return <About/>}
    else if (page === "Projects") {
      return <Projects />;}
    else if (page === "Contact") {
        return <Footer />;
      }
    }
  
  return (
    <>
      <Header page={page} setPage={setPage} />
      <div>{renderPage(page)}</div>

      <footer class="footer">
        <div class="content has-text-centered">
          {" "}
          <a href={resume}>
            <GiLetterBomb size={250} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
