import Navbar from "./components/NavBar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Navbar/>
        <Hero />
        <About />
        <Skills />
        <Projects />

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
