import './App.css';
import   NavBar  from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import "bootstrap/dist/css/bootstrap.min.css";
import {Skills} from "./components/Skills.js";
import { Projects } from './components/Projects.js';  
import {Contact} from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
