import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer'

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
    <Header page={page} setPage={setPage}/>
    <div>{renderPage(page)}</div>
    
    
    </>
  );
}

export default App;
